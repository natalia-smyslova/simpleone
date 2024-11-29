// import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main/ui/Page';
import links from '../shared/links/links';

function Main() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={links.main} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;