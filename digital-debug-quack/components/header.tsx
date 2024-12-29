"use client";
import Link from "next/link"
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export default function SiteHeader() {
  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center px-4 justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-purple-600">Logo</h1>
        </Link>
        <MainNav />
        <MobileNav />
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}
