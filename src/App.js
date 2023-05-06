
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import Slidebar from './components/Slidebar';
import Navbar from './components/Navbar';
import Home from './components/home/Home.js';
import Footer from './components/Footer';
import Singup from './components/signup/Singup';
import History from './components/history/History';
import Nganhang from './components/nganhang/Nganhang';
import Hoadon from './components/hoadon/Hoadon';
import Tranfer from './components/Transfers/Tranfer';
import Baiviet from './components/Baiviet/Baiviet';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div class="flex w-screen h-screen ">
            <Slidebar display={'hidden'} />
            <div class=" transition-all duration-500 ease-in-out flex-1 w-full   max-h-full  overflow-y-scroll">
              <Home />
            </div>
          </div>
        } />
        <Route path='/login' element={
          <Login />
        } >
        </Route>
        <Route path='/signup' element={
          <Singup />
        } >
        </Route>
        <Route path='/purchase-history' element={
          <div class="flex w-screen h-screen">
            <Slidebar display={'hidden'} />
            <div class=" transition-all duration-500 ease-in-out flex-1 w-full   max-h-full  overflow-y-scroll">
              <History />

            </div>
          </div>
        } >
        </Route>
        <Route path='/bank' element={
          <div class="flex w-screen h-screen">
            <Slidebar display={'hidden'} />
            <div class=" transition-all duration-500 ease-in-out flex-1 w-full   max-h-full  overflow-y-scroll">
              <Nganhang />

            </div>
          </div>
        } >
        </Route>
        <Route path='/hoa-don' element={
          <Hoadon />
        } >
        </Route>
        <Route path='/transfer' element={
          <div class="flex w-screen h-screen">
            <Slidebar display={'hidden'} />
            <div class=" transition-all duration-500 ease-in-out flex-1 w-full   max-h-full  overflow-y-scroll">
              <Tranfer />

            </div>
          </div>
        } >
        </Route>
        <Route path='/bai-viet' element={
          <div class="flex w-screen h-screen ">
            <Slidebar display={'hidden'} />
            <div class=" transition-all duration-500 ease-in-out flex-1 w-full   max-h-full  overflow-y-scroll">
              <Baiviet />
            </div>
          </div>
        } >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
