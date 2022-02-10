import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  BeakerIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import React from "react";
import { selectTotalItems } from "../slices/basketSlice";

const Header = () => {
  const items = useSelector(selectTotalItems);
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <div className="flex bg-white sticky z-50 p-3 top-0  mt-2 items-center md:justify-evenly justify-between ">
      <div
        className="mt-2 cursor-pointer
        "
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.jpeg" width={150} height={40} objectFit="contain" />
      </div>
      <div className="hidden bg-gray-100  flex-grow  flex-shrink border-2 rounded-2xl md:flex space-x-2 items-center border-gray-500 max-w-lg p-2">
        <SearchIcon className="w-7  text-center " />
        <input
          className="outline-none bg-gray-100 focus:outline-none"
          type="text"
          placeholder="What are you looking for ?"
        />
      </div>
      <div className="relative flex ml-2 items-center space-x-4">
        <p
          onClick={status === "authenticated" ? signOut : signIn}
          className="text-gray-500 cursor-pointer font-medium"
        >
          {status === "authenticated" ? "sign out" : "sign in"}
        </p>
        <ShoppingCartIcon
          onClick={() => {
            router.push("/checkout");
          }}
          className="cursor-pointer w-10 text-center"
        />
        <p className="absolute w-6 -mt-2 h-6 top-0 rounded-full text-center pb-2 right-0 text-white bg-yellow-400">
          {items}
        </p>
      </div>
    </div>
  );
};

export default Header;
