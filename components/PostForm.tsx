'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const PostForm = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }), 
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess('게시물이 성공적으로 등록되었습니다!');
      setContent('');

      router.push('/main'); 
    } else {
      setError(data.error || '게시물 등록에 실패했습니다.');
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{
            display:'flex',
            justifyContent:'center',
            border:'1px, solid gray',
            width:'auto',
            height:'auto'
        }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="게시물을 작성하세요..."
            required
            style={{
              width:'250px',
              height:'230px'
            }}
          />
        </div>

        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end',
            flexDirection:'column',
            height:'10vh'
        }}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        <button type="submit" disabled={loading} 
            style={{ 
                display:'flex', 
                justifyContent: 'center',
                alignItems:'center', 
                backgroundColor:'blue',
                width: '100px',
                height: '50px', 
                color:'white',
                padding:'10px, 20px',
                border:'none',
                borderRadius:'10px',
                cursor: loading ? 'not-allowed' : 'pointer'
                
                }}>

          {loading ? '등록 중...' : '게시물 등록'}
        </button>
    </div>
      </form>
    </div>
  );
};

export default PostForm;
