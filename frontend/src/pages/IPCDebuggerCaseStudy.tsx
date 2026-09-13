import { NavLink } from 'react-router-dom';
import {
  ArrowLeft,
  Lock,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { IPCChannelsDiagram, DeadlockDetectionRAG } from '../components/IPCDiagrams';
import { projects } from '../data/portfolio';

export default function IPCDebuggerCaseStudy() {
  const project = projects.find((p) => p.id === 'ipc-debugger')!;

  const syncItems = [
    {
      name: 'POSIX Mutex (pthread_mutex_t)',
      desc: 'Enforces strict binary exclusion across critical sections. Only the thread/process that acquired the mutex may unlock it. Tested under heavy concurrent shared memory operations to eliminate race conditions.',
      type: 'Mutual Exclusion Lock',
    },
    {
      name: 'POSIX Semaphores (sem_t)',
      desc: 'Non-negative counter-based synchronization primitive. sem_wait decrements and blocks if zero; sem_post increments and wakes up sleeping processes. Used to throttle buffer capacity in producer-consumer pipelines.',
      type: 'Counting & Signaling',
    },
    {
      name: 'Atomic Compare-And-Swap (CAS)',
      desc: 'Lock-free atomic primitives to track process state flags without thread preemption penalties.',
      type: 'Hardware Atomics',
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="IPC Debugger Case Study – Systems Monitoring & Deadlock Detection | Yogita Sharma"
        description="Systems engineering case study of IPC Debugger: real-time Inter-Process Communication monitoring in C/C++, covering Pipes, Message Queues, Shared Memory, and Resource Allocation Graph deadlock detection."
      />

      {/* Back Link */}
      <NavLink
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-cyan-300 mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to All Projects</span>
      </NavLink>

      {/* Hero Header */}
      <div className="mb-14">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="section-badge border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10">
            Systems Case Study
          </span>
          <span className="text-xs font-mono text-surface-200/50">Dec 2025 • C / C++ & Concurrency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
          IPC Debugger – Inter-Process Communication Monitoring Tool
        </h1>
        <p className="text-lg text-accent-cyan font-mono mb-6">
          Real-time Process Concurrency Telemetry & Automated RAG Deadlock Cycle Detection
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            <GithubIcon size={14} />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>

      <div className="space-y-16">
        {/* 01 — Overview */}
        <section id="overview" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-cyan font-mono text-sm">01.</span>
            Overview
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* 02 — Problem */}
        <section id="problem" className="glass-card p-8 border border-accent-rose/20 bg-accent-rose/5">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-rose font-mono text-sm">02.</span>
            Problem
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed mb-4">
            {project.problem}
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-surface-200/70 font-mono">
            <li>• Non-deterministic race conditions when multiple processes write to unshielded shared memory.</li>
            <li>• Deadlocks occurring when processes acquire mutexes in opposing order (Dining Philosophers problem).</li>
            <li>• Lack of graphical tooling for observing ephemeral kernel IPC queues in real time.</li>
          </ul>
        </section>

        {/* 03 — Solution */}
        <section id="solution" className="glass-card p-8 border border-accent-emerald/20 bg-accent-emerald/5">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-emerald font-mono text-sm">03.</span>
            Solution
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed mb-4">
            {project.solution}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">Unified IPC Interception</strong>
              <span className="text-surface-200/60">Monitors Pipes, POSIX Queues, and Shared Memory.</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">RAG Graph Engine</strong>
              <span className="text-surface-200/60">Dynamically models Resource Allocation Graphs with cycle warnings.</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">Live Telemetry Dashboard</strong>
              <span className="text-surface-200/60">Visualizes process state transitions and lock contention.</span>
            </div>
          </div>
        </section>

        {/* 04 — IPC Architecture */}
        <section id="ipc-architecture" className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent-cyan font-mono text-sm">04.</span>
            <h2 className="text-xl font-bold text-white">IPC Architecture</h2>
          </div>
          <div className="space-y-3">
            {project.architecture.map((layer, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/[0.06] flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan font-mono text-xs font-bold flex-shrink-0">
                  L{idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-surface-100">{layer.split('–')[0]}</h3>
                  <p className="text-xs text-surface-200/70 mt-1">{layer.split('–')[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Process Communication Diagram */}
        <section id="process-communication" className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent-cyan font-mono text-sm">05.</span>
            <h2 className="text-xl font-bold text-white">Process Communication Visualization</h2>
          </div>

          <IPCChannelsDiagram />
        </section>

        {/* 06 — Synchronization (Mutex & Semaphore) */}
        <section id="synchronization" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent-cyan font-mono text-sm">06.</span>
            Synchronization Mechanics (Mutex vs. Semaphore)
          </h2>

          <div className="space-y-4">
            {syncItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090d18] border border-white/[0.06]">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Lock size={14} className="text-accent-cyan" />
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono uppercase text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-surface-200/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 07 & 08 — Deadlock Detection & Resource Allocation Graph */}
        <section id="deadlock-detection" className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent-cyan font-mono text-sm">07 & 08.</span>
            <h2 className="text-xl font-bold text-white">
              Deadlock Detection via Resource Allocation Graph (RAG)
            </h2>
          </div>

          <DeadlockDetectionRAG />
        </section>

        {/* 09 — Monitoring Dashboard */}
        <section id="dashboard" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-cyan font-mono text-sm">09.</span>
            Monitoring Dashboard & System Logs
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/70 mb-6">
            The graphical interface provides systems developers with live process state telemetry and timestamped IPC events.
          </p>

          <div className="bg-[#070a13] p-5 rounded-xl border border-white/[0.08] font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
              <span className="text-surface-200/80 flex items-center gap-2">
                <Terminal size={14} className="text-accent-cyan" />
                IPC Diagnostic Stream Console
              </span>
              <span className="text-accent-cyan text-[11px]">Polling 50ms interval</span>
            </div>

            <div className="space-y-2 text-[11px] text-surface-200/70">
              <p><span className="text-accent-cyan">[PID 4102]</span> SHM_ATTACH: Attached segment 0x7f8a9b (64KB shared memory)</p>
              <p><span className="text-accent-emerald">[PID 4102]</span> MUTEX_ACQUIRED: Mutex lock [0xM1] held successfully.</p>
              <p><span className="text-accent-amber">[PID 4105]</span> SEM_WAIT: Decremented counting semaphore [0xS1]. Waiting for consumer signal.</p>
              <p><span className="text-accent-cyan">[PID 4102]</span> SHM_WRITE: Wrote 1024 bytes packet to shared buffer block 2.</p>
              <p><span className="text-accent-emerald">[PID 4102]</span> MUTEX_RELEASED: Released lock [0xM1].</p>
              <p><span className="text-emerald-400">[RAG ENGINE]</span> Cycle scan completed: Graph acyclic (0 deadlocks detected).</p>
            </div>
          </div>
        </section>

        {/* 10 — Technical Stack */}
        <section id="tech-stack" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent-cyan font-mono text-sm">10.</span>
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <span className="text-surface-200/40 block mb-1">LANGUAGE</span>
              <span className="text-white font-bold">C & C++ (C++17)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <span className="text-surface-200/40 block mb-1">OS API</span>
              <span className="text-white font-bold">POSIX IPC System Calls</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <span className="text-surface-200/40 block mb-1">CONCURRENCY</span>
              <span className="text-white font-bold">pthreads, sem_t, mutex</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <span className="text-surface-200/40 block mb-1">ALGORITHMS</span>
              <span className="text-white font-bold">Tarjan&apos;s Cycle Detection</span>
            </div>
          </div>
        </section>

        {/* 11 — GitHub */}
        <section id="github" className="glass-card p-8 border border-white/[0.08] text-center">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-accent-cyan font-mono text-sm">11.</span>
            GitHub Repository
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/70 max-w-md mx-auto mb-6">
            Review the complete C/C++ source code, IPC system call wrappers, and RAG graph detection algorithms on GitHub.
          </p>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs inline-flex"
          >
            <GithubIcon size={16} />
            <span>Visit yogitasharma3372-ui on GitHub</span>
          </a>
        </section>
      </div>
    </div>
  );
}
