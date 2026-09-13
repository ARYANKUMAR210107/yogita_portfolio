import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060810]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'bg-[#060810]/40 backdrop-blur-sm border-b border-white/[0.03]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 text-surface-100 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
              <Code2 size={18} />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white block">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-surface-200/50 block -mt-0.5">
                CS & Engineering
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-white bg-white/[0.08] shadow-inner'
                      : 'text-surface-200/70 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary-400 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA: Resume Button */}
          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `btn-outline text-xs py-2 px-3.5 flex items-center gap-1.5 ${
                  isActive ? 'border-primary-400 text-white bg-primary-500/10' : ''
                }`
              }
            >
              <FileText size={14} className="text-primary-400" />
              <span>Resume</span>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <NavLink
              to="/resume"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primary-300 flex items-center gap-1"
            >
              <FileText size={13} />
              <span>CV</span>
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-surface-200/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0a0d18] border-b border-white/[0.08] px-4 py-4 space-y-1 shadow-2xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-primary-500/20 border border-primary-500/30'
                      : 'text-surface-200/70 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-mono text-surface-200/30">→</span>
              </NavLink>
            ))}

            <div className="pt-3 border-t border-white/[0.06] mt-2 flex gap-2">
              <NavLink
                to="/resume"
                className="btn-primary text-xs w-full justify-center py-2.5"
              >
                <FileText size={15} />
                View Full Resume
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
