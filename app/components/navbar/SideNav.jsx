import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="fixed h-full flex flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image
            src="/hajir.svg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between bg-gray-200 p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="ml-4">
            <p className="font-bold text-sm">Biraj Karki</p>
            <p className="text-gray-600 text-sm">birajkarki@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
