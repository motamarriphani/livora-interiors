import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'projectType', 'locality', 'message'];
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    requiredFields.forEach(field => {
      const value = formData.get(field);
      if (!value || value.toString().trim() === '') {
        newErrors[field] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" data-theme="dark" className="bg-[#2c3426] py-24 lg:py-32">
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
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle size={48} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-serif text-olive-900 mb-4">Thank you! We'll be in touch within 24 hours.</h3>
                <p className="text-olive-900/70 mb-8 mt-2">Our team will call you on the number provided.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-transparent border border-olive-900 text-olive-900 px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-olive-50 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-olive-900 mb-8">Send Us A Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">First Name</label>
                      <input name="firstName" type="text" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.firstName ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="John" />
                      {errors.firstName && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Last Name</label>
                      <input name="lastName" type="text" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.lastName ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="Doe" />
                      {errors.lastName && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Email Address</label>
                    <input name="email" type="email" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.email ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Phone Number</label>
                    <input name="phone" type="tel" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.phone ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="+91 xxxxx xxxxx" />
                    {errors.phone && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Project Type</label>
                    <select name="projectType" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.projectType ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`}>
                      <option value="">Select type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Your Area / Locality</label>
                    <input name="locality" type="text" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 ${errors.locality ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="e.g. Banjara Hills, Gachibowli..." />
                    {errors.locality && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-olive-900/60 mb-2">Message</label>
                    <textarea name="message" className={`w-full border-b py-2 focus:outline-none transition-colors bg-transparent text-olive-900 resize-none h-24 ${errors.message ? 'border-red-500' : 'border-olive-900/20 focus:border-olive-900'}`} placeholder="Tell us about your project..."></textarea>
                    {errors.message && <p className="text-red-500 text-[12px] mt-1">This field is required</p>}
                  </div>
                  
                  <button type="submit" className="w-full bg-olive-900 text-beige-100 py-4 font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors mt-4">
                    Submit Message
                  </button>
                </form>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
