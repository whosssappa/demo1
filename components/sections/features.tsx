"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { 
  Zap, Shield, BarChart2, Globe2, 
  Clock, Users, Database, Cloud
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols to protect your data.'
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Gain deep insights with our powerful analytics dashboard.'
  },
  {
    icon: Globe2,
    title: 'Global Scale',
    description: 'Scale your operations worldwide with our distributed infrastructure.'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Stay synchronized with instant updates and notifications.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools for your entire organization.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Efficient data organization and management capabilities.'
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamlessly integrate with your existing cloud infrastructure.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Powerful Features for Modern Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to scale your business, streamline operations, and boost productivity.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/5 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}