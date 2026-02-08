import React from 'react';
import { PROGRAMS } from '../constants';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Programs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen bg-background pb-20">
      <div className="bg-surface py-16 mb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase italic mb-6">
            Training <span className="text-brandBlue">Methodologies</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            At Forge Fitness, we don't just exercise. We train. Explore our specialized programs designed for performance, aesthetics, and longevity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {PROGRAMS.map((program, index) => (
            <div 
              key={program.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-surface rounded-2xl overflow-hidden border border-white/5`}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brandRed/10 mix-blend-overlay"></div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start">
                <span className="inline-block px-3 py-1 bg-white/5 text-brandRed text-xs font-bold uppercase tracking-wider rounded mb-4">
                  {program.category} Training
                </span>
                <h2 className="font-display font-bold text-3xl text-white uppercase italic mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-8 text-gray-300 text-sm">
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-brandRed"></div>
                     <span>Expert Coaching</span>
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-brandRed"></div>
                     <span>Structured Progression</span>
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-brandRed"></div>
                     <span>Results Driven</span>
                   </li>
                </ul>
                <Button variant="primary" onClick={() => navigate('/contact')}>
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;