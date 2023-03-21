import { useState } from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="">
      <main className="">{children}</main>
      <Footer setShowRegister={setShowRegister} />
    </div>
  );
};

export default Layout;
