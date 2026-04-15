"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const fallbackProjects = [
  {
    id: 'modern-villa',
    title: "The Glass Pavilion",
    category: "Residential",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 'aura-tower',
    title: "Aura Skyscraper",
    category: "Commercial",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 'zenith-estate',
    title: "Zenith Estate",
    category: "Luxury Villa",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    spanClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 'lumina-museum',
    title: "Lumina Art Center",
    category: "Cultural",
    location: "Copenhagen",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    spanClass: "md:col-span-2 md:row-span-1",
  }
];

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${API_URL}/api/projects?limit=4`);
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data.slice(0, 4));
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const getSpanClass = (index: number) => {
    const classes = [
      'md:col-span-2 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-2 md:row-span-1'
    ];
    return classes[index] || 'md:col-span-1 md:row-span-1';
  };

  return (
    <section className="py-24 md:py-16 bg-[#fafafa] relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[15vw] font-bold leading-none">WORKS</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-[#a68a6b]" />
              <span className="text-[#a68a6b] font-bold uppercase tracking-[0.3em] text-xs">Curated Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-medium text-slate-900 leading-tight"
            >
              Featured <span className="italic font-light text-slate-500 text-3xl md:text-5xl block md:inline">Works</span> 
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/portfolio" className="group relative flex items-center gap-4 text-slate-900 font-bold overflow-hidden px-2 py-1">
              <span className="relative z-10 uppercase tracking-widest text-sm">Explore All</span>
              <div className="p-2 rounded-full border border-zinc-200 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* --- UNIFIED RESPONSIVE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[350px] gap-6 md:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
              className={`group relative overflow-hidden bg-white shadow-sm md:shadow-none md:bg-transparent rounded-sm cursor-pointer ${getSpanClass(index)}`}
            >
              <Link href={`/portfolio/${project._id || project.id}`} className="flex flex-col md:block w-full h-full">
                
                {/* 1. IMAGE CONTAINER */}
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:absolute md:inset-0 overflow-hidden shrink-0">
                  <motion.img 
                    src={project.image || project.featuredImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) md:group-hover:scale-110"
                  />
                  {/* Desktop Gradient Overlay (Hidden on Mobile) */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* 2. CONTENT CONTAINER (Mobile: Light BG / Desktop: Transparent with White Text) */}
                <div className="relative md:absolute md:inset-0 p-6 md:p-8 flex flex-col justify-end z-20 bg-zinc-50 md:bg-transparent flex-1 border-t border-zinc-100 md:border-transparent">
                  
                  {/* Slide-up Wrapper (Desktop only animation) */}
                  <div className="md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 flex flex-col h-full justify-end">
                    
                    <span className="text-[#a68a6b] md:text-[#c5a686] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                      {project.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 md:text-white mb-2 md:drop-shadow-sm transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-500 md:text-white/70 text-xs sm:text-sm font-light mb-5 md:mb-6 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-[#a68a6b]" />
                      {project.location}
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto md:mt-0 pt-4 border-t border-zinc-200 md:border-white/20 flex items-center justify-between md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="text-slate-900 md:text-white text-[10px] md:text-xs uppercase tracking-widest font-bold">View Case Study</span>
                      <div className="w-8 h-8 rounded-full border border-zinc-200 md:border-white/30 flex items-center justify-center text-slate-900 md:text-white group-hover:bg-[#a68a6b] group-hover:border-[#a68a6b] md:group-hover:text-white transition-colors">
                         <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Desktop Corner Accent */}
                <div className="hidden md:block absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                   <div className="w-8 h-8 border-t border-r border-white/30" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}