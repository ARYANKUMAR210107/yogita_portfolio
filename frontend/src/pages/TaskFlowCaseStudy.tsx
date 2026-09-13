import { NavLink } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SEO from '../components/SEO';
import {
  TaskLifecycleDiagram,
  MinHeapVisualizer,
  DAGTopologicalVisualizer,
} from '../components/TaskFlowDiagrams';
import { projects } from '../data/portfolio';

export default function TaskFlowCaseStudy() {
  const project = projects.find((p) => p.id === 'taskflow')!;

  const apiEndpoints = [
    { method: 'POST', path: '/api/v1/tasks', desc: 'Create a new task node with priority rating, deadline, and description.' },
    { method: 'GET', path: '/api/v1/tasks/next', desc: 'Retrieve the highest priority task ready for execution using Min Heap peek.' },
    { method: 'POST', path: '/api/v1/tasks/{id}/dependencies', desc: 'Register directed edge (prerequisite → dependent) in the DAG.' },
    { method: 'GET', path: '/api/v1/tasks/execution-order', desc: 'Compute valid topological ordering using Kahn’s Algorithm.' },
    { method: 'GET', path: '/api/v1/tasks/search?prefix=abc', desc: 'Prefix autocomplete lookup querying the in-memory Trie.' },
    { method: 'POST', path: '/api/v1/tasks/undo', desc: 'Pop latest completed state from the Undo Stack to revert task mutation.' },
  ];

  const techDecisions = [
    {
      title: 'Min Heap vs. Sorted LinkedList for Priority Scheduling',
      decision: 'Selected a custom binary Min Heap implemented on dynamic arrays.',
      reasoning: 'Sorted linked list insertion is O(n), whereas a binary heap achieves O(log n) insertion and O(1) peek. Under continuous task stream arrivals, Min Heap maintains bounded predictable latency.',
    },
    {
      title: 'Kahn’s Algorithm vs. DFS for Topological Sorting',
      decision: 'Implemented Kahn’s in-degree queue-based topological sort.',
      reasoning: 'Kahn’s algorithm naturally surfaces tasks with in-degree 0 for immediate parallel execution while effortlessly detecting cycles (deadlocks) if the processed node count is strictly less than total vertices.',
    },
    {
      title: 'Trie vs. Linear Substring Search for Autocomplete',
      decision: 'Engineered a Prefix Trie with lowercase alphabetic node pointers.',
      reasoning: 'Trie search complexity is strictly O(L), where L is the search prefix length, completely independent of the total number of tasks stored in the system.',
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="TaskFlow Case Study – Priority Task Scheduler | Yogita Sharma"
        description="Engineering case study of TaskFlow: a deterministic priority task scheduling engine built with Java, Spring Boot, Min Heap, Trie, and DAG Topological Sort."
      />

      {/* Back to Projects */}
      <NavLink
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-400 hover:text-primary-300 mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to All Projects</span>
      </NavLink>

      {/* Hero Header */}
      <div className="mb-14">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="section-badge">Case Study 01</span>
          <span className="text-xs font-mono text-surface-200/50">Jun 2026 • Java & Spring Boot</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
          TaskFlow – Priority Task Scheduler
        </h1>
        <p className="text-lg text-primary-400 font-mono mb-6">
          Deterministic Task Orchestration via Custom Min Heap, DAG & Trie Architecture
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag tag-accent text-xs">{tech}</span>
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
            <span className="text-primary-400 font-mono text-sm">01.</span>
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* 02 — Problem */}
        <section id="problem" className="glass-card p-8 border border-accent-rose/20 bg-accent-rose/5">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-rose font-mono text-sm">02.</span>
            The Problem Space
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed mb-4">
            {project.problem}
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-surface-200/70 font-mono">
            <li>• Prerequisite deadlocks occur when cyclic dependencies form unnoticed.</li>
            <li>• Sorting algorithms with O(n²) or non-stable sorting produce inconsistent execution queues.</li>
            <li>• Autocomplete in traditional databases degrades as task volume scales without custom prefix indexes.</li>
          </ul>
        </section>

        {/* 03 — Solution */}
        <section id="solution" className="glass-card p-8 border border-accent-emerald/20 bg-accent-emerald/5">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-emerald font-mono text-sm">03.</span>
            The Algorithmic Solution
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed mb-4">
            {project.solution}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">Min Heap</strong>
              <span className="text-surface-200/60">O(log n) insertions & O(1) peek for highest priority task.</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">DAG Topological Sort</strong>
              <span className="text-surface-200/60">Validates prerequisite dependencies and detects recursive loops.</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs">
              <strong className="text-white block mb-1">Prefix Trie</strong>
              <span className="text-surface-200/60">Instant O(L) title queries for real-time dashboard autocomplete.</span>
            </div>
          </div>
        </section>

        {/* 04 — Architecture */}
        <section id="architecture" className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-400 font-mono text-sm">04.</span>
            <h2 className="text-xl font-bold text-white">System Architecture</h2>
          </div>
          <div className="space-y-3">
            {project.architecture.map((layer, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/[0.06] flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 font-mono text-xs font-bold flex-shrink-0">
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

        {/* 05 — Data Structures */}
        <section id="data-structures" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-primary-400 font-mono text-sm">05.</span>
            Custom Data Structures Implementation
          </h2>

          <div className="space-y-4 text-xs sm:text-sm font-mono text-surface-200/80">
            <div className="p-4 rounded-lg bg-[#0a0d18] border border-white/[0.06]">
              <span className="text-primary-400 font-bold block mb-1">1. Priority Min Heap (Heap.java)</span>
              <p className="text-surface-200/60 text-xs font-sans mb-2">
                Maintains tasks arranged by urgency where lowest rank integer represents top priority. Supports bubble-up on insert and sink-down on extractMin.
              </p>
              <div className="bg-[#05070e] p-3 rounded text-[11px] text-surface-200/70 overflow-x-auto">
                Time Complexity: Peek O(1) • Insert O(log n) • ExtractMin O(log n) • Space: O(n)
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0d18] border border-white/[0.06]">
              <span className="text-accent-cyan font-bold block mb-1">2. Directed Acyclic Graph (TaskGraph.java)</span>
              <p className="text-surface-200/60 text-xs font-sans mb-2">
                Adjacency-list mapping for task prerequisites. Kahn’s algorithm maintains an in-degree map to continuously dispatch available tasks.
              </p>
              <div className="bg-[#05070e] p-3 rounded text-[11px] text-surface-200/70 overflow-x-auto">
                Topological Sort Time: O(V + E) • Cycle Detection: O(V + E) • Space: O(V + E)
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0d18] border border-white/[0.06]">
              <span className="text-accent-violet font-bold block mb-1">3. Prefix Trie (TaskTrie.java)</span>
              <p className="text-surface-200/60 text-xs font-sans mb-2">
                Tree-based search index where edges represent alphanumeric characters. Facilitates instant keyword suggestions as users type in the dashboard search bar.
              </p>
              <div className="bg-[#05070e] p-3 rounded text-[11px] text-surface-200/70 overflow-x-auto">
                Search Prefix Time: O(L) • Space: O(Alphabet_Size × L × N)
              </div>
            </div>
          </div>
        </section>

        {/* 06 — API Design */}
        <section id="api-design" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-primary-400 font-mono text-sm">06.</span>
            RESTful API Specification (Spring Boot)
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {apiEndpoints.map((api, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#080b16] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      api.method === 'POST'
                        ? 'bg-accent-emerald/20 text-accent-emerald'
                        : 'bg-primary-500/20 text-primary-300'
                    }`}
                  >
                    {api.method}
                  </span>
                  <span className="text-surface-100 font-semibold">{api.path}</span>
                </div>
                <span className="text-surface-200/60 text-[11px] font-sans sm:text-right">
                  {api.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — Features */}
        <section id="features" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-primary-400 font-mono text-sm">07.</span>
            Engineered Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02]">
                <CheckCircle2 size={15} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-surface-200/80">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 08 — Algorithm Visualizations (Visual Diagrams) */}
        <section id="visualizations" className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary-400 font-mono text-sm">08.</span>
            <h2 className="text-xl font-bold text-white">Algorithm & Structural Visualizations</h2>
          </div>

          <TaskLifecycleDiagram />
          <MinHeapVisualizer />
          <DAGTopologicalVisualizer />
        </section>

        {/* 09 — Technical Decisions */}
        <section id="decisions" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-primary-400 font-mono text-sm">09.</span>
            Architectural Trade-offs & Decisions
          </h2>

          <div className="space-y-6">
            {techDecisions.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                <h3 className="text-sm font-bold text-surface-100">{item.title}</h3>
                <p className="text-xs font-mono text-primary-300">Decision: {item.decision}</p>
                <p className="text-xs text-surface-200/70 leading-relaxed">{item.reasoning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10 — Project Gallery / Dashboard Architecture */}
        <section id="gallery" className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-primary-400 font-mono text-sm">10.</span>
            Web Dashboard Mockup & Telemetry
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/70 mb-6">
            Built with HTML, CSS, and JavaScript, the client dashboard renders the live state of the Java Spring Boot service.
          </p>

          <div className="bg-[#080b16] rounded-xl border border-white/[0.08] p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
              <span className="text-surface-200/70 flex items-center gap-2">
                <Terminal size={14} className="text-primary-400" />
                TaskFlow Web Client Dashboard
              </span>
              <span className="text-accent-emerald text-[11px]">● Connected to localhost:8080</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                <span className="text-surface-200/40 text-[10px] block">ACTIVE HEAP NODES</span>
                <span className="text-lg font-bold text-white">12 Tasks</span>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                <span className="text-surface-200/40 text-[10px] block">GRAPH IN-DEGREE 0</span>
                <span className="text-lg font-bold text-accent-cyan">3 Ready</span>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04]">
                <span className="text-surface-200/40 text-[10px] block">TOPOLOGICAL STATUS</span>
                <span className="text-lg font-bold text-accent-emerald">Acyclic (Valid)</span>
              </div>
            </div>

            <div className="p-3 rounded bg-[#04060d] border border-white/[0.03] text-surface-200/70 text-[11px]">
              [INFO] Spring Boot Application started in 1.42s (JVM running for 2.08)
              <br />
              [INFO] MinHeap initialized with initial capacity 64.
              <br />
              [INFO] DAG topological validator: 0 cycles detected across current dependencies.
            </div>
          </div>
        </section>

        {/* 11 — GitHub */}
        <section id="github" className="glass-card p-8 border border-white/[0.08] text-center">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-primary-400 font-mono text-sm">11.</span>
            Repository & Code Access
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/70 max-w-md mx-auto mb-6">
            Review the complete Java Spring Boot code, Min Heap algorithm implementations, and REST API controllers on GitHub.
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
