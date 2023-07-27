import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <div>
        <h1 className="text-3xl">Landing page(Unprotected)</h1>
      </div>
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>

      </div>
    </>
  )
}

export default LandingPage