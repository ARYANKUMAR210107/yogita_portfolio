import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Play, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export function TaskLifecycleDiagram() {
  const steps = [
    {
      step: '01',
      title: 'Task Created',
      desc: 'Task received via REST API with priority rating (1-10) and prerequisite list.',
      color: 'border-primary-500/40 bg-primary-500/10 text-primary-300',
    },
    {
      step: '02',
      title: 'Heap Ingestion',
      desc: 'Inserted into custom Min Heap with O(log n) bubble-up priority maintenance.',
      color: 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan',
    },
    {
      step: '03',
      title: 'DAG Validation',
      desc: 'Topological sort analyzes dependencies. Cycle detection ensures non-blocking DAG.',
      color: 'border-accent-violet/40 bg-accent-violet/10 text-accent-violet',
    },
    {
      step: '04',
      title: 'Execution Dispatch',
      desc: 'Top priority task with 0 unresolved prerequisites is dispatched to executor queue.',
      color: 'border-accent-amber/40 bg-accent-amber/10 text-accent-amber',
    },
    {
      step: '05',
      title: 'Completion & Undo',
      desc: 'Status persisted; dependents unblocked. State snapshot logged into Undo Stack.',
      color: 'border-accent-emerald/40 bg-accent-emerald/10 text-accent-emerald',
    },
  ];

  return (
    <div className="glass-card p-6 border border-white/[0.08]">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-200/80 mb-6 flex items-center gap-2">
        <Layers size={16} className="text-primary-400" />
        Deterministic Task Execution Lifecycle
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col relative">
            <div className={`p-4 rounded-xl border ${item.color} h-full flex flex-col`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold opacity-70">STAGE {item.step}</span>
                {idx < steps.length - 1 && (
                  <ArrowRight size={14} className="text-surface-200/30 hidden md:block" />
                )}
              </div>
              <h5 className="text-sm font-bold text-surface-100 mb-1.5">{item.title}</h5>
              <p className="text-xs text-surface-200/70 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MinHeapVisualizer() {
  const [heapNodes] = useState([
    { id: 1, name: 'Task #1 (Root)', priority: 1, tag: 'Urgent Bugfix' },
    { id: 2, name: 'Task #2 (L-Child)', priority: 2, tag: 'Security Patch' },
    { id: 3, name: 'Task #3 (R-Child)', priority: 4, tag: 'API Optimization' },
    { id: 4, name: 'Task #4', priority: 5, tag: 'Refactor Auth' },
    { id: 5, name: 'Task #5', priority: 3, tag: 'Database Migration' },
  ]);

  const [activeRoot, setActiveRoot] = useState(false);

  const simulateExtractMin = () => {
    setActiveRoot(true);
    setTimeout(() => {
      setActiveRoot(false);
    }, 1200);
  };

  return (
    <div className="glass-card p-6 border border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-200/80">
            Min Heap Priority Queue Representation
          </h4>
          <p className="text-xs text-surface-200/60 mt-1">
            Always extracts lowest numerical priority (highest urgency) in O(1) peek / O(log n) extraction.
          </p>
        </div>
        <button
          onClick={simulateExtractMin}
          className="btn-outline text-xs py-1.5 px-3 self-start sm:self-auto flex items-center gap-1.5"
        >
          <Play size={13} className="text-primary-400" />
          Simulate extractMin()
        </button>
      </div>

      {/* Tree Visualization */}
      <div className="flex flex-col items-center py-4 bg-[#0a0d17] rounded-xl border border-white/[0.05] p-4">
        {/* Level 1: Root */}
        <motion.div
          animate={activeRoot ? { scale: [1, 1.1, 1], borderColor: '#10b981' } : {}}
          className={`p-3 rounded-lg border text-center max-w-xs w-56 transition-all ${
            activeRoot
              ? 'border-accent-emerald bg-accent-emerald/20 shadow-lg shadow-emerald-500/20'
              : 'border-primary-500/40 bg-primary-500/10'
          }`}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-primary-300 block">
            Min Heap Top [Index 0]
          </span>
          <span className="text-sm font-bold text-surface-100 block">{heapNodes[0].name}</span>
          <span className="text-xs text-emerald-400 font-mono">Priority: {heapNodes[0].priority} ({heapNodes[0].tag})</span>
        </motion.div>

        {/* Tree Connectors */}
        <div className="w-48 h-6 border-b-2 border-l-2 border-r-2 border-white/20 my-1" />

        {/* Level 2: Children */}
        <div className="grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-md mt-1">
          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02] text-center">
            <span className="text-[10px] font-mono text-surface-200/50 block">Left Child [Index 1]</span>
            <span className="text-xs font-bold text-surface-200 block">{heapNodes[1].name}</span>
            <span className="text-xs text-primary-300 font-mono">Priority: {heapNodes[1].priority}</span>
          </div>

          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02] text-center">
            <span className="text-[10px] font-mono text-surface-200/50 block">Right Child [Index 2]</span>
            <span className="text-xs font-bold text-surface-200 block">{heapNodes[2].name}</span>
            <span className="text-xs text-primary-300 font-mono">Priority: {heapNodes[2].priority}</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/[0.05] w-full text-center">
          <span className="text-[11px] font-mono text-surface-200/60">
            Internal Array Heap State: [ 1, 2, 4, 5, 3 ] • Parent(i) = ⌊(i-1)/2⌋
          </span>
        </div>
      </div>
    </div>
  );
}

export function DAGTopologicalVisualizer() {
  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      active: ['Task A'],
      processed: [],
      inDegrees: { 'Task A': 0, 'Task B': 1, 'Task C': 1, 'Task D': 2 },
      log: 'Initialized DAG. Task A has In-Degree 0 (no prerequisites). Ready to queue.',
    },
    {
      active: ['Task B', 'Task C'],
      processed: ['Task A'],
      inDegrees: { 'Task A': 0, 'Task B': 0, 'Task C': 0, 'Task D': 2 },
      log: 'Task A completed. Removed outgoing edges. In-degrees of Task B and C reduced to 0.',
    },
    {
      active: ['Task D'],
      processed: ['Task A', 'Task B', 'Task C'],
      inDegrees: { 'Task A': 0, 'Task B': 0, 'Task C': 0, 'Task D': 0 },
      log: 'Tasks B & C executed in parallel. Task D in-degree decreased from 2 to 0.',
    },
    {
      active: [],
      processed: ['Task A', 'Task B', 'Task C', 'Task D'],
      inDegrees: { 'Task A': 0, 'Task B': 0, 'Task C': 0, 'Task D': 0 },
      log: 'Topological Sort Completed: Execution Order: [Task A → Task B → Task C → Task D]. No cycles detected.',
    },
  ];

  return (
    <div className="glass-card p-6 border border-white/[0.08]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-200/80">
            Directed Acyclic Graph (DAG) & Topological Sorting
          </h4>
          <p className="text-xs text-surface-200/60">
            Step through Kahn’s Algorithm for resolving task prerequisite dependencies.
          </p>
        </div>
        <button
          onClick={() => setStep((prev) => (prev + 1) % steps.length)}
          className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
        >
          <RefreshCw size={13} className="text-accent-cyan" />
          Next Step ({step + 1}/{steps.length})
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        {['Task A', 'Task B', 'Task C', 'Task D'].map((task) => {
          const isDone = steps[step].processed.includes(task);
          const isActive = steps[step].active.includes(task);

          return (
            <div
              key={task}
              className={`p-3 rounded-lg border text-center transition-all ${
                isDone
                  ? 'border-accent-emerald/40 bg-accent-emerald/10 text-accent-emerald'
                  : isActive
                  ? 'border-accent-cyan/60 bg-accent-cyan/20 text-accent-cyan ring-1 ring-accent-cyan/40'
                  : 'border-white/10 bg-white/[0.02] text-surface-200/60'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                {isDone ? (
                  <CheckCircle2 size={14} className="text-accent-emerald" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-current" />
                )}
                <span className="font-bold text-xs">{task}</span>
              </div>
              <span className="font-mono text-[11px] block opacity-80">
                In-degree: {steps[step].inDegrees[task as keyof typeof steps[0]['inDegrees']]}
              </span>
              <span className="text-[10px] uppercase font-mono block mt-1">
                {isDone ? 'COMPLETED' : isActive ? 'SCHEDULED' : 'WAITING'}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0b0e19] p-3 rounded-lg border border-white/[0.04] text-xs font-mono text-surface-200/80 flex items-start gap-2">
        <AlertCircle size={15} className="text-primary-400 mt-0.5 flex-shrink-0" />
        <p>{steps[step].log}</p>
      </div>
    </div>
  );
}
