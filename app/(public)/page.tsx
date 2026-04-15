"use client";

import { motion } from 'framer-motion';
import MissionVision from '../components/MissionVision'; 
import FeaturedProjects from '../components/FeaturedProjects';
import { ClipboardList, PenTool, Hammer, Key } from 'lucide-react';

export default function Home() {
  const processSteps = [
    { 
      number: '01', 
      title: 'BRIEFING', 
      description: 'We begin with an exhaustive questionnaire to fully understand the client\'s needs and expectations. The most important of all steps.',
      icon: ClipboardList
    },
    { 
      number: '02', 
      title: 'DESIGN', 
      description: 'Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.',
      icon: PenTool
    },
    { 
      number: '03', 
      title: 'EXECUTION', 
      description: 'Bringing our designs to life by building it from the ground up. As we only take on end-to-end projects, everything from structural design to decor is executed in this phase.',
      icon: Hammer
    },
    { 
      number: '04', 
      title: 'HANDOVER', 
      description: 'The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.',
      icon: Key
    },
  ];

  return (
    <div className="relative bg-white font-sans">

      {/* --- 1. HERO SECTION --- */}
      {/* Changed mobile height to min-h-[70vh] and desktop to min-h-screen */}
      <main className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center lg:justify-start bg-zinc-900 overflow-hidden">
        
        {/* Background Image with slow zoom animation */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className="w-full h-full" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", 
              backgroundSize: "cover", 
              backgroundPosition: "center" 
            }} 
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
            className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-16 max-w-3xl shadow-2xl"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-[3px] border-l-[3px] border-[#a68a6b]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-[3px] border-r-[3px] border-[#a68a6b]"></div>

            <motion.span 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.5 }} 
              className="text-[#a68a6b] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-4 block"
            >
              RK INTERIOR STUDIO
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.7 }} 
              className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-wide mb-4 sm:mb-6"
            >
              PROJECTS
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.9 }} 
              className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-xl"
            >
              We transform empty spaces into refined sanctuaries. Explore our curated portfolio of sophisticated interior designs, where elegance meets functionality.
            </motion.p>
          </motion.div>
        </div>
      </main>

      {/* --- 2. WHO WE ARE SECTION --- */}
     <section className="py-20 md:py-16 bg-zinc-50 relative z-20 border-b border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Upgraded to an asymmetrical editorial grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Image Box - Editorial Style */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
              className="lg:col-span-5 relative group order-2 lg:order-1"
            >
              {/* Image Frame */}
              <div className="relative z-10 overflow-hidden rounded-sm aspect-[4/5] bg-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Grand Architecture Interior" 
                  className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-105 grayscale hover:grayscale-0" 
                />
              </div>
              
              {/* Elegant Accent Box (Offset) */}
              <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-white border border-zinc-200 -z-10 hidden md:block transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Corner Accent Line */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-[#a68a6b] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
            </motion.div>

            {/* Text Content Box - Refined Typography */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="lg:col-span-7 order-1 lg:order-2 lg:pl-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#a68a6b]"></div>
                <span className="text-[#a68a6b] font-medium uppercase tracking-[0.25em] text-[10px] md:text-xs">Who We Are</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-slate-900 mb-10 leading-[1.4]">
                RK Interior Studio is a refined interior design firm dedicated to crafting sophisticated and timeless spaces. We seamlessly combine thoughtful design, premium materials, and meticulous attention to detail to create environments that embody elegance and individuality.
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-10 border-y border-zinc-200 mb-10">
                <div className="relative sm:border-r border-zinc-200 last:border-0">
                  <h4 className="text-3xl md:text-5xl font-serif text-slate-900 mb-2">500<span className="text-[#a68a6b] text-2xl md:text-3xl">+</span></h4>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-medium">Spaces Curated</p>
                </div>
                <div className="relative sm:border-r border-zinc-200 last:border-0 sm:pl-4">
                  <h4 className="text-3xl md:text-5xl font-serif text-slate-900 mb-2">10<span className="text-[#a68a6b] text-2xl md:text-3xl">+</span></h4>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-medium">Years Excellence</p>
                </div>
                <div className="col-span-2 sm:col-span-1 sm:pl-4">
                  <h4 className="text-3xl md:text-5xl font-serif text-slate-900 mb-2">100<span className="text-[#a68a6b] text-2xl md:text-3xl">%</span></h4>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-medium">Client Satisfaction</p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
                With a growing portfolio of thoughtfully designed projects, RK Interior Studio brings expertise in interior design and space planning. Our work is defined by attention to detail, refined aesthetics, and a commitment to creating spaces that elevate everyday living.
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* --- 3. DESIGN PHILOSOPHY SECTION --- */}
      <section className="py-20 md:py-16 bg-white relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#a68a6b]"></div>
                <span className="text-[#a68a6b] font-semibold uppercase tracking-widest text-sm">Our Philosophy</span>
              </div>
              
              {/* Main Headline */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight"
              >
                We believe in design as a <span className="text-[#a68a6b]">lifestyle choice</span>
              </motion.h2>
              
              {/* Divider */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#a68a6b] to-transparent mb-8 origin-left"
              />
              
              {/* Paragraph 1 */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-6"
              >
                At <span className="font-semibold text-slate-900">Rk interior studio</span>, we believe in design as a lifestyle choice. We base our work on a fusion of minimalism and functionality, utilizing clear shapes to emphasize what truly matters. With our offices in <span className="font-semibold text-[#a68a6b]">Mumbai</span> and <span className="font-semibold text-[#a68a6b]">Jaipur</span> we're delighted to deliver our exclusive interior design solutions.
              </motion.p>
              
              {/* Paragraph 2 */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8"
              >
                Our main source of inspiration is always our clients' values, so rather than making them reconsider their habits, we aim at helping our customers reflect on their key priorities and see design as a means of <span className="font-semibold text-slate-900">self-expression</span>.
              </motion.p>
              
              {/* Key Features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-[#a68a6b]">
                  <div className="w-2 h-2 bg-[#a68a6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-700 font-medium">Minimalism & Functionality</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-[#a68a6b]">
                  <div className="w-2 h-2 bg-[#a68a6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-700 font-medium">Client-Centered Design</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-[#a68a6b]">
                  <div className="w-2 h-2 bg-[#a68a6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-700 font-medium">Self-Expression Through Design</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-[#a68a6b]">
                  <div className="w-2 h-2 bg-[#a68a6b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-700 font-medium">Exclusive Solutions</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                {/* Main Image */}
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Interior Design Philosophy" 
                  className="w-full h-full object-cover rounded-sm shadow-2xl" 
                />
                
                {/* Decorative Accent */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#a68a6b] -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#a68a6b] -z-10"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50/50 to-transparent -z-10"></div>
      </section>

      {/* --- 4. FEATURED PROJECTS --- */}
      <FeaturedProjects />

      {/* --- 5. PHILOSOPHY SECTION --- */}
    <section className="py-20 md:py-16 bg-zinc-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- UPGRADED HEADER & SUBHEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 sm:w-12 bg-[#a68a6b]"></div>
              <span className="text-[#a68a6b] font-medium uppercase tracking-[0.25em] text-[10px] md:text-xs">
                Methodology
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-[#a68a6b]"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 md:mb-8 leading-tight"
            >
              A structured approach to <br className="hidden sm:block" />
              <span className="italic font-light text-slate-500">refined design.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.4 }} 
              className="text-base sm:text-lg text-slate-500 font-light leading-relaxed px-4 sm:px-0"
            >
              From concept to completion, our process is rooted in meticulous planning, thoughtful collaboration, and unwavering attention to detail. Every project reflects our commitment to excellence.
            </motion.p>
          </div>

          {/* --- EXISTING CARDS (Subtly refined typography to match) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                whileHover={{ y: -5 }} 
                className="bg-white p-6 sm:p-8 border border-zinc-200 group transition-all duration-300 hover:shadow-xl hover:border-[#a68a6b]/50 relative"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-5xl md:text-6xl font-serif font-light text-[#a68a6b]/10 group-hover:text-[#a68a6b]/20 transition-colors">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-zinc-50 shadow-sm mb-6 group-hover:bg-[#a68a6b] transition-colors duration-300">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#a68a6b] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-slate-900 mb-3 tracking-[0.15em] uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
      {/* --- 6. MISSION & VISION SECTION --- */}
      <MissionVision />
    </div>
  );
}