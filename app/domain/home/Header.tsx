"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const NavigateHome = () => {
    if(pathname !== '/')  {
      router.push("/");
    }
  };

  const NavigateContact = () => {
    if(pathname !== '/contact') {
      router.push("/contact");
    }
  };

  return (
    <nav className="bg-nav-background text-white py-4 px-10">
      <div className="container mx-auto flex grow items-center justify-between">
        {/* Left Section - Title (30%) */}
        <div className="w-3/10 grow">
          <h1 className={`text-2xl font-bold ${pathname === '/' ? '' : 'cursor-pointer'}`} onClick={NavigateHome}>
            Pedicure Tine
          </h1>
        </div>
 
        {/* Right Section - Buttons (60%) */}
        <div className="w-6/10 flex grow justify-center space-x-4">
          <Button
            disabled={pathname === "/contact"}
            className={`${pathname === "/contact" ? " bg-red-500" : ""}`}
            onClick={NavigateContact}
          >
            Contact
          </Button>
          <Button
            disabled={pathname === "/"}
            className={`${pathname === "/" ? " bg-red-500" : ""} `}
            onClick={NavigateHome}
          >
            {" "}
            Home
          </Button>
        </div>
      </div>
    </nav>
  );
}
