import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <header className="flex z-50 items-center justify-between sticky top-0 p-5 bg-white shadow-md ">
      <div className="cursor-pointer relative flex items-center h-10 ">
        <Image
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
          src="/logo.jpeg"
          objectFit="contain"
          layout="fixed"
          height={76}
          width={76}
        />
      </div>
      <div className="flex items-center text-gray-400 space-x-4 justify-end">
        <p
          onClick={() => {
            router.push("/adminpanel");
          }}
          className="inline-flex  hover:bg-gray-200 cursor-pointer px-2 p-2 rounded-full"
        >
          {status === "authenticated" ? "Admin Panel" : ""}
        </p>
        <p
          onClick={status === "authenticated" ? signOut : signIn}
          className="inline-flex  hover:bg-gray-200 cursor-pointer px-2 p-2 rounded-full"
        >
          {status === "authenticated" ? "sign out" : "sign in"}
        </p>
      </div>
    </header>
  );
};

export default Header;
