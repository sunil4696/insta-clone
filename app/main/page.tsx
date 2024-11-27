'use client';

import { useRouter } from "next/navigation"

export default function TestPage() {
  const router = useRouter();

   return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white text-black p-6 border-r border-gray-300 flex flex-col ">
        <h2 className="text-xl font-bold mb-6 cursor-pointer p-1 rounded">Instagram</h2>
        
        <ul className="flex-grow space-y-4">
          <li className="hover:bg-gray-300 p-2 rounded">홈</li>
          <li className="hover:bg-gray-300 p-2 rounded">검색</li>
          <li className="hover:bg-gray-300 p-2 rounded">탐색 팁</li>
          <li className="hover:bg-gray-300 p-2 rounded">릴스</li>
          <li className="hover:bg-gray-300 p-2 rounded">메시지</li>
          <li className="hover:bg-gray-300 p-2 rounded">알림</li>
          <li className="hover:bg-gray-300 p-2 rounded cursor-pointer"
           onClick={() => router.push('/posts')}>만들기</li>

          <li className="hover:bg-gray-300 p-2 rounded">프로필</li>  
        </ul>
        <ul>
        <li className="hover:bg-gray-300 p-1 rounded">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
              marginTop: 'auto',
            }}>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: '#333'
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: '#333'
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                backgroundColor: '#333'
              }}></div>
              </div>
            </li>
        </ul>
      </aside>
//여기까지 사이드 바

<div className='background'
    style={{
      display:'flex',
      alignItems: 'center',
      width: '200vh',
      height: 'auto',
      gap: '8px',
      fontSize: '12px',
      flexDirection:'column'
      }}>

    <div className= "story" 
    style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '13vh',
      gap: '20px'
    }}>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div style={{
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
    </div>

    <div className='post' style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '420px',
                                height: 'auto',
                                backgroundColor: 'solid black',
                                gap:'3px'
                                
                                

    }}>

    <div className= 'name_tag' style={{
                              display:'flex', 
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'row',
                              height: '55px',
                              gap: '10px'
                              }}>
    <div style={{
      width: '40px', 
      height: '40px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div><b>Name</b></div>
      <li style={{color: 'gray'}}>timestamp</li>
      <div style={{width: '28vh'}}></div>
       <div className='other' style={{
                              display: 'flex', 
                              gap: '3px',     
                              justifyContent: 'center'}}>
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div> 
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div>
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div>
      </div>
      </div>
      <div className='picture' style ={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>
    <div style={{
            width: '60vh',       
            height: '60vh',      
            backgroundColor: 'white', 
            border: '1px solid black' 
          }}>
        </div>
      </div>
      <div className= 'emotion_tag' style={{
                              display:'flex', 
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'row',
                              height: 'auto',
                              gap: '5px'
                              }}>
    <div style={{border:'1px solid black'}}>하트</div>
    <div style={{border:'1px solid black'}}>댓글</div>
    <div style={{border:'1px solid black'}}>공유</div>
    <div style={{width: '38vh'}}></div>
    <div style={{border:'1px solid black'}}>스크랩</div>
    </div>

    <div><b>좋아요 -개</b></div>
    <ul className= 'comment_tag'>
    <li><b>Name</b> comment</li>    
    <li style={{color:'gray'}}>댓글 모두보기</li>
    <li style={{color:'gray'}}>댓글 달기...</li>
    </ul>
    <div style={{borderBottom:'1px solid gray'}}></div>

    <div className= 'name_tag' style={{
                              display:'flex', 
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'row',
                              height: '60px',
                              gap: '10px'
                              }}>
    <div style={{
      width: '40px', 
      height: '40px', 
      borderRadius: '50%', 
      border: '0.5px solid black'
    }}>
      </div>
      <div><b>Name</b></div>
      <li style={{color: 'gray'}}>timestamp</li>
      <div style={{width: '28vh'}}></div>
       <div className='other' style={{
                              display: 'flex', 
                              gap: '3px',     
                              justifyContent: 'center'}}>
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div> 
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div>
          <div style={{
          width: '4px', 
          height: '4px', 
          borderRadius: '50%', 
          backgroundColor: 'black'
          }}>
          </div>
      </div>
      </div>
      <div className='picture' style ={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>
    <div style={{
            width: '60vh',       
            height: '60vh',      
            backgroundColor: 'white', 
            border: '1px solid black' 
          }}>
        </div>
      </div>
      <div className= 'emotion_tag' style={{
                              display:'flex', 
                              justifyContent:'center',
                              alignItems:'center',
                              flexDirection:'row',
                              height: 'auto',
                              gap: '5px'
                              }}>
    <div style={{border:'1px solid black'}}>하트</div>
    <div style={{border:'1px solid black'}}>댓글</div>
    <div style={{border:'1px solid black'}}>공유</div>
    <div style={{width: '38vh'}}></div>
    <div style={{border:'1px solid black'}}>스크랩</div>
    </div>

    <div><b>좋아요 -개</b></div>
    <ul className= 'comment_tag'>
    <li><b>Name</b> comment</li>    
    <li style={{color:'gray'}}>댓글 모두보기</li>
    <li style={{color:'gray'}}>댓글 달기...</li>
    </ul>
    <div style={{borderBottom:'1px solid gray'}}></div>
    
    </div>

</div>    

  </>
    )
  }