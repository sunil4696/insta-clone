import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    // 입력값 검증
    if (!content) {
      return NextResponse.json({ error: '내용을 입력해야 합니다.' }, { status: 400 });
    }

    // 데이터베이스에 게시물 삽입 쿼리 (user_id는 제외)
    const result = await query(
      'INSERT INTO posts (content) VALUES ($1) RETURNING id, content',
      [content]
    );

    const post = result.rows[0];

    return NextResponse.json({
      message: '게시물이 성공적으로 등록되었습니다.',
      post,
    });
  } catch (error) {
    console.error('게시물 등록 중 오류 발생:', error);
    return NextResponse.json({ error: '게시물 등록에 실패했습니다.' }, { status: 500 });
  }
}