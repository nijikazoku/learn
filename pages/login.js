import Link from "next/link";
import Layout from "../components/Layout";
import TestHeader from "../components/TestHeader";

const login = () => {
  return (
    <Layout>
      <TestHeader />
      <div className="py-3  w-full h-full ">
        <div className="py-5">
          <h1 className="w-[80%] text-4xl mx-auto">ログイン</h1>
          <div className="flex w-[80%] mx-auto py-2 whitespace-nowrap space-x-2">
            <div className="text-base"> アカウントをお持ちでない場合</div>
            <Link href="/register" className="underline text-red-600">
              新規登録
            </Link>
          </div>
          <div className="w-[80%] mx-auto space-y-3">
            <input
              type="email"
              className="border outline-none bg-transparent p-3 w-full"
              placeholder="メールアドレス"
            />
            <input
              type="password"
              className="border outline-none bg-transparent p-3 w-full"
              placeholder="パスワード"
            />
            <button className="w-full bg-blue-700 text-white py-2 font-bold text-lg border-b-4 border-blue-900 border-r-2">
              送信
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;
