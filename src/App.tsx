import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/globalStyles';
import Navbar from '@components/navigation/Navbar';
import Main from '@pages/Main';
import PaginatedItems from '@pages/Blog/PaginatedItems';
import BlogPost from '@pages/Blog/BlogPost';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<PaginatedItems itemsPerPage={5} />} />
          <Route path="/blog/*" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
