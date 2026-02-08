import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, LOGO_PATH } from '../constants';
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                 <div className="h-10 w-10 relative overflow-hidden rounded-full bg-white/5 p-1">
                    <img src={LOGO_PATH} alt="Logo" className="h-full w-full object-contain" />
                </div>
                <span className="font-display font-black text-lg tracking-tight text-white uppercase italic">
                    Forge <span className="text-brandRed">Fitness</span>
                </span>
            </div>
            <p className="text-secondaryText text-sm leading-relaxed mb-6">
              Forging strong bodies and disciplined minds in the heart of Ahmedabad. Join the movement today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondaryText hover:text-brandRed transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-secondaryText hover:text-brandRed transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-secondaryText hover:text-brandRed transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wide mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><NavLink to="/programs" className="text-secondaryText hover:text-brandRed text-sm transition-colors">Programs</NavLink></li>
              <li><NavLink to="/membership" className="text-secondaryText hover:text-brandRed text-sm transition-colors">Membership</NavLink></li>
              <li><NavLink to="/about" className="text-secondaryText hover:text-brandRed text-sm transition-colors">Our Story</NavLink></li>
              <li><NavLink to="/contact" className="text-secondaryText hover:text-brandRed text-sm transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wide mb-6">Training</h3>
            <ul className="space-y-4">
              <li className="text-secondaryText text-sm">Group Classes</li>
              <li className="text-secondaryText text-sm">Personal Training</li>
              <li className="text-secondaryText text-sm">Strength & Conditioning</li>
              <li className="text-secondaryText text-sm">Nutrition Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wide mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondaryText text-sm">
                <MapPin size={18} className="text-brandRed mt-1 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-secondaryText text-sm">
                <Phone size={18} className="text-brandRed flex-shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
            <p className="text-xs text-gray-500 mb-2 font-medium bg-white/5 inline-block px-3 py-1 rounded">
                DISCLAIMER: This is a demo website created for portfolio purposes. Forge Fitness is an imaginary gym.
            </p>
          <p className="text-secondaryText text-xs">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. Designed for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;