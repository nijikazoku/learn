import FeaturedMatch from "../components/FeaturedMatch";
import Layout from "../components/Layout";
import SlideBanner from "../components/SlideBanner";
import Sports from "../components/sportstop/Sports";
import TestHeader from "../components/TestHeader";

const sports = () => {
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
        {/* <div className="mt-5">
          <Desc />
        </div> */}
      </div>
    </Layout>
  );
};

export default sports;
