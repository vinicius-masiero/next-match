import { auth } from "@/auth";
import { Button } from "@heroui/button";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-6 text-secondary">
      <GiMatchTip size={100} />
      <h1 className="text-4xl text-center font-bold">Welcome to NextMatch</h1>
      {session ? (
        <Button as={Link} href="/members" size="lg" color="secondary" variant="bordered">
          Continue
        </Button>
      ) : (
        <div className="flex gap-4">
          <Button as={Link} href="/login" size="lg" color="secondary" variant="bordered">
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            size="lg"
            color="secondary"
            variant="bordered"
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
}
