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
      <div className="bg-slate-300 dark:bg-slate-800">
        <SlideBanner />
        <div className="relative">
          <FeaturedMatch />
        </div>
        <Sports />
      </div>
    </Layout>
  );
};

export default sports;
