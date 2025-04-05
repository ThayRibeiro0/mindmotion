import React from 'react';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
