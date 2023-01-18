import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MenuTabs from './components/Tabs';
// import "./assets/fonts/Poppins-Regular.ttf";
// import "./assets/images/fontfamily";

function App() {
  return (
   <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path="/:tab" element={<MenuTabs />} />
   </Routes>
  );
}

export default App;
