import React from 'react'
import ErrorBound from './ErrorBound';
import UserProfile from './UserProfile';

export default function ErrorBoundary() {
    const userData = {
    name: "John Doe",
    age: 25,
  };
  const userData1=null;

  return (
    <>
        <div>ErrorBoundary</div>
    <ErrorBound>
    <UserProfile userData={userData}/>        
    </ErrorBound>
    <ErrorBound>
        <UserProfile userData={userData1}/>
    </ErrorBound>
    </>
  )
}
