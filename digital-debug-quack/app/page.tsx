"use client";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/top-nav";
import { InputForm } from "@/components/input-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar></Navbar>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="inline-flex items-baseline">
          <h2 className="md:text-3xl text-xl font-semibold">
            Welcome to mak-mak.de
          </h2>
          <Image
            className="dark:invert mx-2"
            src="/duck.svg"
            alt="mak-mak.de duck logo"
            width={30}
            height={30}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by telling the duck whats wrong with{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              YOUR CODE
            </code>
            .
          </li>
          <li>And then...just Quack!</li>
        </ol>
        <InputForm></InputForm>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lllindemann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/duck.svg"
            alt="duck icon"
            className="dark:invert"
            width={16}
            height={16}
          />
          Me
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lllindemann/digital-debug-quack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/waddle.svg"
            alt="DuckFoot icon"
            className="dark:invert"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/lllindemann/digital-debug-quack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            className="dark:invert"
            width={16}
            height={16}
          />
          See on Github →
        </a>
      </footer>
    </div>
  );
}
