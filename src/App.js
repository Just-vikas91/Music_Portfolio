import React, { useState, useEffect } from "react";
import { initializeCalendar } from "./calendar";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import {
  Play,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  useEffect(() => {
    initializeCalendar();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold flex flex-row">
              <a href="#home"></a>
              <span className="ml-1 font-serif">Lalit Kushwaha</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              {/* <a
                href="#music"
                className="hover:text-purple-400 transition-colors"
              >
                Music
              </a> */}
              <a
                href="#videos"
                className="hover:text-purple-400 transition-colors"
              >
                Videos
              </a>
              <a
                href="#gallery"
                className="hover:text-purple-400 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3636059/pexels-photo-3636059.jpeg"
            alt="Artist performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Bokeh lights overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-blue-400 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold font-serif mb-4 tracking-wider">
            Lalit Kushwaha
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Soulful. Powerful. Timeless.
          </p>
          <a
            href="https://www.youtube.com/@hiddenpearlsmusicalacademy1192"
            target="_blank"
          >
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center mx-auto space-x-2">
              <Play className="w-5 h-5" />
              <span>Listen Now</span>
            </button>{" "}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">ABOUT</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/singer.jpg"
                alt="Singer portrait"
                className="w-2/3 rounded-lg shadow-2xl ml-20"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Lalit is a compelling voice in contemporary music, blending
                soulful melodies with powerful lyrics to create truly
                unforgettable songs. With her powerful voice, refined stage
                presence, and captivating performance style, she has quickly
                become a force to be reckoned with in the industry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Her music seamlessly weaves together elements of soul, pop, and
                contemporary R&B, creating a sound that is both timeless and
                refreshingly modern. With each performance, Elara demonstrates
                her ability to connect with audiences on a deeply emotional
                level.
              </p>
              <p className="text-gray-300 leading-relaxed">
                After beginning her career in intimate venues and local
                showcases, Elara has performed at major music festivals and
                venues across the country. Her powerful vocal range and dynamic
                stage presence have captivated audiences everywhere she
                performs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With several critically acclaimed albums under her belt and a
                growing fanbase worldwide, continues to push boundaries and
                explore new creative territories, making her one of the most
                exciting artists to watch in contemporary music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      {/* <section id="music" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            FEATURED MUSIC
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Album cover 1"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Album cover 2"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Album cover 3"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Official Videos Section */}
      <section id="videos" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            OFFICIAL VIDEOS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <iframe
                width="100%"
                height="240  "
                src="https://www.youtube.com/embed/mI1Bf9nydH8?si=aGqWOqe8drzPWWRL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <iframe
                  width="100%"
                  height="240"
                  src="https://www.youtube.com/embed/hqelzwKMUV4?si=t2T8MHbWrvTuDt94"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg border-cyan-100">
                <iframe
                  width="100%"
                  height="240"
                  src="https://www.youtube.com/embed/WV4o2D7KNzw?si=uTMX_D-nbwhHxtGu"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">GALLERY</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Performance photo 1"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Performance photo 2"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Performance photo 3"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Portrait photo"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Behind the scenes"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Studio session"
                className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press & Testimonials Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            PRESS & TESTIMONIALS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "was our unexpected gem, weaving harmonious that elevates both
                artist and text. She's a true original with an unbelievable
                vocal and powerful voice."
              </p>
              <p className="text-purple-400 font-semibold">
                — Music Weekly Magazine
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "An undisputed performance! From the chords her songs are
                absolutely rich and setting an immersive experience that leaves
                you breathless."
              </p>
              <p className="text-purple-400 font-semibold">
                — Entertainment Today
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "As an industry leader for authenticity, stands out. The
                connection through her voice defines your former original to
                organize artistically."
              </p>
              <p className="text-purple-400 font-semibold">
                — Arts Review Blog
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "Simply captivating. From the first note you are lost, Elara
                brings contemporary pleasure and your heart is both haunting and
                incredibly beautiful."
              </p>
              <p className="text-purple-400 font-semibold">— Sound & Style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking & Inquiries */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Booking & Inquiries</h3>
              <div className="space-y-6">
                <p className="text-gray-300">
                  For booking inquiries, interviews, press requests and all
                  other business inquiries, contact the team below for
                  connecting with me.
                </p>
                {/* <h2>My Booking Calendar</h2> */}
                <div id="calendar"></div>

                {/* <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>lalitkushwah56056@gmail.com</span>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href="https://www.facebook.com/p/Hidden-pearls-music-academy-100064009091932/"
                    target="_blank"
                  >
                    <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-400 cursor-pointer transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/hidden_pearls_musical_academy/?hl=en"
                    target="_blank"
                  >
                    <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-400 cursor-pointer transition-colors" />
                  </a>
                  <a
                    href="https://www.youtube.com/@hiddenpearlsmusicalacademy1192"
                    target="_blank"
                  >
                    <Youtube className="w-6 h-6 text-red-500 hover:text-red-400 cursor-pointer transition-colors" />
                  </a> */}
                {/* </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-4 text-center text-gray-400 border-t border-gray-950">
        <div className="max-w-7xl mx-auto">
          <p>© 2025 Developed By KVSTECHFLOW.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
