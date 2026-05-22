import React from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Address',
    content: 'Masood Chowk, Adilabad, Telangana',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    content: 'motherscarehighschooladilabad@gmail.com',
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Phone',
    content: '9154408383',
    href: 'tel:9154408383',
  },
];

const socialLinks = [
  { icon: 'M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H7.898v-2.909h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.261c-1.242 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.909h-2.33V22C18.343 21.245 22 17.083 22 12.061z', name: 'Facebook', brand: 'hover:text-[#1877F2]' },
  { icon: 'M7.8 2h8.4A5.806 5.806 0 0122 7.8v8.4a5.806 5.806 0 01-5.8 5.8H7.8A5.806 5.806 0 012 16.2V7.8A5.806 5.806 0 017.8 2zm-.2 2A3.604 3.604 0 004 7.6v8.8A3.604 3.604 0 007.6 20h8.8a3.604 3.604 0 003.6-3.6V7.6A3.604 3.604 0 0016.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z', name: 'Instagram', brand: 'hover:text-[#E4405F]' },
  { icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.051 2C6.529 2 2.05 6.477 2.05 12c0 1.76.46 3.475 1.333 4.992L2 22l5.13-1.344A9.941 9.941 0 0012.05 22h.004c5.522 0 10-4.477 10-10s-4.478-10-10.003-10z', name: 'WhatsApp', brand: 'hover:text-[#25D366]' },
  { icon: 'M21.582 6.186a2.506 2.506 0 00-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418a2.506 2.506 0 00-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 001.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 001.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z', name: 'YouTube', brand: 'hover:text-[#FF0000]' },
];

const infoVariants = {
  hidden: { opacity: 0, x: -32, scale: 0.985, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.12, duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ContactContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div className="space-y-5">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            className="scroll-reveal-item group flex gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false }}
            whileHover={{ x: 6, scale: 1.006 }}
          >
            <div className="flex-shrink-0 w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={info.icon} />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white mb-1">{info.title}</h3>
              {info.href ? (
                <a href={info.href} className="text-white/70 hover:text-white transition-colors">
                  {info.content}
                </a>
              ) : (
                <p className="text-white/70 break-all">{info.content}</p>
              )}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="pt-2 sm:pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-semibold mb-3 sm:mb-4 text-white/80">Follow us on:</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className={`w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-all duration-300 ${social.brand}`}
                aria-label={social.name}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-4 sm:mt-8 rounded-xl overflow-hidden h-32 sm:h-48 bg-white/10 backdrop-blur-sm relative group"
          initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-white/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-white/50">Click to view location</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-reveal-item bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 text-gray-900 shadow-xl"
        initial={{ opacity: 0, x: 36, scale: 0.985, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false }}
        transition={{ duration: 1.055, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <h3 className="text-2xl font-bold">Enquiry &amp; Admissions</h3>
        </div>

        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Student's Class</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all">
                <option>Select Class</option>
                {['LKG', 'UKG', ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all"
              placeholder="9154408383"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <motion.button
            type="submit"
            className="group w-full py-4 bg-gradient-to-r from-brand-600 to-teal-600 text-white font-semibold rounded-xl shadow-sm hover:shadow-md"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Submit Inquiry
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

