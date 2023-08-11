import { Menu } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import MobileSidebar from "./mobile-sidebar"



type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center p-4">
        <Button variant="ghost" size="icon" className="md:hidden">
            <Menu/>
    
        <MobileSidebar/>
        </Button>
        <div className="flex w-full justify-end">
          <UserButton afterSignOutUrl="/"/>

        </div>
    </div>
  )
}

export default Navbar