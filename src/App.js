import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import DataStructurePage from './pages/DataStructurePage';
import DataPage from './pages/DataPage';
import { generateStructure } from './api';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  const [dataStructure, setDataStructure] = useState([]);
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DataStructurePage structure={dataStructure} onChange={val => {
          setDataStructure(val);
          setData([]);
        }} />} />
        <Route path='/data' element={<DataPage
          data={data}
          onReset={() => {
            setData([])
          }}
          dataStructure={dataStructure}
          onGenerate={async total => {
            const d = await generateStructure(dataStructure, total);
            setData(prev => {
              return [...prev, ...d]
            })
          }}
        />} />
        <Route path='/statistics' element={<StatisticsPage data={data} dataStructure={dataStructure} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
