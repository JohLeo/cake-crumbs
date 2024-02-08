import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './Start';
import MyLove from './MyLove';
import Darling from './Darling';
import Reply from './Reply';
import Send from './Send';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/mylove" element={<MyLove />} />
        <Route path="/darling" element={<Darling />} />
        <Route path="/reply" element={<Reply />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;