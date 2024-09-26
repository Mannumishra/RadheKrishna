import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllCategory from '../../Pages/Category/AllCategory'
import AddCategory from '../../Pages/Category/AddCategory'
import EditCategory from '../../Pages/Category/EditCategory'
import AllBanner from '../../Pages/Banners/AllBanner'
import AddBanner from '../../Pages/Banners/AddBanner'
import EditBanner from '../../Pages/Banners/EditBanner'
import AllTags from '../../Pages/Tags/AllTags'
import AddTag from '../../Pages/Tags/AddTag'
import EditTag from '../../Pages/Tags/EditTag'
import Login from '../auth/Login'
import AllDress from '../../Pages/Dress/AllDress'
import Dress from '../../Pages/Dress/Dress'
import EditDress from '../../Pages/Dress/EditDress'

const Home = () => {
  const login = sessionStorage.getItem("login")

  return (
    <>
      {login ? (
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />

              {/* Category --  */}
              <Route path={"/all-events"} element={<AllCategory />} />
              <Route path={"/add-events"} element={<AddCategory />} />
              <Route path={"/edit-events/:_id"} element={<EditCategory />} />


              {/* --- Tags --- */}
              <Route path={"/all-gallery"} element={<AllTags />} />
              <Route path={"/add-gallery"} element={<AddTag />} />
              <Route path={"/edit-gallery/:_id"} element={<EditTag />} />

              {/* --- Banners --- */}
              <Route path={"/all-vedio"} element={<AllBanner />} />
              <Route path={"/add-vedio"} element={<AddBanner />} />
              <Route path={"/edit-vedio/:_id"} element={<EditBanner />} />


              <Route path={"/all-dress"} element={<AllDress />} />
              <Route path={"/add-dress"} element={<Dress />} />
              <Route path={"/edit-dress/:_id"} element={<EditDress />} />

        
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  )
}

export default Home
