import { useState } from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
