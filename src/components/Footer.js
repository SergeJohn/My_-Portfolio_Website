import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-200 p-10">
        <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">
          Get in Touch
        </h2>
        <form className="flex flex-col items-center w-3/4 mx-auto">
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2" for="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2" for="email">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 rounded-lg w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 font-medium mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="border border-gray-400 p-2 rounded-lg w-full"
              id="message"
              name="message"
              placeholder="Write message.."
              required
            ></textarea>
          </div>
          <button className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg">
            Send
          </button>
        </form>
      </section>

      <footer className="bg-sky-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
              <p className="text-sm text-gray-400 mb-2">
                Email: ssmahinay@gmail.com
              </p>
              <p className="text-sm text-gray-400">Phone: +639469188952</p>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-white mb-2">Copy Right</h3>
              <ul className="list-reset text-LG text-gray-400">
                <li className="inline-block mr-2 mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    All Right's reserve @Serge John Mahinay
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-bold text-white mb-2">Follow Me</h3>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://web.facebook.com/profile.php?viewas=100000686899395&id=100009351040319"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com/mahinay_serge"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/sergy_chan22/"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
