"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const Navigate = (path: string) => {
    if (pathname !== path) {
      router.push(path);
      setMenuOpen(false);
    }
  };

  const currentPage = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/contact":
        return "Contact";
      case "/faq":
        return "FAQ";
      case "/behandeling":
        return "behandeling";
      default:
        return "Test";
    }
  };

  return (
    <nav>
      {/* mobile layout */}
      <div className="p-4 md:hidden bg-nav-background text-nav-Text-Title">
        {/* Top Section - Title and Breadcrumb */}
        <div className="flex justify-between items-center">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => Navigate("/")}
          >
            Pedicure Tine
          </h1>
          <span className="text-sm">{currentPage()}</span>
          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu className="text-white" />
          </button>
        </div>

        {/* Hamburger Menu - Only Visible in Mobile */}
        {menuOpen && (
          <div className="absolute left-0 w-full bg-nav-background mt-2 p-4 shadow-lg z-50 flex flex-col space-y-2">
            <button
              className={`p-2 rounded ${
                pathname === "/" ? "bg-nav-background-disabled text-nav-Text-Button" : "bg-nav-background-button"
              }`}
              onClick={() => Navigate("/")}
            >
              Home
            </button>
            <button
              className={`p-2 rounded ${
                pathname === "/contact" ? "bg-nav-background-disabled text-nav-Text-Button" : "bg-nav-background-button"
              }`}
              onClick={() => Navigate("/contact")}
            >
              Contact
            </button>
            <button
              className={`p-2 rounded ${
                pathname === "/behandeling" ? "bg-nav-background-disabled text-nav-Text-Button" : "bg-nav-background-button"
              }`}
              onClick={() => Navigate("/behandeling")}
            >
              behandeling
            </button>
            <button
              className={`p-2 rounded ${
                pathname === "/faq" ? "bg-nav-background-disabled text-nav-Text-Button" : "bg-nav-background-button"
              }`}
              onClick={() => Navigate("/faq")}
            >
              FAQ
            </button>
          </div>
        )}
      </div>
      {/* desktop layout */}
      <div className="hidden md:flex justify-center p-5">
        <div className="bg-nav-background text-white py-4 w-3/5 content-center self-center rounded-lg">
          <div className="container flex-col grow items-center justify-between">
            {/* Top Section - Title */}
            <div className="w-2/5 my-2 flex grow justify-center">
              <h1
                className={`text-2xl font-bold text-nav-Text-Title ${
                  pathname === "/" ? "" : "cursor-pointer"
                }`}
                onClick={() => Navigate("/")}
              >
                Pedicure Tine
              </h1>
            </div>

            <div className="flex grow">
              {/* Bottom Section - Buttons */}
              <div className="w-3/5 left-0 flex grow justify-center">
                <NavButton
                  path={pathname}
                  currentPath="/"
                  name="Home"
                  fn={() => Navigate("/")}
                />
                <NavButton
                  path={pathname}
                  currentPath="/contact"
                  name="Contact"
                  fn={() => Navigate("/contact")}
                />
                <NavButton
                  path={pathname}
                  currentPath="/behandeling"
                  name="Behandeling"
                  fn={() => Navigate("/behandeling")}
                />
                <NavButton
                  path={pathname}
                  currentPath="/faq"
                  name="FAQ"
                  fn={() => Navigate("/faq")}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavButtonProps {
  path: string;
  currentPath: string;
  name: string;
  fn: () => void;
}

function NavButton({ path, currentPath, name, fn }: NavButtonProps) {
  return (
    <Button
      disabled={path === currentPath}
      className={`w-1/3 ${
        path === currentPath
          ? "bg-nav-background-disabled text-nav-Text-Button"
          : "bg-nav-background-button hover:bg-nav-background-button-Hover"
      }`}
      onClick={fn}
    >
      {name}
    </Button>
  );
}
