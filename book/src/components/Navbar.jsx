import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Account } from 'appwrite'; // Importez le SDK Appwrite
import toast from 'react-hot-toast';
import { FaSignOutAlt } from 'react-icons/fa';


//Initialize AppWrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67c179e700030085cf05');

//Initialize AppWrite account
const account = new Account(client);



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook pour naviguer vers une autre page ou bien un composant

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Fonction pour se déconnecter
  const handleLogout = async () => {
    try {
      await account.deleteSession('current')
      // localStorage.removeItem('token')
      console.log('Successfully logged out')
      toast.success('LogOut succesfull!!')
      navigate('/login')
    } catch (error){
      console.error('Error logging out:', error);
      toast.error('Error loggin out')
    }
  }

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="bg-indigo-400 p-4 text-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/">📚BookHaven</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Home
            </Link>
            <Link to="/books" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Books📖
            </Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              About
            </Link>
            <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              SignUp
            </Link>
            <Link to={"/game"} className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded'>
              Game🎮
            </Link>
            <Link to={"/spline"} className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded'>
             Spline
            </Link>
            <button onClick={handleLogout} className='text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded'>
             <FaSignOutAlt />
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              <h5 className="">|||</h5>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                  Home
                </Link>
                <Link to="/books" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                  Books📖
                </Link>
                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                  About
                </Link>
                <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                  SignUp
                </Link>
                <Link to={"/game"} className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded'>
                  Game🎮</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
export default Navbar;
