"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Package, Users, User, Menu, X, ChevronDown } from "lucide-react";
import { FaWarehouse, FaSearch, FaTruck, FaClipboardCheck } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint
    };

    // Initial check
    checkMobile();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

const isAboutPage = pathname === "/about" || pathname === "/about/"; 
 const isServicesPage = pathname === "/services";
  const isStoragePage = pathname === "/services/storage";
  const isSourcingPage = pathname === "/services/sourcing";
  const isThreePlServicePage = pathname === "/services/threeplservice";
  const isProductQualityCheckPage = pathname === "/services/productqualitycheck";
const isProductsPage = pathname === "/products" || pathname === "/products/";
  const isPricingPage = pathname === "/pricing";

  // Check active tab for mobile bottom navigation
  const isHomePage = pathname === "/";
const isProfilePage = pathname === "/profile" || pathname === "/profile/";
  // Check if any services subpage is active for desktop dropdown highlighting
  const isAnyServicesPage = isServicesPage || isStoragePage || isSourcingPage || isThreePlServicePage || isProductQualityCheckPage;

  const getHeaderBackground = () => {
    // Always show gradient for About page on all devices
    if (pathname === "/about") {
      return "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]";
    }

    // For home page - transparent when not scrolled, gradient when scrolled
    if (pathname === "/") {
      return scrolled ? "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]" : "";
    }

    // For all other pages - always show gradient background
    return "bg-gradient-to-r from-[#1C45A7] to-[#0B1B41]";
  };   

 // Only show main header if not on mobile products page
const showMainHeader = !(isMobile && isProductsPage);

  return (
    <>
      {/* Main Header - Only show if not mobile products page */}
      {showMainHeader && (
      <header
        className={`py-6 px-6 flex justify-between items-center fixed w-full z-50 transition-all duration-300 ${getHeaderBackground()}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/my7.webp"
            alt="Naxi Logo"
            className="md:w-32 w-26 h-auto cursor-pointer"
          />
        </div>

        {/* Desktop Nav - Updated with Services Dropdown */}
        <nav className="hidden lg:flex space-x-20 items-center">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/products" className="text-white hover:underline">
            Products
          </a>
          <a href="/about" className="text-white hover:underline">
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className={`flex items-center space-x-1 ${isAnyServicesPage ? "text-blue-300 underline" : "text-white"
                } hover:underline transition-colors`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${servicesDropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href="/services"
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isServicesPage ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
                    }`}
                >
                  <span>All Services</span>
                </a>
                <a
                  href="/services/storage"
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isStoragePage ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
                    }`}
                >
                  <FaWarehouse size={16} className="text-blue-500" />
                  <span>Storage</span>
                </a>
                <a
                  href="/services/sourcing"
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isSourcingPage ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
                    }`}
                >
                  <FaSearch size={16} className="text-blue-500" />
                  <span>Sourcing</span>
                </a>
                <a
                  href="/services/threeplservice"
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isThreePlServicePage ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
                    }`}
                >
                  <FaTruck size={16} className="text-blue-500" />
                  <span>3PL Service</span>
                </a>
                <a
                  href="/services/productqualitycheck"
                  className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-blue-50 transition-colors ${isProductQualityCheckPage ? "text-blue-600 font-medium bg-blue-50" : "text-gray-700"
                    }`}
                >
                  <FaClipboardCheck size={16} className="text-blue-500" />
                  <span>Quality Check</span>
                </a>
              </div>
            )}
          </div>

          <a href="/pricing" className="text-white hover:underline">
            Pricing
          </a>
          <a href="/support" className="text-white hover:underline">
            Support
          </a>
        </nav>

        {/* Desktop Icons - Original */}
        <div className="hidden lg:flex items-center space-x-8">
          <img
            src="/vector (10).png"
            alt="Notifications"
            className="w-6 h-7 cursor-pointer hover:opacity-80"
          />
          <img
            src="/profile.png"
            alt="Profile"
            className="w-12 h-12 rounded-full cursor-pointer hover:opacity-80"
          />
        </div>

        {/* Mobile/Tablet - Removed Hamburger */}
        <div className="lg:hidden">
          {/* Empty div to maintain layout */}
        </div>
      </header>
      )}

      {/* Mobile Bottom Navigation Bar - Hide on products page */}
      {isMobile && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blue-500 border-t rounded-tl-2xl rounded-tr-2xl border-gray-200 z-40">
  <div className="flex justify-around items-center">
    {/* Home Tab */}
    <a href="/" className="flex flex-col items-center relative flex-1">
      {isHomePage ? (
        <div className="relative flex flex-col items-center px-4 py-2 mt-4">
          <img
            src="/Union.png"
            alt="Selected Tab"
            className="absolute top-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Home size={22} className="text-blue-700" />
            <span className="text-xs mt-1 text-blue-700">Home</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-4 py-2 text-white hover:text-gray-200 transition-colors">
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </div>
      )}
    </a>

    {/* Products Tab */}
    <a href="/products" className="flex flex-col items-center relative flex-1">
      {isProductsPage ? (
        <div className="relative flex flex-col items-center px-4 py-2 mt-4">
          <img
            src="/Union.png"
            alt="Selected Tab"
            className="absolute top-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Package size={22} className="text-blue-700" />
            <span className="text-xs mt-1 text-blue-700">Products</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-4 py-2 text-white hover:text-gray-200 transition-colors">
          <Package size={22} />
          <span className="text-xs mt-1">Products</span>
        </div>
      )}
    </a>

    {/* About Us Tab */}
    <a href="/about" className="flex flex-col items-center relative flex-1">
      {isAboutPage ? (
        <div className="relative flex flex-col items-center px-4 py-2 mt-4">
          <img
            src="/Union.png"
            alt="Selected Tab"
            className="absolute top-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Users size={22} className="text-blue-700" />
            <span className="text-xs mt-1 text-blue-700 whitespace-nowrap">About Us</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-4 py-2 text-white hover:text-gray-200 transition-colors">
          <Users size={22} />
          <span className="text-xs mt-1 whitespace-nowrap">About Us</span>
        </div>
      )}
    </a>

    {/* Profile Tab */}
    <a href="/profile" className="flex flex-col items-center relative flex-1">
      {isProfilePage ? (
        <div className="relative flex flex-col items-center px-4 py-2 mt-4">
          <img
            src="/Union.png"
            alt="Selected Tab"
            className="absolute top-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center">
            <User size={22} className="text-blue-700" />
            <span className="text-xs mt-1 text-blue-700">Profile</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center px-4 py-2 text-white hover:text-gray-200 transition-colors">
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </div>
      )}
    </a>

    {/* More Tab */}
    <button
      onClick={() => setMenuOpen(true)}
      className="flex flex-col items-center relative flex-1 text-white hover:text-gray-200 transition-colors"
    >
      <div className="flex flex-col items-center px-4 py-2">
        <Menu size={22} />
        <span className="text-xs mt-1">More</span>
      </div>
    </button>
  </div>
</div>
      )}

      {/* More Menu Popup */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-gradient-to-b from-[#1C45A7] to-[#0B1B41] rounded-t-3xl w-full max-w-lg mx-auto max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-blue-400">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-blue-600 rounded-full text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Pages */}
            <div className="p-4 space-y-2">
              <a
                href="/services"
                className="flex items-center justify-between p-3 hover:bg-blue-600 rounded-lg text-white transition-colors"
              >
                <span className="font-medium">Services</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }}
                  className="p-1 text-white"
                >
                  <span className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
              </a>

              {/* Services Subpages */}
              {servicesOpen && (
                <div className="ml-4 space-y-2 border-l-2 border-blue-400 pl-4">
                  <a href="/services/storage" className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg text-sm text-white transition-colors">
                    <FaWarehouse size={16} className="text-blue-200" />
                    Storage
                  </a>
                  <a href="/services/sourcing" className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg text-sm text-white transition-colors">
                    <FaSearch size={16} className="text-blue-200" />
                    Sourcing
                  </a>
                  <a href="/services/threeplservice" className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg text-sm text-white transition-colors">
                    <FaTruck size={16} className="text-blue-200" />
                    3PL Service
                  </a>
                  <a href="/services/productqualitycheck" className="flex items-center gap-3 p-2 hover:bg-blue-600 rounded-lg text-sm text-white transition-colors">
                    <FaClipboardCheck size={16} className="text-blue-200" />
                    Quality Check
                  </a>
                </div>
              )}

              <a href="/pricing" className="flex items-center p-3 hover:bg-blue-600 rounded-lg text-white transition-colors">
                <span className="font-medium">Pricing</span>
              </a>

              <a href="/support" className="flex items-center p-3 hover:bg-blue-600 rounded-lg text-white transition-colors">
                <span className="font-medium">Support</span>
              </a>

              <a href="/alerts" className="flex items-center p-3 hover:bg-blue-600 rounded-lg text-white transition-colors">
                <span className="font-medium">Alerts</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}