import Users from '@/components/Users';
import React from 'react';

async function fethUsers() {
  const res =  await fetch('https://reqres.in/api/users')
  const data = await res.json()
  // console.log(data.data)
  return data.data
}

async function IndexPage() {
  const users = await fethUsers()
  // console.log(users)

  return (
    <>
      {/* {JSON.stringify(users)} */}
      <Users users={users}/>
    </>
  );
}

export default IndexPage;