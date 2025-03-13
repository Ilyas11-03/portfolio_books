import React from "react";
import { motion } from "framer-motion";

const About = () => {

    return (
        <>
<div className="min-h-screen bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <motion.h1 
    className="text-4xl font-bold text-gray-800 mb-8 text-center"
    initial={{x: -100, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1.5}}
    >About our Bookstore
    </motion.h1>
    
    <motion.div 
    initial={{x: 100, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1.6}}
    className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
      <p className="text-gray-600 mb-4">
        We are passionate about books and our mission is to share this passion with you. Our site offers a wide selection of books in all genres to download and read for free.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
       className="bg-white rounded-lg shadow-lg p-6"
       initial={{y: 100, opacity: 0}}
       animate={{y: 0, opacity: 1}}
       transition={{duration: 1.7}}
       >
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Collection</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Novels</li>
          <li>Science Fiction</li>
          <li>Mystery</li>
          <li>Children's Books</li>
          <li>Non-Fiction</li>
          <li>How-to Books</li>
        </ul>
      </motion.div>

      <motion.div 
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1.8}}
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Services</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Free Download</li>
          <li>Available Customer Service</li>
          <li>Satisfaction Guaranteed</li>
        </ul>
      </motion.div>
    </div>

    <motion.div 
    className="bg-white rounded-lg shadow-lg p-6 mt-8"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.9}}
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
      <p className="text-gray-600">
        For any questions or suggestions, don't hesitate to contact us:
        <br />
        Email: ilyas.aboulkassim@gmail.com
        <br />
        Phone: +212 611366340
      </p>
    </motion.div>
  </div>
</div>
        
        </>
    )
}

export default About
