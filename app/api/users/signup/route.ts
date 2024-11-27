import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    // 요청 본문에서 JSON 데이터를 받음
    const { username, email, password } = await req.json();

    // 입력값 검증
    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스에 사용자 삽입 쿼리
    const result = await query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`,
      [username, email, hashedPassword]
    );

    // 삽입된 사용자 반환
    const user = result.rows[0];

    // 성공적인 응답 반환
    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}