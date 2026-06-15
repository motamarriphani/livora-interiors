import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#2c3426] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="text-beige-100">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Let's Create Your Dream Space
            </h2>
            <p className="text-beige-200/70 text-lg mb-12 font-light max-w-lg">
              Reach out for a free consultation. We'd love to hear about your project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center shrink-0 mr-6">
                  <Phone size={20} className="text-beige-100" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wider uppercase font-medium mb-1 text-beige-100/50">Call Us</h4>
                  <p className="text-lg">+91 8886767991</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center shrink-0 mr-6">
                  <Mail size={20} className="text-beige-100" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wider uppercase font-medium mb-1 text-beige-100/50">Email</h4>
                  <p className="text-lg">hello@livorainteriors.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center shrink-0 mr-6">
                  <MapPin size={20} className="text-beige-100" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wider uppercase font-medium mb-1 text-beige-100/50">Visit Us</h4>
                  <p className="text-lg leading-relaxed">
                    12, Design Hub,<br/>
                    Jubilee Hills, Hyderabad – 500033
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center shrink-0 mr-6">
                  <Clock size={20} className="text-beige-100" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wider uppercase font-medium mb-1 text-beige-100/50">Working Hours</h4>
                  <p className="text-lg">Mon–Sat, 10am – 7pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <h3 className="text-2xl font-serif text-olive-900 mb-8">Send Us A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-olive-900/20 py-2 focus:outline-none focus:border-olive-900 transition-colors bg-transparent text-olive-900" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-olive-900/20 py-2 focus:outline-none focus:border-olive-900 transition-colors bg-transparent text-olive-900" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-olive-900/20 py-2 focus:outline-none focus:border-olive-900 transition-colors bg-transparent text-olive-900" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Phone Number</label>
                <input type="tel" className="w-full border-b border-olive-900/20 py-2 focus:outline-none focus:border-olive-900 transition-colors bg-transparent text-olive-900" placeholder="+91 xxxxx xxxxx" />
              </div>
              
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Message</label>
                <textarea className="w-full border-b border-olive-900/20 py-2 focus:outline-none focus:border-olive-900 transition-colors bg-transparent text-olive-900 resize-none h-24" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button type="button" className="w-full bg-olive-900 text-beige-100 py-4 font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors mt-4">
                Submit Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
