"use client";

interface StatusBarProps {
  status: string; // Define o tipo da prop
}

export default function StatusBar({ status }: StatusBarProps) {
  return (
    <div className="backdrop-blur-md z-20 fixed top-0 left-0 rounded-br-xl bg-dark py-2 px-2 text-white">
      {status}
    </div>
  );
}
