import React from 'react';
import { PHONE_NUMBER, ADDRESS, PHONE_NUMBER_CLEAN, MAP_EMBED_URL } from '../constants';
import Button from '../components/Button';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER_CLEAN}?text=Hi, I would like to book a visit to Forge Fitness.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div className="pt-20 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase italic mb-12 text-center">
          Get In <span className="text-brandRed">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details & Actions */}
          <div className="space-y-8">
            <div className="bg-surface p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white uppercase mb-6">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full text-brandRed">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">Location</h3>
                    <p className="text-gray-400 mt-1">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full text-brandRed">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">Phone</h3>
                    <p className="text-gray-400 mt-1">{PHONE_NUMBER}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full text-brandRed">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">Gym Hours</h3>
                    <p className="text-gray-400 mt-1">Mon - Sat: 06:00 AM - 10:00 PM</p>
                    <p className="text-gray-400">Sunday: 08:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="whatsapp" fullWidth onClick={handleWhatsApp} className="h-16 text-lg">
                <MessageCircle className="mr-2" /> WhatsApp Us
              </Button>
              <Button variant="outline" fullWidth onClick={handleCall} className="h-16 text-lg">
                <Phone className="mr-2" /> Call Now
              </Button>
            </div>
            <p className="text-center text-gray-500 text-sm">
                We respond quickly during working hours.
            </p>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe 
              src={MAP_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gym Location"
              className="absolute inset-0"
            ></iframe>
            {/* Dark mode filter overlay for map to blend better */}
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-brandRed/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;