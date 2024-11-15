"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access'
    ]
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    description: 'For large-scale operations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Advanced API access',
      'Custom integrations',
      'Team collaboration tools',
      'Advanced security features'
    ]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Choose the perfect plan for your business needs
          </motion.p>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={!isYearly ? 'font-semibold' : 'text-muted-foreground'}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={isYearly ? 'font-semibold' : 'text-muted-foreground'}>Yearly (Save 20%)</span>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-4">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-base font-normal text-muted-foreground">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}