import {  NextResponse } from 'next/server';
import { connection } from '../utils/connection';

// request?: NextRequest


export async function GET() {
  // For example, fetch data from your DB here
  let users:unknown[] = [];

// A simple SELECT query
try {
  const [results] = await connection.execute(
    'SELECT * FROM `hot_items`'
  );
  users = results as unknown[];

  console.log(results); // results contains rows returned by server
} catch (err) {
  console.log(err);
}

  return NextResponse.json(users, {
    status: 200,
  });
}
