import PostForm from '@/components/PostForm';

const PostPage = () => {
  return (
    <div className='bg'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '200vh',
      height: '100vh'
    }}>

    <div className='postbgground'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'column',
      width: '400px',
      height: '400px',
      backgroundColor: 'solid black',
      border:'3px, solid gray',
      borderRadius: '10%', 
      gap:'20px'

}}>
      <div style={{
        display:'flex',
        alignItems:'center',
        fontSize:'20px'
      }}>게시물 작성</div>
      <PostForm />
    </div>
  </div>
  );
};

export default PostPage;
