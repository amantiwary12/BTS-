import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <div>
    <div className="  ">

    <Navbar/>
    </div>
    <div className=" relative min-h-screen text-white bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center px-6"> 
      <div className="max-w-6xl w-full bg-blue-950 shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Company Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold  mb-4">
            Contact <span className="text-blue-600">Aartech - BTS-2000</span>
          </h1>
          <p className=" text-white mb-6">
            Have questions about the <strong>BTS-2000 Relay Panel Software</strong>?  
            We’d love to hear from you. Reach out to us for support, demos, or business inquiries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" />
              <span className="text-white">+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <span className="text-white">support@aartech.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <span className="text-white">
                Aartech House, Bhopal, Madhya Pradesh, India
              </span>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Aartech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.2147!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e0cfb3dfbf%3A0x4fa2a4b7b4d7b22f!2sAartech%20House!5e0!3m2!1sen!2sin!4v1694256728351!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
