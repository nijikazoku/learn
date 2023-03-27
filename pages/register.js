import { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import TestHeader from "../components/TestHeader";

const Register = () => {
  return (
    <Layout>
      <TestHeader />
      <div className={`py-3  w-full h-full`}>
        <div className="py-5">
          <h1 className="w-[80%] text-4xl mx-auto">会員登録</h1>
          <div className="flex w-[80%] mx-auto py-2">
            <div> アカウントをお持ちですか？</div>
            <Link href="/login" className="underline text-yellow-600">
              ログイン
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
            <input
              type="password"
              className="border outline-none bg-transparent p-3 w-full"
              placeholder="パスワード(確認用)"
            />
            <input
              type="text"
              className="border outline-none bg-transparent p-3 w-full"
              placeholder="プロモーションコード"
            />
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="w-8 h-8" />
              <div>
                <p className="text-sm">
                  私は18歳以上であり、以下の条件を承諾します。
                  <span className="font-bold text-lg text-yellow-300 underline">
                    ご利用条件
                  </span>
                  と
                  <span className="font-bold text-lg text-yellow-300 underline">
                    利用規約
                  </span>
                </p>
              </div>
            </div>
            <button className="w-full bg-yellow-300 text-black py-2 font-bold text-lg border-b-4 border-yellow-600 border-r-2">
              今すぐ遊ぶ
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
