import React, { useEffect } from "react";
import book1 from "../assets/book1.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/facebook.png"
import img7 from "../assets/instagram.png"
import img8 from "../assets/download.png"
import img9 from "../assets/fiction.jpg"
import img10 from "../assets/non-fiction.jpg"
import img11 from "../assets/children.jpg"
import {motion} from "framer-motion"
import AOS from "aos"
import Contact from "./Contact";
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        AOS.init()
    },[])

    return (
       <>
       <div className="class1 bg-indigo-100 w-full min-h-screen p-4 md:p-8 lg:p-12" data-aos="fade-up-right" data-aos-duration="2000" data-aos-once="true">
            <div className="class1in max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 space-y-6">
                    <span className="text-xl md:text-2xl block">New Release</span>
                    <div>
                        <h1 className="text-4xl md:text-6xl text-dark font-serif">This Dark</h1>
                        <h1 className="text-4xl md:text-6xl text-dark font-serif">Road to Mercy</h1>
                    </div>
                    <p className="font-serif text-lg md:text-xl text-dark">
                        Welcome to Book Haven, the premier online bookstore where literature lovers can explore a vast collection of books across all genres. Whether you're searching for the latest bestsellers, timeless classics, or niche titles, we have something for everyone.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded font-serif cursor-pointer hover:bg-blue-600">
                        Download <img src={img8} alt="" className="w-6"/>
                    </button>
                </div>
                <div className="md:w-1/2">
                    <img src={book1} className="w-full h-auto" alt="Book cover" />
                </div>
            </div>

            <div className="py-8 bg-blue-50" id="featured">
                <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-6 font-serif text-center" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">
                    AS FEATURED ON
                </h2>
                <motion.div 
                    initial={{ y: -100}} 
                    animate={{ y: 0}} 
                    transition={{ duration: 4 }} 
                    className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24"
                >
                    <img src={img1} className="h-8 md:h-12 opacity-70" alt="Feature 1" />
                    <img src={img2} className="h-8 md:h-12 opacity-70" alt="Feature 2" />
                    <img src={img3} className="h-8 md:h-12 opacity-70" alt="Feature 3" />
                    <img src={img4} className="h-8 md:h-12 opacity-70" alt="Feature 4" />
                </motion.div>
            </div>
    
            <div className="max-w-6xl mx-auto mt-12 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.img 
                        src={img5} 
                        className="w-full md:w-1/2 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />
       
                    <div className="md:w-1/2 space-y-6">
                        <motion.h1 
                            className="text-3xl md:text-4xl text-dark font-serif"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            A Word From The Author
                        </motion.h1>
       
                        <motion.p 
                            className="font-serif text-lg md:text-xl text-dark"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            Welcome to our online book store, where you can explore a vast collection of captivating titles across a wide range of genres. Whether you're a avid reader or simply looking to expand your literary horizons, we have something for everyone.
                        </motion.p>

                        <motion.a
                            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 rounded translate-y-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            href={"/books"}
                        >
                            Read More
                        </motion.a>

                        <hr />

                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-dark text-xl md:text-2xl font-serif">Aboulkassim Ilyas</h4>
                            <h6 className="text-dark text-lg md:text-xl font-serif">Trainee, Front-End Developper</h6>
                        </motion.div>

                        <div className="flex gap-3">
                            <img src={img6} className="w-8 h-8" alt="Facebook" />
                            <img src={img7} className="w-8 h-8" alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-blue-50 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                    Popular Categories
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={img9} className="w-full h-auto mb-4" alt="Category Image" />
                        <h3 className="text-xl font-serif mb-4">Fiction</h3>
                        <p className="text-gray-600">Explore imaginative worlds and compelling stories.</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                         <img src={img10} className="w-full h-auto mb-4" alt="Category Image" />
                        <h3 className="text-xl font-serif mb-4">Non-Fiction</h3>
                        <p className="text-gray-600">Discover real-world knowledge and insights.</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                          <img src={img11} className="w-full h-auto mb-4" alt="Category Image" />
                        <h3 className="text-xl font-serif mb-4">Children's Books</h3>
                        <p className="text-gray-600">Magical stories for young readers.</p>
                    </motion.div>
                </div>
            </div>
        </div>

        <div className="bg-indigo-100 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                    Why Choose Us?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-700">Books Available</div>
                    </motion.div>

                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-gray-700">Categories</div>
                    </motion.div>

                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-700">Customer Support</div>
                    </motion.div>

                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                        <div className="text-gray-700">Happy Customers</div>
                    </motion.div>
                </div>
            </div>
        </div>

        <div className="bg-blue-50 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
                    What Readers Say About Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                JD
                            </div>
                            <div className="ml-4">
                                <h4 className="font-serif text-lg">John Doe</h4>
                                <div className="text-yellow-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"Amazing selection of books! The delivery was quick and the customer service was excellent."</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                JS
                            </div>
                            <div className="ml-4">
                                <h4 className="font-serif text-lg">Jane Smith</h4>
                                <div className="text-yellow-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"I love the variety of genres available. This is now my go-to bookstore for all my reading needs!"</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                                RJ
                            </div>
                            <div className="ml-4">
                                <h4 className="font-serif text-lg">Robert Johnson</h4>
                                <div className="text-yellow-400">★★★★★</div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"The prices are competitive and the website is very user-friendly. Highly recommended!"</p>
                    </motion.div>
                </div>
            </div>
        </div>

        <Contact/>
        

        

       </>
    )
}
export default Home;