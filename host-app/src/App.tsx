import React from 'react';

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

function App() {

  return (
    <>
      <RemoteHeader/>
      <RemoteButton text='ali baba'/>
      <RemoteButton text='veli baba'/>
      <RemoteButton text='deli baba'/>
    </>
  )
}

export default App
