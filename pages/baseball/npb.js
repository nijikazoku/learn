import DateSelect from "../../components/DateSelect";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const npb = () => {
  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        <div className="">
          <div className="bg-slate-700 py-1 text-lg font-bold px-4 ">野球</div>
          <div className="text-lg flex items-center border-b">
            <div className="border-r bg-[#0075C2]  py-1 text-center w-1/4">
              NPB
            </div>
            <div className="border-r py-1 text-center w-1/4">MLB</div>
            <div className="border-r py-1  text-center w-1/4">WBC</div>
            <div className="py-1 text-center w-1/4">その他</div>
          </div>
        </div>

        <div className="space-y-3">
          {/* フィルターボタン */}
          <div className="space-x-3 text-sm px-2">
            <button className="border rounded-md p-1"> ベット受付中</button>
            <button className="border rounded-md p-1"> ベット受付前</button>
            <button className="border rounded-md p-1"> ベット締切済</button>
          </div>
          <div className="w-[95%] mx-auto space-y-2">
            <div className="text-xl">今後の試合</div>
            <DateSelect />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default npb;
