"use client"
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SiWhatsapp, SiSnapchat, SiPinterest } from "react-icons/si";
import { useState } from "react";

export default function Footer() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <footer className="bg-[#0E2A62] text-white py-8 p md:px-6 px-4">
      {/* Mobile Layout */}
      <div className="block md:hidden">

  {/* Logo Section */}
  <div className="text-left mb-6">
    <img src="/group.png" alt="Naxi Logo" className="w-24 h-auto mb-6" />
    <p className="text-xs text-gray-300 mb-2">
      Naxi.ae is an online platform for wholesalers who want to sell and ship their products to their customers directly.
    </p>
  </div>

  {/* Dropdown Sections in One Row */}
  <div className="flex gap-4 mb-6">
    {/* Navigation Dropdown */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center"
        >
          <img
            src="/downarrow.png"
            alt="arrow"
            className={`w-3 h-3 transition-transform ${isNavOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <h3 className="text-sm font-semibold">Navigation</h3>
      </div>
      {isNavOpen && (
        <ul className="space-y-2 text-xs pl-8">
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Products</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Hot Items</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Categories</a>
          </li>
        </ul>
      )}
    </div>

    {/* Help & Support Dropdown */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center"
        >
          <img
            src="/downarrow.png"
            alt="arrow"
            className={`w-3 h-3 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <h3 className="text-sm font-semibold">Help & Support</h3>
      </div>
      {isSupportOpen && (
        <ul className="space-y-2 text-xs pl-8">
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Terms & conditions</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Blog</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Frequently asked questions</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          </li>
        </ul>
      )}
    </div>
  </div>

  {/* Email Subscription Section - Below Dropdowns */}
  <div className="mb-6">
    <div className="flex items-center bg-zinc-300 rounded-lg p-2">
      <input
        type="email"
        placeholder="Write E-mail"
        className="flex-1 bg-transparent text-neutral-400 text-sm px-2 outline-none"
      />
      <button className="bg-blue-600 text-white rounded-[5px] px-4 py-2 flex items-center gap-2 -ml-16">
        <span className="text-sm">Send</span>
        <img src="/polygon 1.png" alt="Polygon" className="w-2 h-3" />
      </button>
    </div>
  </div>

  {/* Contact Us and Social Media in One Line */}
  <div className="flex items-start gap-8 mb-8 mt-8">
    {/* Contact Us */}
    <div className="flex-1">
      <h3 className="text-sm font-semibold mb-3 underline">Contact us</h3>
     
    </div>

    {/* Social Media */}
    <div className="flex-1">
      <h3 className="text-xs font-semibold mb-3">Follow us on social media:</h3>
      <div className="flex space-x-3">
        <a href="#" aria-label="WhatsApp" className="hover:text-green-400">
          <SiWhatsapp size={18} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-sky-400">
          <Twitter size={18} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-blue-500">
          <Facebook size={18} />
        </a>
        <a href="#" aria-label="Snapchat" className="hover:text-yellow-400">
          <SiSnapchat size={18} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-400">
          <Instagram size={18} />
        </a>
        <a href="#" aria-label="Pinterest" className="hover:text-red-500">
          <SiPinterest size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* All rights reserved */}
  <div className="text-left">
    <p className="text-xs text-blue-500">All rights reserved</p>
  </div>

</div>

      {/* Desktop Layout (Original) */}
      <div className="hidden md:flex flex-col md:flex-row justify-between max-w-8xl mx-auto text-left">

        {/* Left Side: Logo + About + Copyright */}
        <div className="mb-6 md:mb-0 w-1/5">
          <img src="/group.png" alt="Naxi Logo" className="w-28 h-auto mb-8" />
          <div>
            <h3 className="text-lg font-semibold mb-2">About us</h3>
            <p className="text-xs text-gray-300 mb-4 max-w-xs">
              Naxi.ae is an online platform for wholesalers who want to sell and ship their products to their customers directly.
            </p>
            <p className="text-xs text-blue-500">All rights reserved</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-6 md:mb-0 w-1/5 ml-12">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-xs">
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Products</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Hot Items</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Categories</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="mb-6 md:mb-0 w-1/5">
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-xs">
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Terms & conditions</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Frequently asked questions</a></li>
            <li className="list-disc list-inside"><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mb-6 md:mb-0 w-1/5">
          <h3 className="text-lg font-semibold mb-4">Contact us</h3>
          <ul className="space-y-2 text-xs">
            <li className="list-disc list-inside"><a href="tel:+923001234567" className="text-gray-300 hover:text-white">Call: +92 300 123 456 7</a></li>
            <li className="list-disc list-inside"><a href="mailto:naxi@support.com" className="text-gray-300 hover:text-white">E-mail: naxi@support.com</a></li>
          </ul>
        </div>

        {/* Social Media with Email Input */}
        <div className="max-w-6xl">
          <div className="mb-18 flex justify-end">
            <div data-layer="Group 88" className="Group88 w-96 h-14 relative">
              <div data-layer="Rectangle 25" className="Rectangle25 w-65 h-12 left-[115px] t-10 top-0 absolute bg-zinc-300 rounded-lg" />
              <div data-layer="Write E-mail" className="WriteEMail w-20 h-3 left-[130px] top-[16px] absolute justify-start text-neutral-400 text-sm font-normal font-['Inter']">Write E-mail</div>
              <div data-layer="Rectangle 26" className="Rectangle26 w-20 h-8 left-[290px] top-[8px] absolute bg-blue-600 rounded-[5px]">
                <div className="flex items-center justify-between h-full ">
                  <div data-layer="Send" className="Send w-11 h-3 left-[20Px] top-[4px] absolute justify-start text-white text-md font-normal font-['Inter']">Send</div>
                  <img src="/polygon 1.png" alt="Polygon" className="w-3 h-4 ml-15" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-32">
            <h3 className="text-sm font-semibold mb-4">Follow us on social media:</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="WhatsApp" className="hover:text-green-400">
                <SiWhatsapp size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-400">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Snapchat" className="hover:text-yellow-400">
                <SiSnapchat size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-red-500">
                <SiPinterest size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}