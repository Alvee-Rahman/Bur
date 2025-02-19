import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="pt-[50px]">
        <h1 className="text-center text-[2rem] font-bold text-gray-700">
          Log in
        </h1>
        <form action="" className="mx-auto w-max space-y-8">
          <div></div>
          <input
            type="text"
            placeholder="enter your phone number"
            className="block h-[45px] w-[400px]  border-b-2 border-black px-2"
          />
          <input
            type="password"
            className="block h-[45px] w-[400px]  border-b-2 border-black px-2"
            placeholder="enter your password"
          />
          <div className="flex">
            {" "}
            <p>Create an account!</p>
            <Link href={"/signup"} className="ps-2">
              Sign up
            </Link>
          </div>
          <button className="h-[45px] w-[400px] bg-amber-500 rounded-md font-bold">
            login
          </button>
        </form>
      </div>
    </>
  );
}
