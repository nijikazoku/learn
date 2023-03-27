import Desc from "../components/Desc";
import Footer from "../components/Footer";
import PageFooter from "../components/PageFooter";
import TestHeader from "../components/TestHeader";

const index = () => {
  return (
    <div className="dark:from-[#2C58CF] dark:via-[#1a3171] dark:to-[#081741] pb-[70px] dark:bg-gradient-to-t">
      <TestHeader />
      <Desc />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default index;
