import { NextRequest, NextResponse } from 'next/server';
import {connection} from '../utils/connection';


export async function GET(request: NextRequest) {
  // For example, fetch data from your DB here
  let users = [];

// A simple SELECT query
try {
  const [results] = await connection.execute(
    'SELECT * FROM `hot_items`'
  );
  users = results

  console.log(results); // results contains rows returned by server
} catch (err) {
  console.log(err);
}

  return NextResponse.json(users, {
    status: 200,
  });
}
