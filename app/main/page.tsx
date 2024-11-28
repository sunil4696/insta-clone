'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  content: string;
  created_at: string;
};

export default function TestPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts', { method: 'GET' }); 
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white text-black p-6 border-r border-gray-300 flex flex-col">
        <h2 className="text-xl font-bold mb-6 cursor-pointer p-1 rounded">
          Instagram
        </h2>

        <ul className="flex-grow space-y-4">
          <li className="hover:bg-gray-300 p-2 rounded">홈</li>
          <li className="hover:bg-gray-300 p-2 rounded">검색</li>
          <li className="hover:bg-gray-300 p-2 rounded">탐색 팁</li>
          <li className="hover:bg-gray-300 p-2 rounded">릴스</li>
          <li className="hover:bg-gray-300 p-2 rounded">메시지</li>
          <li className="hover:bg-gray-300 p-2 rounded">알림</li>
          <li
            className="hover:bg-gray-300 p-2 rounded cursor-pointer"
            onClick={() => router.push('/posts')}
          >
            만들기
          </li>
          <li className="hover:bg-gray-300 p-2 rounded">프로필</li>
        </ul>
      </aside>

      <div
        className="background"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '200vh',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '12px',
        }}
      >

        <div
          className="story"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '13vh',
            gap: '20px',
          }}
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '0.5px solid black',
              }}
            />
          ))}
        </div>

        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={post.id || index}
              className="post"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '420px',
                gap: '3px',
              }}
            >

              <div
                className="name_tag"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '55px',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '0.5px solid black',
                  }}
                />
                <div><b>Name</b></div>
                <div style={{ color: 'gray' }}>•</div>
                <div style={{
                  color: 'gray'
                }}>
                  {new Date(post.created_at).toLocaleString()}
                </div>
              </div>

              <div
                className="picture"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  border: '1px solid black',
                  width: '57vh',
                  height: '60vh',
                }}
              ></div>

              <div className="emotion_tag" style={{ display: 'flex', gap: '5px' }}>
                <div style={{ border: '1px solid black' }}>하트</div>
                <div style={{ border: '1px solid black' }}>댓글</div>
                <div style={{ border: '1px solid black' }}>공유</div>
                <div style={{ width: '38vh' }}></div>
                <div style={{ border: '1px solid black' }}>스크랩</div>
              </div>

              <div><b>좋아요 -개</b></div>
              <ul className="comment_tag">
                <li><b>Name</b> {post.content}</li>
                <li style={{ color: 'gray' }}>댓글 모두 보기</li>
                <li style={{ color: 'gray' }}>댓글 달기...</li>
              </ul>
              <div style={{ borderBottom: '1px solid gray' }}></div>
            </div>
          ))
        ) : (
          <div>게시물이 없습니다.</div>
        )}
      </div>
    </>
  );
}
