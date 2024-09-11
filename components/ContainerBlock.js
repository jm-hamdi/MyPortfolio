import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Jaouad Mhamdi -Software engineer, Developer, Designer, Programmer",
    description: ` Get in touch with me to know more.`,
    image: "/avatar.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
     
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
