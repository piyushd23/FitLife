import React from 'react';
import {
  Dumbbell,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FitLife Hub</span>
            </div>
            <p className="mb-6">
              Your journey to a healthier lifestyle starts here. Join our
              community and transform your life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="hover:text-blue-500 transition-colors"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 9403568448</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>piyush cha mail</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>piyush cha ghar</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Mon - Fri:</span>
                <br />
                6:00 AM - 10:00 PM
              </li>
              <li>
                <span className="font-semibold">Sat - Sun:</span>
                <br />
                8:00 AM - 8:00 PM
              </li>
              <li>
                <span className="font-semibold">Holidays:</span>
                <br />
                8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} FitLife Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
