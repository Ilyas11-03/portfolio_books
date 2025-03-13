'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { FaGoogle} from "react-icons/fa"
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

     const apiurl = 'http://localhost:3000/api/login'
     const payload = {
        email: formData.email,
        password: formData.password,
     }

     // Send login request to API
     fetch(apiurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
     })
     
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
            //login succesfull, update state accordingly
            toast.success('Login succesfull')
        } else {
            toast.error('Invalid email or password')
        }
     })
     .catch((error) => {
        console.error(error)
     })
    // Handle login logic here
    if (!formData.email || !formData.password) {
        toast.error("Please fill in all fields", { duration: 3000 });
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
             
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
          >
            Sign In
          </motion.button>
        </form>
       
        <p className='text-gray-600 text-center mt-4'>Don't have an account? <a href="/signup" className='text-purple-600'>Sign Up</a></p>
      </motion.div>
      <Toaster/>
    </div>
  );
}
