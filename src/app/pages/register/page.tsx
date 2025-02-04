"use client"

import { useState } from "react";
import LoginModal from "@/app/components/LoginModal";
import StatusBar from "@/app/components/Status";

export default function Home() {
  const [status, setStatus] = useState("Bem-vindo");

  return (
    <>
      <StatusBar status={status} />
<h1>REGISTER</h1>
<h1>REGISTER</h1>
<h1>REGISTER</h1>
<h1>REGISTER</h1>
<h1>REGISTER</h1>

      <LoginModal setStatus={setStatus} />
    </>
  );
}
