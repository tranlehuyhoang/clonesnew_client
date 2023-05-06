import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setsLoading] = useState(false);
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    setsLoading(true)
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    try {
      const response = await axios.get('http://localhost:5000/api/user');
      const users = response.data.message
      console.log(users)
      await users.map((e) => {
        if (e.username == username && e.password == password) {
          console.log('thành công')
          setsLoading(false)
          localStorage.setItem('user', username);
          localStorage.setItem('money', e.money);
          navigate('/')

        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-[100] flex h-[100vh] center  bg-cover bg-no-repeat bg-center justify-center  items-center  bg-contain bg-no-repeat bg-center '>
      <div className="w-full max-w-xs bg-[#01041b] p-5">
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label className="block   text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            {!loading ?
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Sign In

              </button>
              :
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Loading
              </button>
            }
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login;