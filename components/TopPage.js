import Desc from "./Desc";
import Footer from "./Footer";
import PageFooter from "./PageFooter";
import TestHeader from "./TestHeader";

const TopPage = () => {
  return (
    <div className="from-[#2C58CF] via-[#1a3171] to-[#081741] pb-[70px] bg-gradient-to-t">
      <TestHeader />
      <Desc />
      <PageFooter />
      <Footer />
    </div>
  );
};

export default TopPage;
