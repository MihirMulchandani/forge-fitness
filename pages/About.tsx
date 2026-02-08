import React from 'react';
import { TRAINERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-background pb-20">
      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white uppercase italic mb-6 leading-tight">
              Forged in <span className="text-brandRed">Discipline</span>.<br />
              Driven by <span className="text-brandBlue">Passion</span>.
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Forge Fitness was established in Ahmedabad with a simple mission: to cut through the noise of the fitness industry and provide a place where real work gets done.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We aren't a luxury spa. We are a training facility. Our equipment is heavy, our music is loud, and our community is supportive. We believe that strength is the foundation of a healthy life, and we are here to help you build it.
            </p>
            <div className="flex gap-4">
              <div className="border-l-4 border-brandRed pl-4">
                <h4 className="text-white font-bold uppercase">Mission</h4>
                <p className="text-gray-500 text-sm">Empowering urban India to move better and lift heavier.</p>
              </div>
              <div className="border-l-4 border-brandBlue pl-4">
                <h4 className="text-white font-bold uppercase">Vision</h4>
                <p className="text-gray-500 text-sm">To be Gujarat's premier hub for strength culture.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 left-4 w-full h-full border-2 border-brandRed rounded-lg z-0"></div>
             <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Gym Interior" 
              className="w-full h-auto rounded-lg relative z-10 shadow-2xl"
             />
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="bg-surface py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl md:text-5xl text-center text-white uppercase italic mb-16">
            Meet The <span className="text-brandRed">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINERS.map((trainer) => (
              <div key={trainer.id} className="group bg-background rounded-xl overflow-hidden border border-white/5 hover:border-brandRed/50 transition-colors">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-display font-bold text-xl uppercase">{trainer.name}</h3>
                  <span className="text-brandRed text-xs font-bold uppercase tracking-wider block mb-3">{trainer.role}</span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;