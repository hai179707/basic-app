import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-poppins">
      <Header />
      <main className="min-h-[2000px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
