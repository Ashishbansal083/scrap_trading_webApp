import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" w-full  flex justify-between items-center p-4 bg-transparent  ">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-green-600">
            KABADWALA
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-green-600 hover:text-green-900">
              About
            </Link>
            <Link
              href="/services"
              className="text-green-600 hover:text-green-900"
            >
              Services
            </Link>
            <Link href="/" className="text-green-600 hover:text-green-900">
              Home
            </Link>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4 ">
            {/* Language Switch */}
            <Link href="/scrap-rates" className="px-2 py-1 border rounded-md hover:bg-gray-100">
              Check Rate List
            </Link>

            {/* Sell Scrap Button */}
            <button className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
              Sell Scrap
            </button>

            {/* Login/Register */}
            <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
              Login / Register
            </button>
          </div>
        </div>
        <main>{children}</main>
        <footer className="bg-transparent text-green-600 py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold">About Us</h2>
              <p className="mt-2 text-green-600">
                We make selling scrap easy, offering fair prices and quick
                payments. Join us in creating a greener planet!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-green-600 hover:text-green-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-green-600 hover:text-green-900"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-green-600 hover:text-green-900"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactUs"
                    className="text-green-600 hover:text-green-900"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social Media */}
            <div>
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p className="mt-2 text-green-600">
                📍 Location: Jagadhari, India
              </p>
              <p className="text-green-600">📞 Phone: +91 905***8499</p>
              <p className="text-green-600">📧 Email: contact@gmail.com</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-green-600 hover:text-green-900">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-green-600 hover:text-green-900">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-green-600 hover:text-green-900">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-green-600 text-sm mt-8 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} ScrapBiz. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
