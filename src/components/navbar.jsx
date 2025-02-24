import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../auth';
import axios from 'axios';
import { use } from 'react';
const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    const profileImage = JSON.parse(localStorage.getItem("user"));
    console.log("profileImg:", profileImage)
    setImageUrl(profileImage?.profileImage
    )
  }, [])

  const navigate = useNavigate();
  const handlehandleImageClick = () => {
    const role = JSON.parse(localStorage.getItem('user'))?.role;
    if (role === "user") {
      navigate("/userDashboard")
    }
    else if (role === "admin") {
      navigate("/adminDashboard")
    }
  }


  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <div className='flex h-20 items-center justify-between border-y-2 shadow-lg fixed w-full bg-white z-[1000]'>
      <ul className='mx-10 flex items-center justify-center'>
        <li className='relative'><i className="fa-solid fa-location-dot text-3xl text-red-400 cursor-pointer" onClick={() => handleShowMenu()}></i>
          {
            isShowMenu &&
            <div class="bg-white h-[80vh] overflow-scroll w-80 md:w-96 p-4 rounded-lg shadow-xl  absolute" style={{ scrollbarWidth: 'none' }}>
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Select City</h2>
                <button class="text-gray-500 hover:text-gray-700 text-xl font-bold" onClick={() => handleShowMenu()}>&times;</button>
              </div>

              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Search for city"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div class="grid grid-cols-2 gap-2 mb-6">
                <div class="relative group cursor-pointer">
                  <img src="./images/Pokhara-img.webp" alt="Ahmedabad" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Pokhara</p>
                  </div>
                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Birgunj-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Birgunj</p>
                  </div>
                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Kathmandu-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Kathmandu</p>
                  </div>

                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Itahari_1.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Itahari</p>
                  </div>

                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Biratnagar-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Biratnagar</p>
                  </div>

                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Dharan-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Dharan</p>
                  </div>
                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Nepalgunj-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Nepalgunj</p>
                  </div>

                </div>
                <div class="relative group cursor-pointer">
                  <img src="./images/Bharatpur-img.webp" alt="City" class="rounded-lg w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-black bg-opacity-40 flex items-end p-2 rounded-lg transition-opacity group-hover:bg-opacity-60">
                    <p class="text-white font-semibold">Bharatpur</p>
                  </div>

                </div>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <h3 class="text-center text-gray-500 font-medium mb-4">Other Cities</h3>
                <div class="flex flex-row justify-center items-center text-sm text-gray-700 gap-4  w-full ">
                  <div className="w-[50%] flex flex-col justify-center items-center gap-2 ">
                    <a href="#" class="hover:text-red-400">Amleshgunj</a>
                    <a href="#" class="hover:text-red-400">Hetauda</a>
                    <a href="#" class="hover:text-red-400">Dhangadi</a>
                  </div>


                  <div className="w-[50%] flex flex-col justify-center items-center gap-2 ">
                    <a href="#" class="hover:text-red-400">Dang</a>
                    <a href="#" class="hover:text-red-400">Rajbiraj</a>
                    <a href="#" class="hover:text-red-400">Simra</a>
                  </div>
                </div>
              </div>
            </div>
          }



        </li>

        <li><img src="./images/navbar_logo.png" alt="Site logo" className='w-[110px]'  /></li>
      </ul>
      <ul className='flex gap-10 justify-center text-base  '>
        <li className='group flex justify-center flex-col items-center'><Link to='/'>Home</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center  group-hover:transition-all duration-300 ease-in-out'></div>
        </li>
        {/* <li className='group flex justify-center flex-col items-center'><Link to='/All Movies'>All Movies</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out '></div>
        </li> */}
        <li className='group flex justify-center flex-col items-center'><Link to='/event'>Events</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out '></div>
        </li>
        <li className='group flex justify-center flex-col items-center'><Link to='/contact'>Contact</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out  '></div>
        </li>
        <li className='group flex justify-center flex-col items-center'><Link to='/about'>About</Link>
          <div className='w-0 h-[2px] group-hover:w-full group-hover:bg-red-500 flex justify-center group-hover:transition-all duration-300 ease-in-out '></div>
        </li>
      </ul>
      <ul className='flex flex-row gap-10 mx-10 items-center'>

        <li className='relative'>
          <input
            type="text"
            className=" w-56 text-base h-10 p-3 border-2 border-gray-300 rounded-full outline-none focus:border-blue-500"
            placeholder="Search movie?" />
          <i className="bi bi-search text-xl font absolute top-2 right-3"></i>
        </li>
        <li class="flex items-center justify-center">
          {!isLoggedIn() ? <><button class="text-red-400 text-xs  border-2 border-red-400 rounded-lg px-2 py-2 hover:bg-red-500 hover:text-white transition-colors duration-300">
            <Link to='LoginPage'>Login/Register</Link></button></>
            : <div className='flex flex-row justify-center items-center gap-1'>
              <div className='w-9 h-9 rounded-full bg-gray-700 flex  justify-center items-center overflow-hidden'>
                <img
                  // src={`http://localhost:1111/api/v1/post/image/${imageUrl}`}
                  src="./images/user-dummy.png"
                  alt="User Profile"
                  onClick={() => handlehandleImageClick()}
                  style={{ width: "200px", height: "auto", borderRadius: "50%" }}
                />
              </div>
              <p className='text-black text-xs'>{user?.username}</p>
            </div>
          }

        </li>
      </ul>
    </div>
  )

}

export default Navbar