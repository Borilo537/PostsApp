"use client"

import { useState } from "react";
import LoginModal from "@/app/components/LoginModal";
import StatusBar from "@/app/components/Status";

export default function Home() {
  const [status, setStatus] = useState("Bem-vindo");

  return (
    <>
      <StatusBar status={status} />

      <LoginModal setStatus={setStatus} />
    </>
  );
}
