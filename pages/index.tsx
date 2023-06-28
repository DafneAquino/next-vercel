import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Página About</h1>

      <h1 className='title'>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{" "}
        <code className='code'>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
