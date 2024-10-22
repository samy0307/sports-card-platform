// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Branding */}
        <div className="mb-4 md:mb-0 flex items-center">
          <img
            src="/images/CardBazzar.webp"
            alt="CardBazzar Logo"
            className="h-10 mr-3"
          />
          <span className="text-xl font-bold">CardBazzar</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            <img src="/images/twitter.svg" alt="Twitter" className="h-6" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            <img src="/images/instagram.svg" alt="Instagram" className="h-6" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            <img src="/images/tiktok.svg" alt="Instagram" className="h-6" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} CardBazzar. All rights reserved.
      </div>
    </footer>
  );
}
