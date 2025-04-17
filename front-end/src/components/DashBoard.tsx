import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Home, Settings, Compass } from "lucide-react";

export default function DashBoard() {
  return (
    <div className="relative">
      <div className="w-[251px] h-[156px] absolute top-[44px] left-[80px] ">
        <Link href="/">
          <Button variant="ghost" className="justify-start w-full">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link href="/explore">
          <Button variant="ghost" className="justify-start w-full">
            <Compass className="mr-2 h-4 w-4" />
            Explore
          </Button>
        </Link>
        <Link href="/donation" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="justify-start w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View page
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" className="justify-start w-full">
            <Settings className="mr-2 h-4 w-4" />
            Account settings
          </Button>
        </Link>
      </div>
    </div>
  );
}
