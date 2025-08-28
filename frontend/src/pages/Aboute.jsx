import { motion } from "framer-motion";
import { Info, Cpu, Monitor } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutSection() {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-blue-950 px-4 py-8 sm:px-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center border border-white/20"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <Info className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
            About <span className="text-blue-400">BTS-2000</span> Relay Panel Software
          </h1>

          <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
            The <span className="font-semibold text-blue-300">BTS-2000 Relay Panel Software</span> 
            is a <span className="text-blue-400">smart</span> and <span className="text-blue-400">reliable</span> 
            solution designed to simplify relay protection, monitoring, and control. 
            It helps engineers and operators ensure system stability while reducing manual effort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-xl md:rounded-2xl shadow-md">
              <Cpu className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-blue-400" />
              <h2 className="text-lg sm:text-xl font-semibold text-white">Smart Monitoring</h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                Real-time status updates with intelligent fault diagnostics.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-xl md:rounded-2xl shadow-md">
              <Monitor className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-green-400" />
              <h2 className="text-lg sm:text-xl font-semibold text-white">User Friendly</h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                Clean interface with easy configuration and smooth navigation.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-xl md:rounded-2xl shadow-md col-span-1 sm:col-span-2 lg:col-span-1">
              <Info className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-purple-400" />
              <h2 className="text-lg sm:text-xl font-semibold text-white">Scalable & Secure</h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                Optimized for desktop and mobile, ensuring consistent performance.
              </p>
            </motion.div>
          </div>

          <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
            Built with modern technology, the BTS-2000 delivers <span className="text-blue-400">efficiency</span>, 
            <span className="text-blue-400"> security</span>, and <span className="text-blue-400">scalability</span> 
            across industries — empowering engineers to work smarter, not harder.
          </p>
        </motion.div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}