"use client"

import Image from "next/image";
import { useState, useEffect } from 'react';

import TextProcessor from "@/app/components/editor/TextProcessor";
import { Sidebar } from "@/app/components/layout/Sidebar";

export default function Notepad() {
  const [header, setHeader] = useState<string[]>([])

  useEffect(() => {
    console.log("header", header);
  }, [header]);

  return (
    <>
      <Sidebar list={header} />
      <main className="w-full transition-all ease-out relative lg:ml-0 px-4 py-4">
        <TextProcessor onChange={setHeader} />
      </main>
    </>
  );
}
