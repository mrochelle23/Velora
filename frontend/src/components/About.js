import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Shield,
  TrendingUp,
  Globe
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50K+', label: 'Students Served' },
    { number: '2,000+', label: 'Partner Schools' },
    { number: '$500M+', label: 'Tuition Processed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'We exist to make education more accessible and affordable for every family.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your financial security is our top priority with bank-grade protection.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Cutting-edge technology to simplify educational finance management.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Banking solutions designed for every stage of the educational journey.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Revolutionizing Educational Finance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Velora was founded with a simple mission: to make saving for and paying educational 
            expenses as seamless and secure as possible for students, parents, and families.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-velora-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-velora-primary bg-opacity-10 rounded-lg mx-auto mb-4">
                  <value.icon className="text-velora-primary" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-velora-gray rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020 by a team of fintech veterans and education advocates, Velora emerged 
                from a simple observation: families needed better tools to save for and manage educational expenses.
              </p>
              <p className="text-gray-600 mb-4">
                We saw students struggling with complex payment systems, parents worried about fund security, 
                and institutions dealing with inefficient payment processing. That's when we knew we had to build 
                something better.
              </p>
              <p className="text-gray-600">
                Today, Velora serves thousands of families across the country, providing secure, intelligent 
                banking solutions that grow with your educational journey.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Leadership Team</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-velora-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jane Doe</div>
                    <div className="text-gray-600 text-sm">CEO & Co-Founder</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-velora-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Smith</div>
                    <div className="text-gray-600 text-sm">CTO & Co-Founder</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-velora-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600 text-sm">Head of Product</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
