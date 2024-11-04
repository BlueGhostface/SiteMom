"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";



export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const NavigateHome = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const NavigateContact = () => {
    if (pathname !== "/contact") {
      router.push("/contact");
    }
  };

  const NavigateFaq = () => {
    if (pathname !== "/faq") {
      router.push("/faq");
    }
  };

  return (
    <nav className="flex justify-center p-5">
      <div className="bg-nav-background text-white py-4 w-3/5 content-center self-center rounded-lg">
        <div className="container flex-col grow items-center justify-between">
          {/* Top Section - Title */}
          <div className="w-2/5 my-2 flex grow justify-center ">
            <h1
              className={`text-2xl font-bold text-nav-Text-Title ${
                pathname === "/" ? "" : "cursor-pointer"
              }`}
              onClick={NavigateHome}
            >
              Pedicure Tine
            </h1>
          </div>

          <div className="flex grow">
            {/* bottom Section - Buttons */}
            <div className="w-3/5 left-0 flex grow justify-center ">
            <Navbutton path={pathname} currentpath="/" name="Home" fn={NavigateHome}></Navbutton>
            <Navbutton path={pathname} currentpath="/contact" name="Contact" fn={NavigateContact}></Navbutton>
            <Navbutton path={pathname} currentpath="/faq" name="FAQ" fn={NavigateFaq}></Navbutton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface navbuttonprops{
  path:string;
  currentpath:string;
  name:string;
  fn: ()=> void;
}

function Navbutton({path,currentpath,name,fn}: navbuttonprops) {
  return (
    <Button
      disabled={path === currentpath}
      className={`w-1/3 ${
        path === currentpath
          ? " bg-nav-background-disabled text-nav-Text-Button"
          : "bg-nav-background-button hover:bg-nav-background-button-Hover"
      } `}
      onClick={fn}
    >
      {name}
    </Button>
  );
}