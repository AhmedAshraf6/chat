import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShareLayout from './components/shared-components/ShareLayout';

// All PAges
import EditProfile from './pages/EditProfile';
import FilterAds from './pages/FilterAds';
import Help from './pages/Help';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PuplishProduct from './pages/PuplishProduct';
import Sell from './pages/Sell';
import Seller from './pages/Seller';
import Settings from './pages/Settings';
import SingleProduct from './pages/SingleProduct';
import Wallet from './pages/Wallet';
import Chat from './pages/Chat';
import SelectedChat from './pages/SelectedChat';
import RequireAuth from './components/shared-components/RequireAuth';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ShareLayout />}>
            <Route index element={<Home />}></Route>
            <Route
              path='singleproduct/:adid'
              element={<SingleProduct />}
            ></Route>
            <Route path='help' element={<Help />}></Route>
            <Route path='seller/:sellerid' element={<Seller />}></Route>
            <Route path='category/:cat/:subcat' element={<FilterAds />}></Route>
            <Route path='category/:cat' element={<FilterAds />}></Route>
          </Route>
          <Route path='profile' element={<RequireAuth />}>
            <Route path='myads' element={<Profile />} />
            <Route path='wallet' element={<Wallet />} />
            <Route path='editprofile' element={<EditProfile />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='sell' element={<RequireAuth />}>
            <Route index element={<Sell />} />
            <Route path='puplish/:mainid/:subid' element={<PuplishProduct />} />
          </Route>
          <Route path='chat' element={<RequireAuth />}>
            <Route index element={<Chat />} />
            <Route path='user/:id' element={<SelectedChat />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
