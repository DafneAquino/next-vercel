import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <h1>Página About</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:React.ReactNode/* o también JSX.Element */) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
