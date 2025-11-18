"use client";

import { useEffect,startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {

  const router = useRouter();

  useEffect(() => {
    console.error("Error on page:", error);
  }, [error]);

  const handleReload = () => {
    startTransition(()=>{
      router.refresh();
      reset();
    });
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-danger fw-bold mb-2" style={{ fontSize: "1.75rem" }}>
        ⚠️ Something went wrong
      </h1>

      <p className="text-secondary mb-4">
        We couldn’t load the products. Please check your connection or try again.
      </p>

      <button
        onClick={()=>handleReload()}
        className="btn btn-primary px-4 py-2"
      >
        Try Again
      </button>
    </div>
  );
};