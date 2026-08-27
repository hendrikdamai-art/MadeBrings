"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { getProductById } from "@/lib/commerce";

export type CartLine = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  add: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const STORAGE_KEY = "madebrings-order-list";
const CartContext = createContext<CartContextValue | null>(null);
const emptyLines: CartLine[] = [];
const listeners = new Set<() => void>();

let lines: CartLine[] = emptyLines;
let sheetOpen = false;
let loaded = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

function readStoredLines(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyLines;
    const parsed = JSON.parse(raw) as CartLine[];
    const next = parsed.filter(
      (line) => line.productId && line.quantity > 0 && getProductById(line.productId),
    );
    return next.length ? next : emptyLines;
  } catch {
    return emptyLines;
  }
}

function loadIfNeeded() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  lines = readStoredLines();
}

function subscribe(listener: () => void) {
  loadIfNeeded();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return lines;
}

function getOpenSnapshot() {
  return sheetOpen;
}

function getServerSnapshot() {
  return emptyLines;
}

function getOpenServerSnapshot() {
  return false;
}

function setLines(next: CartLine[]) {
  lines = next.length ? next : emptyLines;
  persist();
  emit();
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const currentLines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const open = useSyncExternalStore(subscribe, getOpenSnapshot, getOpenServerSnapshot);

  const add = useCallback((productId: string, quantity = 1) => {
    const current = lines;
    const existing = current.find((line) => line.productId === productId);
    const next = existing
      ? current.map((line) =>
          line.productId === productId
            ? { ...line, quantity: Math.min(24, line.quantity + quantity) }
            : line,
        )
      : [...current, { productId, quantity: Math.min(24, quantity) }];
    setLines(next);
    sheetOpen = true;
    emit();
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const next =
      quantity <= 0
        ? lines.filter((line) => line.productId !== productId)
        : lines.map((line) =>
            line.productId === productId
              ? { ...line, quantity: Math.min(24, quantity) }
              : line,
          );
    setLines(next);
  }, []);

  const remove = useCallback((productId: string) => {
    setLines(lines.filter((line) => line.productId !== productId));
  }, []);

  const clear = useCallback(() => setLines(emptyLines), []);

  const setOpen = useCallback((nextOpen: boolean) => {
    sheetOpen = nextOpen;
    emit();
  }, []);

  const itemCount = useMemo(
    () => currentLines.reduce((sum, line) => sum + line.quantity, 0),
    [currentLines],
  );

  const subtotal = useMemo(
    () =>
      currentLines.reduce((sum, line) => {
        const product = getProductById(line.productId);
        return sum + (product ? product.priceIdr * line.quantity : 0);
      }, 0),
    [currentLines],
  );

  const value = useMemo(
    () => ({
      lines: currentLines,
      add,
      setQuantity,
      remove,
      clear,
      itemCount,
      subtotal,
      open,
      setOpen,
    }),
    [currentLines, add, setQuantity, remove, clear, itemCount, subtotal, open, setOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
