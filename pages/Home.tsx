import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Users, Trophy, Timer } from 'lucide-react';
import Button from '../components/Button';
import { PHONE_NUMBER_CLEAN, PHONE_NUMBER, PROGRAMS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER_CLEAN}?text=I'm interested in joining Forge Fitness`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h2 className="text-brandRed font-bold tracking-widest uppercase mb-4 animate-pulse">
              Ahmedabad's Premium Training Facility
            </h2>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase italic leading-none mb-6">
              Train <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Strong.</span><br />
              Train <span className="text-brandRed">Smart.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Forge your ultimate physique with expert coaching, premium equipment, and a high-energy community driven by results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" onClick={handleWhatsApp}>
                Join via WhatsApp
              </Button>
              <Button variant="outline" onClick={handleCall}>
                Call {PHONE_NUMBER}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Why Us Strip */}
      <section className="bg-surface py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <Users className="w-8 h-8 text-brandRed mx-auto mb-3" />
              <h3 className="font-display font-bold text-white text-xl">500+</h3>
              <p className="text-secondaryText text-sm">Active Members</p>
            </div>
            <div className="text-center p-4">
              <Trophy className="w-8 h-8 text-brandBlue mx-auto mb-3" />
              <h3 className="font-display font-bold text-white text-xl">15+</h3>
              <p className="text-secondaryText text-sm">Expert Coaches</p>
            </div>
             <div className="text-center p-4">
              <Timer className="w-8 h-8 text-brandRed mx-auto mb-3" />
              <h3 className="font-display font-bold text-white text-xl">60 Min</h3>
              <p className="text-secondaryText text-sm">High-Impact Sessions</p>
            </div>
             <div className="text-center p-4">
              <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center font-bold text-brandBlue text-xl">₹</div>
              <h3 className="font-display font-bold text-white text-xl">Value</h3>
              <p className="text-secondaryText text-sm">Premium Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase mb-2">
                Our <span className="text-brandRed">Programs</span>
              </h2>
              <p className="text-secondaryText max-w-lg">
                Whether you prefer the energy of a group or the focus of 1-on-1, we have the path to your goals.
              </p>
            </div>
            <Button variant="secondary" onClick={() => navigate('/programs')} className="mt-6 md:mt-0 hidden md:flex">
              View All Programs <ArrowRight size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="group relative overflow-hidden rounded-xl h-80 cursor-pointer" onClick={() => navigate('/programs')}>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-brandRed text-xs font-bold uppercase tracking-wider mb-2 block">{program.category}</span>
                  <h3 className="text-white font-bold text-xl uppercase italic group-hover:text-brandRed transition-colors">{program.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
             <Button variant="secondary" onClick={() => navigate('/programs')} fullWidth>
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brandRed rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brandBlue rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase italic mb-6">
            Ready to <span className="text-brandRed">Forge</span> Your Future?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join the most disciplined fitness community in Ahmedabad. Your first step starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" onClick={() => navigate('/membership')}>
              View Memberships
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Book Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;