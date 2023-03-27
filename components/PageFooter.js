import Link from "next/link";

const PageFooter = () => {
  return (
    <div className="space-y-2">
      <img
        className="w-[20rem] mx-auto"
        src="https://betchannel-free.com/betchannel-free.com/img/common/logo2.png?1675828435"
        alt=""
      />
      <div className="space-y-4">
        <div className="w-[70%] mx-auto space-y-3">
          {/* スポーツ */}
          <Link
            href="/sports"
            className="flex justify-center items-center space-x-2 rounded-lg dark:border-blue-700 border p-2 shadow-xl"
          >
            <img
              className="w-10"
              src="https://www.svgrepo.com/show/144177/baseball.svg"
              alt=""
            />
            <p className="font-bold whitespace-nowrap text-xl">
              無料スポーツで遊ぶ
            </p>
          </Link>
          {/* ゲーム */}
          <Link
            href="/casino"
            className="flex justify-center items-center space-x-2 rounded-lg dark:border-blue-700 border p-2 shadow-xl"
          >
            <p className="text-xl font-bold">無料ゲームで遊ぶ</p>
            <img
              className="w-10"
              src="https://www.svgrepo.com/show/210403/slot-machine-casino.svg"
              alt=""
            />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-1 text-center py-2">
          <li>遊び方NAVI</li>
          <li>運営会社</li>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
          <li>よくある質問</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  );
};

export default PageFooter;
