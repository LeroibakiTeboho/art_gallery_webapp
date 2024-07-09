"use client";

import { useEffect } from "react";

import React from "react";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-2xl text-red-500">Error fetching users data</div>
    </div>
  );
}

export default ErrorPage;
