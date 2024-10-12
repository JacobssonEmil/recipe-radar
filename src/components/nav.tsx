"use client";

import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
