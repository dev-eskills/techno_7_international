import { motion } from 'framer-motion';
import {  Briefcase, Layout, Palette, PlayCircle, Rocket, Users } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Portfolio Development',
    desc: 'Transform your course assignments into a high-end portfolio for Design & Marketing roles.',
  },
  {
    icon: <PlayCircle className="h-6 w-6" />,
    title: 'Pro Post-Production',
    desc: 'Go beyond basic cuts. Master advanced color grading and motion graphics for Video Editing.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Digital Growth Strategy',
    desc: 'Learn the data-driven side of Marketing: SEO, Meta Ads, and AI-driven campaign scaling.',
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Live Workshop Labs',
    desc: 'Join weekly live design sprints and marketing hackathons to test your skills under pressure.',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Agency Placements',
    desc: 'We connect our best Graphic Designers and Marketers with top digital agencies.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Client Simulation',
    desc: 'Work on real-world briefs to learn how to handle client feedback and revisions.',
  },
];
export default function InstituteServices() {
  return (
    <section id="features" className="py-24 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Academic <span className="text-white">Commitment</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Techno 7 International provides a comprehensive ecosystem designed to transform students into industry-ready professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-gray-500/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center text-gray-950 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

