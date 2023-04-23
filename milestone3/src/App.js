import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './screens/Main'
import Createcode from './screens/Createcode'
import Successcode from './screens/Successcode'
import Entercode from './screens/Entercode'
import Profileselect from './screens/Profileselect'
import Createprofile from './screens/Createprofile'
import Dashboard from './screens/Dashboard'
import Seatchart from './screens/Seatchart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="createcode" element={<Createcode />} />
          <Route path="successcode" element={<Successcode />} />
          <Route path="entercode" element={<Entercode />} />
          <Route path="profileselect" element={<Profileselect />} />
          <Route path="createprofile" element={<Createprofile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="seatchart" element={<Seatchart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
