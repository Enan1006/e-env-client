import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Signup from './Pages/Shared/Signup/Signup';
import About from './Pages/About/About';
import Login from './Pages/Shared/Login/Login';
import Inventory from './Pages/Inventories/Inventory/Inventory';
import Inventories from './Pages/Inventories/Inventories/Inventories';
import SingleItem from './Pages/Inventories/SingleItem/SingleItem';
import AddItem from './Pages/AddItem/AddItem';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth'
import MyItem from './Pages/MyItem/MyItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import SingleBlog from './Pages/Blogs/SingleBlog/SingleBlog';
import AddBlog from './Pages/Blogs/Blogs/AddBlog/AddBlog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ResetPass from './Pages/Shared/ResetPass/ResetPass';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventories' element={<Inventories />}></Route>
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='/my-item' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        }></Route>
        <Route path='/manage-item' element={
          <RequireAuth>
            <ManageItem />
          </RequireAuth>
        }></Route>
        <Route path='/singleItem/:id' element={
          <RequireAuth>
            <SingleItem />
          </RequireAuth>
        }></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/add-blog' element={<AddBlog />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/blog/:blogId' element={<SingleBlog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/reset-password' element={<ResetPass />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
