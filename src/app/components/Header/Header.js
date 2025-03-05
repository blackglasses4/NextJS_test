"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Profile", href: "/profile" },
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        backgroundColor: "lightgreen",
        padding: "10px",
        color: "white",
      }}
    >
      <div>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive ? "green" : "black",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
