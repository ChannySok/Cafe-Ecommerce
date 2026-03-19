import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import MessageForm from "./MessageForm";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`scroll-mt-24 pt-12 ${
        darkMode ? "bg-gray-800 text-amber-50" : "bg-gray-50 text-gray-600"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4 mr-2">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                St07 CKD, Phnom Penh
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" /> (+855) 965-127-003
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" /> channysok.secret2003@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaClock className="mr-2" /> Monday - Friday: 7am - 7pm
              </p>
              <p className="flex items-center">
                <FaClock className="mr-2" /> Saturday: 8am - 8pm
              </p>
              <p className="flex items-center">
                <FaClock className="mr-2" /> Sunday: 8am - 5pm
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/?_rdc=2&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-700 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/c4_channy?igsh=MXZpZHo2cjl4ampjbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-600 hover:text-pink-800 dark:hover:text-pink-300 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://t.me/aliyacafe_snacks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300"
              >
                <FaTelegram size={24} />
              </a>
            </div>
            <p
              className={`mt-4 ${darkMode ? "text-amber-50" : "text-gray-700"}`}
            >
              Write me about your complaint or somethings else
            </p>
            <MessageForm darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
