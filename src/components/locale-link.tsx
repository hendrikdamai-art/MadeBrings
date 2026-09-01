"use client";

import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/locale-provider";

type Props = LinkProps &
  Omit<ComponentProps<"a">, "href"> & {
    href: string;
  };

export function LocaleLink({ href, ...props }: Props) {
  const { h } = useLocale();
  return <Link href={h(href)} {...props} />;
}
