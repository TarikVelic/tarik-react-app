import React from 'react';

const Contact = ({ isVisible }) => {
  return (
    <section id="contact" className="min-h-screen py-20 md:py-24 lg:py-28 pb-32 relative z-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
          <div className='flex justify-center '>
          <div className="grid  gap-12 lg:gap-16 w-[50%]">
            {/* Contact Information */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-700/50">
                
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  {[
                    { icon: "📧", label: "Email", value: "tarik.velic23@gmail.c.com" },
                    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/tarik-velic" },
                    { icon: "💻", label: "GitHub", value: "github.com/tarikvelic" },
                    { icon: "📱", label: "Viber", value: "+387 62 211 128" },
                    { icon: "💬", label: "WhatsApp", value: "+387 62 211 128" },
                    { icon: "📍", label: "Location", value: "Sarajevo, Bosnia and Herzegovina" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 md:space-x-6 group">
                      <div className="text-2xl md:text-3xl transform group-hover:scale-110 transition-transform duration-300">{contact.icon}</div>
                      <div>
                        <div className="text-white font-bold text-base md:text-lg">{contact.label}</div>
                        <div className="text-red-400 font-semibold text-sm md:text-base">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-emerald-400 font-bold text-lg md:text-xl mb-3">✨ Available for Projects</h4>
                  <p className="text-gray-300 text-base md:text-lg">Currently accepting new clients and exciting opportunities</p>
                </div>
              </div>
            </div>
            </div>
            
            {/* Contact Form */}

          </div>
          
          {/* Call to Action */}
     
        </div>
      </div>
    </section>
  );
};

export default Contact; 