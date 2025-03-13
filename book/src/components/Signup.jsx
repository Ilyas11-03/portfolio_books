import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// Import des SDK Appwrite
import { Client, Account } from "appwrite";


// Initialisation du client Appwrite
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Endpoint API Appwrite
  .setProject("67c179e700030085cf05"); // ID de projet Appwrite

// Création d'un compte Appwrite
const account = new Account(client);

const Signup = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  // Gestion du changement des champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs vides
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name) {
      toast.error("Please fill in all fields", { duration: 3000 });
      return;
    }

    // Vérification de la correspondance des mots de passe
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", { duration: 3000 });
      return;
    }

    try {
      // Création d'un utilisateur avec AppWrite
      const response = await account.create(
        "unique()", 
        formData.email,
        formData.password,
        formData.name
      );

      toast.success("Account created successfully!");
      console.log("Utilisateur créé :", response);

      // Réinitialisation des champs
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
      });
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
      toast.error("Error creating account");
    }
  };

  // Authentification avec Google
  const handleGoogleSignin = async () => {
    try {
      account.createOAuth2Session(
        "google",
        "http://localhost:5173/success", // URL de redirection en cas de succès
        "http://localhost:5173/error"   // URL de redirection en cas d'erreur
      );
    } catch (error) {
      console.error("Erreur lors de l'authentification avec Google :", error);
      toast.error("Error signing in with Google");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join us today
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account and start your journey
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            {["name", "email", "password", "confirmPassword"].map((field) => (
              <motion.div
                key={field}
                whileHover={{ scale: 1.01 }}
                className="flex flex-col"
              >
                <label
                  htmlFor={field}
                  className="text-sm font-medium text-gray-700"
                >
                  {field === "confirmPassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field.includes("password") ? "password" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder={field === "name" ? "UserName" : field}
                />
              </motion.div>
            ))}
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150 ease-in-out"
            >
              Create Account
            </motion.button>
            <div className="mt-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors flex items-center justify-center"
                onClick={handleGoogleSignin}
              >
                <FaGoogle className="mr-2" /> Sign in with Google
              </motion.button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default Signup;
