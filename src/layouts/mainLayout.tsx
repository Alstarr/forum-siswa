import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps ) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
