import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="flex text-3xl gap-5 p-4 m-2">Landing page(Unprotected)</h1>
      </div>
      <div>
        <Link href="/sign-in" className='justify-between m-50 gap-10 p-1 w-full'>
          <Button className="bg-red-900 w-40">
            Login
          </Button>
        </Link>
        <Link href="/sign-up"className='justify-between m-50 gap-10 p-1 w-full'>
          <Button className="bg-green-700 w-40 border-teal-950">
            Register
          </Button>
        </Link>

      </div>
    </>
  )
}

export default LandingPage