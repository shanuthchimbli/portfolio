import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-100 max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Send a Message</h3>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder=""
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder=""
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                placeholder="I'd like to discuss a project..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex justify-center items-center"
            >
              <span>Send Message</span>
              <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Location</h4>
                <p className="text-blue-100">Leicester, United Kingdom</p>
                <p className="text-blue-100">Available for remote work worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail className="w-6 h-6 text-blue-300" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Email</h4>
                <a href="mailto:example@email.com" className="text-blue-100 hover:text-white transition-colors">
                  example@email.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-6 h-6 text-blue-300" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <a href="tel:+11234567890" className="text-blue-100 hover:text-white transition-colors">
                  +44 (744) 312-6885
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Medium'].map((platform, i) => (
                <a 
                  key={i}
                  href="#"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;