"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const NavigateHome = () => {
    router.push("/");
  };

  return (
    <nav className="bg-nav-background text-white py-4 px-10">
      <div className="container mx-auto flex grow items-center justify-between">
        {/* Left Section - Title (30%) */}
        <div className="w-3/10 grow">
          <h1 className="text-2xl font-bold" onClick={NavigateHome}>Pedicure Tine</h1>
        </div>

        {/* Right Section - Buttons (60%) */}
        <div className="w-6/10 flex grow justify-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Contact
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            FAQ
          </Button>
        </div>
      </div>
    </nav>
  );
}
