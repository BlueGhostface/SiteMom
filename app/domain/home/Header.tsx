import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



export function Header() {


    const router = useRouter();

    const NavigateHome = () => {
        router.push('/');
    };


  return (
    <header>
      <div className="flex flex-row  ">
            <div className="grow">
                <Button className="m-2 h-full text-xl font-bold hover:bg-campus-card-button-hover hover:drop-shadow-xl" onClick={NavigateHome}> Home</Button>
            </div>
        </div>
    </header>
  );
}