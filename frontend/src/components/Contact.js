import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      info: '1-800-VELORA-1',
      subInfo: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      info: 'support@velora.com',
      subInfo: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      info: '123 Financial District',
      subInfo: 'New York, NY 10004'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon-Fri: 8AM-8PM EST',
      subInfo: 'Weekend: 9AM-5PM EST'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-velora-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions about our services? Our expert team is here to help you 
            navigate your educational financial journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-velora-primary bg-opacity-10 rounded-lg mr-4 flex-shrink-0">
                    <item.icon className="text-velora-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-700 mb-1">{item.info}</p>
                    <p className="text-gray-500 text-sm">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Security Notice</h4>
              <p className="text-gray-600 text-sm">
                For your security, never share sensitive information like account numbers, 
                Social Security numbers, or passwords via email or phone unless you initiated 
                the contact through our secure channels.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="account">Account Questions</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-velora-primary focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-velora-primary text-white py-3 rounded-lg font-semibold hover:bg-velora-blue-800 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                How secure are my funds with Velora?
              </h4>
              <p className="text-gray-600 text-sm">
                Your funds are FDIC insured up to $250,000 and protected with bank-grade 
                security measures including 256-bit encryption and multi-factor authentication.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                What happens if my school doesn't support Velora?
              </h4>
              <p className="text-gray-600 text-sm">
                We're constantly adding new school partnerships. If your school isn't supported yet, 
                you can still use traditional payment methods while we work on integration.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                Are there any fees for using Velora accounts?
              </h4>
              <p className="text-gray-600 text-sm">
                Most Velora accounts have no monthly maintenance fees. Some premium features 
                may have associated costs, which are clearly disclosed upfront.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                How quickly can I access my funds?
              </h4>
              <p className="text-gray-600 text-sm">
                Fund transfers to participating schools are instant. Other transfers typically 
                process within 1-2 business days, with some same-day options available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
