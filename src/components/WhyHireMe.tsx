import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TrendingUp, Globe, Heart, Users, Clapperboard, Timer, Layers, ArrowRight } from "lucide-react";

const stats = [
  { label: "Higher Conversion", value: "85%", icon: TrendingUp, detail: "On average for commercial ads" },
  { label: "Organic Growth", value: "+200%", icon: Users, detail: "Growth for client platforms" },
  { label: "Global Presence", value: "25+", icon: Globe, detail: "Countries worked with" },
  { label: "Client Satisfaction", value: "99%", icon: Heart, detail: "Positive feedback rate" },
];

const advantages = [
  {
    title: "Story-Driven Editing",
    text: "Every frame is chosen to reinforce your brand's unique narrative and mission.",
    icon: Clapperboard,
  },
  {
    title: "High-Retention Techniques",
    text: "I use data-backed editing patterns to keep viewers watching from start to finish.",
    icon: Timer,
  },
  {
    title: "Technical Excellence",
    text: "Mastery of Premiere Pro, After Effects, and DaVinci Resolve for top-tier results.",
    icon: Layers,
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-panel/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* LEFT: message + advantages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-accent font-bold tracking-[0.4em] text-[10px] mb-4 uppercase">
              Distinctive Advantages
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.02] tracking-tighter text-text-pure mb-10">
              I Don’t Just Edit,
              <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#C084FC] to-[#E9D5FF]">
                I Build Experiences
              </span>
            </h2>

            <div className="border-t border-white/10">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-5 items-start py-6 border-b border-white/10 transition-colors duration-500 hover:bg-accent/[0.04]"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary group-hover:glow-md transition-all duration-500">
                    <item.icon size={21} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-text-pure tracking-tight mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-text-soft text-sm sm:text-[15px] font-light leading-relaxed max-w-md">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/#contact"
              className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-full transition-all glow-md hover:glow-lg active:scale-95 uppercase tracking-widest text-[10px]"
            >
              Direct Contact
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>

          {/* RIGHT: results panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-accent/10 blur-3xl rounded-[48px] pointer-events-none" />
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-accent/20 bg-gradient-to-br from-panel/60 via-secondary/60 to-primary/80 backdrop-blur-xl glow-md">
              {/* corner light */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/25 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative px-7 pt-7 sm:px-10 sm:pt-9 pb-2">
                <p className="text-text-muted text-xs sm:text-sm font-light tracking-wide">
                  Results that speak for themselves
                </p>
              </div>

              <div className="relative grid grid-cols-2 border-t border-white/10 mt-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`group relative p-6 sm:p-9 transition-colors duration-500 hover:bg-accent/[0.07] border-white/10 ${
                      i % 2 === 0 ? "border-r" : ""
                    } ${i < 2 ? "border-b" : ""}`}
                  >
                    <stat.icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500"
                    />
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-text-pure to-accent/80 mb-3">
                      {stat.value}
                    </p>
                    <p className="text-text-pure font-semibold text-xs sm:text-sm mb-1">{stat.label}</p>
                    <p className="text-text-muted text-[11px] sm:text-xs font-light leading-snug">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
