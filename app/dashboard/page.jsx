import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center text-white">
      <div className="text-center">
        <Image
          src="/dashboard-image.svg"
          alt="Picture of the author"
          width={400}
          height={400}
        />
        <h3 className="text-4xl font-bold mb-4 text-black">
          You have not created a company yet.
        </h3>
        <Button asChild>
          <Link href="/dashboard/company/createcompany"> Create A Company</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
