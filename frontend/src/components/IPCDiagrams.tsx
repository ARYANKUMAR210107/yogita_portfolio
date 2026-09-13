import { useState } from 'react';
import { Cpu, ArrowRight, ShieldAlert, Unlock, Activity } from 'lucide-react';

export function IPCChannelsDiagram() {
  const [activeChannel, setActiveChannel] = useState<'pipes' | 'queues' | 'sharedMem'>('pipes');

  const channelDetails = {
    pipes: {
      name: 'Pipes (FIFO Stream)',
      desc: 'Unidirectional byte-stream communication between parent/child or related processes using file descriptors.',
      mechanism: 'Kernel Ring Buffer (pipe(int fd[2]))',
      speed: 'Standard I/O throughput',
      sync: 'Implicit blocking on read() when pipe is empty',
      diagram: 'Process A [Write FD 1] ───> [Kernel Buffer FIFO] ───> [Read FD 0] Process B',
    },
    queues: {
      name: 'POSIX Message Queues',
      desc: 'Structured discrete messages passed through OS kernel queues, allowing priority-tagged message ordering.',
      mechanism: 'POSIX mq_open / mq_send / mq_receive',
      speed: 'High-speed message dispatch',
      sync: 'Message priority sorting, non-blocking / blocking options',
      diagram: 'Process A [mq_send()] ───> [Priority Message Queue] ───> [mq_receive()] Process B',
    },
    sharedMem: {
      name: 'Shared Memory (shm)',
      desc: 'Fastest IPC mechanism. Multiple processes map the identical physical RAM page into their virtual address spaces.',
      mechanism: 'mmap() / shmget() + shmat()',
      speed: 'Zero-copy direct memory access (Fastest)',
      sync: 'Requires explicit Mutex / Semaphore guards to avoid data races',
      diagram: 'Process A ───> [Mapped Physical Memory Segment] <─── Process B',
    },
  };

  const cur = channelDetails[activeChannel];

  return (
    <div className="glass-card p-6 border border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-200/80 flex items-center gap-2">
            <Activity size={16} className="text-accent-cyan" />
            Inter-Process Communication Architectures
          </h4>
          <p className="text-xs text-surface-200/60 mt-1">
            Compare mechanisms monitored by IPC Debugger in real time.
          </p>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
          {(['pipes', 'queues', 'sharedMem'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveChannel(key)}
              className={`px-2.5 py-1 rounded transition-all capitalize ${
                activeChannel === key
                  ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40'
                  : 'text-surface-200/50 hover:text-surface-200'
              }`}
            >
              {key === 'sharedMem' ? 'Shared Memory' : key}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Flow Representation */}
      <div className="bg-[#090d18] p-5 rounded-xl border border-white/[0.06] mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3">
          {/* Process A */}
          <div className="w-full md:w-44 p-4 rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-accent-cyan mb-1">
              <Cpu size={16} />
              <span className="font-mono text-xs font-bold">Process A (Writer)</span>
            </div>
            <span className="text-[11px] text-surface-200/60 font-mono block">PID: 4102</span>
            <span className="text-[10px] uppercase tracking-wider text-accent-cyan/80 mt-1 block">Producer</span>
          </div>

          {/* IPC Channel in the Middle */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="flex items-center gap-2 text-surface-200/40 text-xs font-mono mb-2">
              <span className="hidden sm:inline">Dispatch</span>
              <ArrowRight size={14} className="text-primary-400 animate-pulse" />
              <span className="text-primary-300 font-semibold">{cur.name}</span>
              <ArrowRight size={14} className="text-primary-400 animate-pulse" />
              <span className="hidden sm:inline">Receive</span>
            </div>

            <div className="w-full p-3 rounded-lg border border-primary-500/30 bg-primary-500/10 text-center font-mono text-xs text-primary-200">
              {cur.mechanism}
            </div>
          </div>

          {/* Process B */}
          <div className="w-full md:w-44 p-4 rounded-xl border border-accent-violet/30 bg-accent-violet/5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-accent-violet mb-1">
              <Cpu size={16} />
              <span className="font-mono text-xs font-bold">Process B (Reader)</span>
            </div>
            <span className="text-[11px] text-surface-200/60 font-mono block">PID: 4105</span>
            <span className="text-[10px] uppercase tracking-wider text-accent-violet/80 mt-1 block">Consumer</span>
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <span className="text-surface-200/40 font-mono block mb-1">DATA FLOW</span>
          <p className="text-surface-200/80">{cur.desc}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <span className="text-surface-200/40 font-mono block mb-1">LATENCY PROFILE</span>
          <p className="text-surface-200/80">{cur.speed}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <span className="text-surface-200/40 font-mono block mb-1">SYNCHRONIZATION CONSTRAINT</span>
          <p className="text-surface-200/80">{cur.sync}</p>
        </div>
      </div>
    </div>
  );
}

export function DeadlockDetectionRAG() {
  const [hasCycle, setHasCycle] = useState<boolean>(true);

  return (
    <div className="glass-card p-6 border border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-200/80 flex items-center gap-2">
            <ShieldAlert size={16} className={hasCycle ? 'text-accent-rose' : 'text-accent-emerald'} />
            Resource Allocation Graph (RAG) & Cycle Deadlock Detection
          </h4>
          <p className="text-xs text-surface-200/60 mt-1">
            Dynamic graph analysis: circular dependency cycles between Processes & Resources indicate deadlock.
          </p>
        </div>

        <button
          onClick={() => setHasCycle(!hasCycle)}
          className={`btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5 ${
            hasCycle ? 'border-accent-rose/40 text-accent-rose' : 'border-accent-emerald/40 text-accent-emerald'
          }`}
        >
          {hasCycle ? 'Resolve Cycle (Release Lock)' : 'Simulate Circular Deadlock'}
        </button>
      </div>

      {/* Graph Visualizer */}
      <div className="bg-[#090c17] p-6 rounded-xl border border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-mono">
          {/* Process 1 */}
          <div className="p-3 rounded-lg border border-primary-500/40 bg-primary-500/10">
            <span className="text-[10px] text-surface-200/50 block">PROCESS NODE</span>
            <span className="text-sm font-bold text-primary-300 block">Process P1</span>
            <span className="text-[11px] text-surface-200/70 mt-1 block">Holds: Resource R1</span>
            <span className={`text-[10px] mt-1 block ${hasCycle ? 'text-accent-rose font-bold' : 'text-surface-200/40'}`}>
              {hasCycle ? 'Requesting: Resource R2' : 'No pending requests'}
            </span>
          </div>

          {/* Resource 1 */}
          <div className="p-3 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10">
            <span className="text-[10px] text-surface-200/50 block">RESOURCE NODE</span>
            <span className="text-sm font-bold text-accent-cyan block">Resource R1 (Mutex)</span>
            <span className="text-[11px] text-surface-200/70 mt-1 block">Allocated to: P1</span>
            <span className="text-[10px] text-surface-200/40 mt-1 block">Capacity: 1 unit</span>
          </div>

          {/* Process 2 */}
          <div className="p-3 rounded-lg border border-primary-500/40 bg-primary-500/10">
            <span className="text-[10px] text-surface-200/50 block">PROCESS NODE</span>
            <span className="text-sm font-bold text-primary-300 block">Process P2</span>
            <span className="text-[11px] text-surface-200/70 mt-1 block">Holds: Resource R2</span>
            <span className={`text-[10px] mt-1 block ${hasCycle ? 'text-accent-rose font-bold' : 'text-surface-200/40'}`}>
              {hasCycle ? 'Requesting: Resource R1' : 'No pending requests'}
            </span>
          </div>

          {/* Resource 2 */}
          <div className="p-3 rounded-lg border border-accent-cyan/40 bg-accent-cyan/10">
            <span className="text-[10px] text-surface-200/50 block">RESOURCE NODE</span>
            <span className="text-sm font-bold text-accent-cyan block">Resource R2 (Semaphore)</span>
            <span className="text-[11px] text-surface-200/70 mt-1 block">Allocated to: P2</span>
            <span className="text-[10px] text-surface-200/40 mt-1 block">Capacity: 1 unit</span>
          </div>
        </div>

        {/* Status banner */}
        <div
          className={`mt-4 p-3 rounded-lg border text-xs font-mono flex items-center justify-between transition-colors ${
            hasCycle
              ? 'border-accent-rose/40 bg-accent-rose/10 text-accent-rose'
              : 'border-accent-emerald/40 bg-accent-emerald/10 text-accent-emerald'
          }`}
        >
          <div className="flex items-center gap-2">
            {hasCycle ? <ShieldAlert size={16} /> : <Unlock size={16} />}
            <span>
              {hasCycle
                ? 'CYCLE DETECTED: P1 → R2 → P2 → R1 → P1. Deadlock flagged in monitoring dashboard!'
                : 'GRAPH ACYCLIC: All process resource requests satisfied cleanly without blocking cycles.'}
            </span>
          </div>
          <span className="text-[11px] uppercase font-bold tracking-wider">
            {hasCycle ? 'DEADLOCK STATUS: CRITICAL' : 'DEADLOCK STATUS: CLEAR'}
          </span>
        </div>
      </div>
    </div>
  );
}
