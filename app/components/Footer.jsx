import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="relative w-40 h-12">
              <Image 
                src="/logo.png" 
                alt="Jay Tours & Travels" 
                fill 
                className="object-contain object-left" 
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Your trusted partner for unforgettable journeys. We specialize in curating personalized travel experiences, ensuring comfort, safety, and adventure every step of the way.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#3c1782] hover:text-white transition-colors text-gray-600">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#3c1782] hover:text-white transition-colors text-gray-600">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#3c1782] hover:text-white transition-colors text-gray-600">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:ml-8">
            <h4 className="text-lg font-bold text-[#1e2a5e] mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Destinations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Travel Packages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-[#1e2a5e] mb-2">Top Destinations</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Singapore</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Hanoi, Vietnam</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Bangkok, Thailand</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Kyoto, Japan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">Dubai, UAE</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-[#1e2a5e] mb-2">Get in Touch</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#3c1782] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-gray-600 font-medium">123 Travel Avenue, Wanderlust City, World 45678</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3c1782]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3c1782]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@jaytours.com" className="text-gray-600 hover:text-[#3c1782] transition-colors font-medium">info@jaytours.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jay Tours & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-[#3c1782] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#3c1782] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#3c1782] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
