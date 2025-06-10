// ShadowQuantDynamics.com — Ruthless Fullstack Web App

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black text-purple-500 drop-shadow-2xl tracking-widest"
        >
          SHADOWQUANT DYNAMICS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-2xl md:text-3xl max-w-3xl text-gray-300"
        >
          Full-Stack FinTech ⚡ AI ⚡ Trading Empire. Ruthless. Dynamic. Real.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 text-4xl md:text-5xl font-extrabold text-white tracking-wider"
        >
          CEO & CREATOR: <span className="text-purple-600 animate-pulse">LEKHAN ⚡</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 space-x-6"
        >
          <Button className="bg-purple-700 hover:bg-purple-900 px-6 py-3 text-xl shadow-xl rounded-2xl">
            Explore Projects
          </Button>
          <Button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 text-xl rounded-2xl">
            Connect
          </Button>
        </motion.div>
      </section>

      <section className="bg-gray-950 py-20 px-4" id="projects">
        <h2 className="text-5xl font-bold text-purple-400 text-center mb-14 animate-fade-in">
          Dynamic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-black hover:scale-105 transition-transform duration-300 border border-purple-800">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white">AI Market Pulse</h3>
              <p className="text-gray-400 mt-4 text-lg">
                Predictive models using real-time data. Python + MongoDB. Dominate the stock world.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-black hover:scale-105 transition-transform duration-300 border border-purple-800">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white">ShadowQuant Auth System</h3>
              <p className="text-gray-400 mt-4 text-lg">
                JWT + bcrypt + MongoDB = Secure login fortress. Built with Next.js & Node.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-black py-24 px-4" id="contact">
        <h2 className="text-5xl font-bold text-purple-400 text-center mb-12">
          Let's Build the Future
        </h2>
        <form className="max-w-2xl mx-auto space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-4 bg-gray-800 text-white rounded-xl text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 bg-gray-800 text-white rounded-xl text-lg"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full px-5 py-4 bg-gray-800 text-white rounded-xl text-lg"
          ></textarea>
          <button className="bg-purple-700 hover:bg-purple-900 px-6 py-4 rounded-xl text-xl w-full">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
