"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  let age = 16;
  let content;
  if (age >= 18) {
    content = <h1>Adult</h1>;
  } else {
    content = <h1>Child</h1>;
  }
  const router = useRouter();
  return (
    <div>
      <h1 className="red">Home</h1>
      {content}
      <div>
        <button onClick={() => router.push("/login")}>去登录页</button>
      </div>
      <button onClick={() => router.push("/home")}>去首页</button>
    </div>
  );
}
