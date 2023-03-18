import FeaturedMatch from "../components/FeaturedMatch";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SlideBanner from "../components/SlideBanner";
import Sports from "../components/sportstop/Sports";

const index = () => {
  return (
    <Layout>
      <Header />
      <div>
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
