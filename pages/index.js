import FeaturedMatch from "../components/FeaturedMatch";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SlideBanner from "../components/SlideBanner";
import Sports from "../components/sportstop/Sports";
import TestHeader from "../components/TestHeader";

const index = () => {
  return (
    <Layout>
      <TestHeader />
      {/* <Header /> */}
      <div className="">
        <SlideBanner />
        <div className="relative">
          <FeaturedMatch />
        </div>
        <Sports />
      </div>
    </Layout>
  );
};

export default index;
