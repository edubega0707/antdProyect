import React from 'react';
import { ConfigProvider } from 'antd';
import './App.css';
import { DatePicker, Button } from 'antd';
import español from 'antd/es/locale/es_ES';

function App() {
  return (
    <ConfigProvider locale={español}>
      <div className="App">
        <DatePicker />
        <Button type="primary" icon="search" >Click</Button>
      </div>
    </ConfigProvider>
  
  );
}

export default App;
