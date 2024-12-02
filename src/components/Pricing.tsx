import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';

const plans = [
  {
    name: "Basic",
    price: 29,
    features: [
      "Access to gym equipment",
      "Basic fitness assessment",
      "Locker room access",
      "2 group classes per month",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: 59,
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Access to all locations",
      "Priority booking",
      "Guest passes (2/month)"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: 99,
    features: [
      "All Premium features",
      "4 personal training sessions/month",
      "Quarterly fitness assessment",
      "Custom workout plans",
      "Monthly nutrition planning",
      "Spa access",
      "Unlimited guest passes"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={scaleIn}
            className="text-4xl font-bold mb-4"
          >
            Membership Plans
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect membership plan that fits your fitness goals and lifestyle.
            All plans include access to our state-of-the-art facilities.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className="absolute top-4 right-4"
                >
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </motion.div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mb-4"
                >
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </motion.div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            All memberships include a 7-day money-back guarantee. No long-term contracts required.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}