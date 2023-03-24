import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import db from "../../src/fire";

const BoardDisplay = () => {
  const [boardPosts, setBoardPosts] = useState([]);
  const [openReply, setOpenReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [boardReply, setBoardReply] = useState([]);
  const [parentId, setParentId] = useState("");

  //   削除ボタン
  const deleteComment = async (id) => {
    await deleteDoc(doc(db, "boardPosts", id));
  };
  const deleteReply = async (id) => {
    await deleteDoc(doc(db, "boardReply", id));
  };

  //   返信送信
  const sendReply = async () => {
    if (replyText === "") return;
    const replyData = {
      text: replyText,
      postedAt: new Date(),
      parentPostId: parentId,
      author: "Anonymous",
    };
    await addDoc(collection(db, "boardReply"), replyData);
    setOpenReply(false);
    setReplyText("");
  };

  //   コレクションを取得
  useEffect(() => {
    const postData = collection(db, "boardPosts");
    const q = query(postData, orderBy("postedAt", "desc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = [];
      snapshot.forEach((doc) => {
        postsData.push({ ...doc.data(), id: doc.id });
      });
      setBoardPosts(postsData);
    });
    return () => unsubscribe();
  }, []);

  // 返信表示
  useEffect(() => {
    const replyData = collection(db, "boardReply");
    const q = query(replyData, orderBy("postedAt", "desc"), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const replyData = [];
      snapshot.forEach((doc) => {
        replyData.push({ ...doc.data(), id: doc.id });
      });
      setBoardReply(replyData);
    });
    return () => unsubscribe();
  }, []);

  const handleReply = (id) => {
    setOpenReply(true);
    setParentId(id);
  };

  return (
    <div className="">
      <div className="text-2xl text-center py-2">LIVE掲示板</div>
      {boardPosts.map((boardPost, index) => {
        return (
          <div key={index} className="px-2 py-1 border-b shadow-md space-y-1">
            {/* コメント部分 */}
            <div className="flex justify-between">
              <div className="w-[80%] max-w-[80%]">
                <p className="text-sm">
                  {boardPost.postedAt
                    ? boardPost.postedAt.toDate().toLocaleString()
                    : ""}
                </p>
                <p className={`text-xl ${boardPost.color}`}>{boardPost.text}</p>
              </div>
              {/* 返信削除ボタン */}
              <div className="flex justify-end pr-3">
                <button
                  className="p-2"
                  onClick={() => handleReply(boardPost.id)}
                >
                  <img
                    className="w-7"
                    src="https://www.svgrepo.com/show/199959/reply-all-reload.svg"
                    alt=""
                  />
                </button>
                <button onClick={() => deleteComment(boardPost.id)}>
                  <img
                    className="w-7"
                    src="https://www.svgrepo.com/show/501836/trash-recycle-bin.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* 返信書き込み */}
            {openReply && parentId === boardPost.id && (
              <div className="flex space-x-2 items-center pb-2">
                <input
                  placeholder="返信を書き込む"
                  type="text"
                  className="bg-slate-800 outline-none py-1 px-2 rounded-lg"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button className="border rounded-lg p-1" onClick={sendReply}>
                  送信
                </button>
                <button
                  className="text-sm underline text-red-600"
                  onClick={() => setOpenReply(false)}
                >
                  閉じる
                </button>
              </div>
            )}
            {/* 返信表示 */}
            {boardReply
              .filter((reply) => reply.parentPostId === boardPost.id)
              .map((reply, index) => {
                return (
                  <div
                    key={index}
                    className="ml-10 px-3 justify-between flex items-center"
                  >
                    <div>
                      <p className="text-sm">
                        {reply.postedAt
                          ? reply.postedAt.toDate().toLocaleString()
                          : ""}
                      </p>
                      <p>{reply.text}</p>
                    </div>
                    <div className="flex justify-end">
                      <button onClick={() => deleteReply(reply.id)}>
                        <img
                          className="w-7"
                          src="https://www.svgrepo.com/show/501836/trash-recycle-bin.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default BoardDisplay;
