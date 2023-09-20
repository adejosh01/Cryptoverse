import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, CrytoDetails, Crytocurrencies, News } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact index element={<Homepage />}  />
            <Route exact path='/exchanges' element={<Exchanges />}  />
            <Route exact path='/crytocurrencies' element={<Crytocurrencies />}  />
            <Route exact path='/cryto/:coinId' element={<CrytoDetails />}  />
            <Route exact path='/news' element={<News />}  />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;