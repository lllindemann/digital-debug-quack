"use client";
import { Button } from "./ui/button";

const mainNavItems = ["Quack", "More About Quack", "More Quack"];

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {mainNavItems.map((item, index) => (
        <Button key={index} variant="link">
          {item}
        </Button>
      ))}
    </div>
  );
}
