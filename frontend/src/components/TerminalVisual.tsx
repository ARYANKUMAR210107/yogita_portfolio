import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';

const terminalCommands: Record<string, string[]> = {
  whoami: [
    'Yogita Sharma',
    'B.Tech in Computer Science & Engineering',
    'Lovely Professional University (CGPA: 7.38)',
  ],
  stack: [
    'Core Languages : C++ • Java • Python • C',
    'Backend & Web  : Spring Boot • REST APIs • HTML5 / CSS3 / JS',
    'Data & Systems : Min Heap • Graphs • POSIX IPC • MS SQL',
  ],
  focus: [
    '1. Data Structures & Algorithms (Heap, DAG, Trees, Sorting)',
    '2. Systems Programming (POSIX IPC, Deadlock Detection, Synchronization)',
    '3. Scalable Backend API Architecture',
  ],
  status: [
    '● Open to Software Engineering Internships & Full-time Placements',
    'Location : Phagwara, Punjab / Rajasthan, India',
    'Available for technical interviews and engineering discussions',
  ],
};

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState<string>('whoami');
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    const text = `$ ${activeTab}\n${terminalCommands[activeTab].join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-window max-w-xl w-full mx-auto shadow-2xl relative">
      {/* Terminal Title Bar */}
      <div className="bg-[#121624] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
          <span className="text-xs text-surface-200/50 font-mono ml-2 hidden sm:inline">
            yogita@developer: ~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyText}
            className="p-1 text-surface-200/40 hover:text-surface-200/80 transition-colors"
            title="Copy command"
            aria-label="Copy output"
          >
            {copied ? <Check size={14} className="text-accent-emerald" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Terminal Command Quick Switcher */}
      <div className="bg-[#0b0e1a] px-3 py-2 border-b border-white/[0.04] flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
        <span className="text-surface-200/40 mr-1 flex items-center gap-1">
          <Terminal size={12} className="text-primary-400" />
          run:
        </span>
        {Object.keys(terminalCommands).map((cmd) => (
          <button
            key={cmd}
            onClick={() => setActiveTab(cmd)}
            className={`px-2.5 py-1 rounded transition-all text-xs ${
              activeTab === cmd
                ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                : 'text-surface-200/50 hover:text-surface-200/80 hover:bg-white/[0.03]'
            }`}
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[220px] bg-[#070912]">
        {/* Previous static execution log */}
        <div className="text-surface-200/40 text-xs mb-3 space-y-1">
          <p className="text-emerald-400/70">✔ Initialized portfolio environment v2.0</p>
          <p>
            <span className="text-primary-400">yogita@workspace</span>:<span className="text-accent-cyan">~</span>$ uname -a
          </p>
          <p className="text-surface-200/60 pl-2">Linux yogita-engine 6.8.0 #1 SMP PREEMPT_DYNAMIC x86_64</p>
        </div>

        {/* Current Active Command */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-primary-400 font-semibold">yogita@developer</span>
          <span className="text-surface-200/40">:</span>
          <span className="text-accent-cyan">~</span>
          <span className="text-surface-200/60">$</span>
          <span className="text-surface-100 font-semibold">{activeTab}</span>
        </div>

        {/* Command Output */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="pl-2 sm:pl-4 border-l-2 border-primary-500/30 space-y-1.5 my-3"
        >
          {terminalCommands[activeTab].map((line, idx) => (
            <p key={idx} className="text-surface-200/90 text-xs sm:text-sm">
              {line}
            </p>
          ))}
        </motion.div>

        {/* Prompt line with cursor */}
        <div className="mt-4 flex items-center gap-2 text-xs text-surface-200/50">
          <span className="text-primary-400">yogita@developer</span>
          <span className="text-surface-200/40">:</span>
          <span className="text-accent-cyan">~</span>
          <span className="text-surface-200/60">$</span>
          <span className="inline-block w-2 h-4 bg-primary-400 animate-pulse" />
        </div>
      </div>

      {/* Terminal Footer Bar */}
      <div className="bg-[#0b0e1a] px-4 py-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-surface-200/40 font-mono">
        <span className="flex items-center gap-1.5">
          <Sparkles size={11} className="text-accent-emerald" />
          Interactive CLI Ready
        </span>
        <span>UTF-8 • Git: main</span>
      </div>
    </div>
  );
}
