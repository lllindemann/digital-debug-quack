"use client";
import Link from "next/link";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center px-4 justify-between">
        <Link href="/" className="inline-flex">
          <h1 className="md:text-3xl font-bold mx-2">Mak Mak!</h1>
          <Image
            className="dark:invert"
            src="/duck.svg"
            alt="mak-mak.de duck logo"
            width={20}
            height={20}
            priority
          />
        </Link>
        <MainNav />
        <MobileNav />
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}
