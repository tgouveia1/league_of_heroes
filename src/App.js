import './App.css';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [data, setData] = useState({
    my_name: "Tatiana Gouveia",
    project_name: "League of Heroes"
  })
  return (
    <>
      <BrowserRouter>
        <Header info={data}></Header>
        <Content></Content>
        <Footer info={data}></Footer>
      </BrowserRouter>
    </>
  );

}

export default App;

