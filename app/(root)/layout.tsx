import * as React from "react";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      <main className="mx-auto w-11/12">{children}</main>
    </React.Fragment>
  );
}
