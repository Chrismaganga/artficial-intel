import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <div>
        <h1 className="flex text-3xl gap-5 p-4 items-center m-2">Landing page(Unprotected)</h1>
      </div>
      <div>
        <Link href="/sign-in">
          <Button className="bg-red-900">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-green-700">
            Register
          </Button>
        </Link>

      </div>
    </>
  )
}

export default LandingPage