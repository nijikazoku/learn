import Desc from "../components/Desc";
import Footer from "../components/Footer";
import PageFooter from "../components/PageFooter";
import TestHeader from "../components/TestHeader";

const index = () => {
  return (
    <div className="from-[#2C58CF] via-[#1a3171] to-[#081741] pb-[70px] bg-gradient-to-t">
      <TestHeader />
      <Desc />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default index;
