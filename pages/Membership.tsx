import React from 'react';
import { PRICING, PHONE_NUMBER_CLEAN } from '../constants';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {

  const handleJoinClick = (planName: string) => {
    window.open(`https://wa.me/${PHONE_NUMBER_CLEAN}?text=I am interested in the ${planName} membership plan.`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase italic mb-6">
          Invest In <span className="text-brandRed">Yourself</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          Transparent pricing. No hidden fees. Choose the plan that fits your ambition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-surface rounded-2xl p-8 border ${plan.recommended ? 'border-brandRed' : 'border-white/10'} flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brandRed text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-white font-display font-bold text-xl uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center text-white">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-500 ml-2 text-sm font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-brandRed mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                fullWidth 
                onClick={() => handleJoinClick(plan.name)}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-surface to-background border border-white/5 rounded-2xl p-8 md:p-12 text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white font-display font-bold text-2xl uppercase mb-2">Need Personal Training?</h3>
            <p className="text-gray-400 max-w-xl">
              Our certified coaches offer specialized 1-on-1 packages tailored to your specific biomechanics and goals. Packages start from ₹10,000 / month.
            </p>
          </div>
          <Button variant="secondary" onClick={() => handleJoinClick('Personal Training')}>
            Contact for PT Rates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Membership;