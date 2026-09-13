import {
  Layers,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import SEO from '../components/SEO';
import { training } from '../data/portfolio';

export default function TrainingPage() {
  const t = training[0];

  const complexityReference = [
    { structure: 'Dynamic Array', access: 'O(1)', search: 'O(n)', insert: 'O(n) / O(1)*', delete: 'O(n)' },
    { structure: 'Singly / Doubly Linked List', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)' },
    { structure: 'Binary Heap (Priority Queue)', access: 'O(1) peek', search: 'O(n)', insert: 'O(log n)', delete: 'O(log n)' },
    { structure: 'Hash Map (Separate Chaining)', access: 'N/A', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*' },
    { structure: 'Binary Search Tree (Balanced)', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)' },
    { structure: 'Graph (Adjacency List BFS/DFS)', access: 'O(1)', search: 'O(V + E)', insert: 'O(1)', delete: 'O(E)' },
  ];

  const curriculumModules = [
    {
      title: 'Linear Data Structures',
      topics: ['Dynamic Arrays & Resizing', 'Singly & Doubly Linked Lists', 'Monotonic Stacks & Postfix Evaluation', 'Circular Queues & Deques'],
      badge: 'Module 01',
    },
    {
      title: 'Trees & Hierarchical Models',
      topics: ['Binary Tree Traversals (Inorder, Preorder, Postorder, Level-Order)', 'Binary Search Trees (BST Operations)', 'LCA & Diameter of Tree', 'Balanced Tree Concepts'],
      badge: 'Module 02',
    },
    {
      title: 'Heaps & Priority Queues',
      topics: ['Min Heap & Max Heap Construction', 'Heapify Algorithm O(n)', 'Priority Queue in Java Collections', 'Top-K Elements & Median in Stream'],
      badge: 'Module 03',
    },
    {
      title: 'Graphs & Disjoint Sets',
      topics: ['Graph Representations (Matrix vs. List)', 'Breadth-First Search (BFS) & Depth-First Search (DFS)', 'Topological Sorting (Kahn’s Algorithm)', 'Cycle Detection in Directed/Undirected Graphs'],
      badge: 'Module 04',
    },
    {
      title: 'Hashing & String Processing',
      topics: ['Hash Map Collisions & Load Factor', 'Prefix Trie Construction & Search', 'Two Pointer Techniques', 'Sliding Window Substring Patterns'],
      badge: 'Module 05',
    },
    {
      title: 'Sorting & Algorithm Design',
      topics: ['Merge Sort (Divide & Conquer)', 'Quick Sort (Partitioning Strategies)', 'Recursion & Backtracking', 'Greedy Algorithms & Intro to DP'],
      badge: 'Module 06',
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Training & Continuing Education | Yogita Sharma"
        description="Comprehensive Data Structures and Algorithms training completed with Board Infinity covering Java collections, Trees, Graphs, Heaps, and asymptotic analysis."
      />

      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Structured Training</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Data Structures & Algorithms – Java
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          Intensive program by Board Infinity focused on algorithmic design paradigms, asymptotic complexity optimization, and enterprise software patterns in Java.
        </p>
      </div>

      {/* Program Header Card */}
      <div className="glass-card p-8 border border-primary-500/20 bg-gradient-to-r from-primary-950/30 via-surface-900 to-surface-950 mb-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-xs font-mono text-primary-400 font-bold uppercase tracking-wider block mb-1">
              EdTech Platform Credential
            </span>
            <h2 className="text-2xl font-bold text-white">{t.organization}</h2>
            <p className="text-sm text-surface-200/70 font-mono mt-1">{t.title}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-surface-200/40 block">DURATION</span>
              <span className="text-white font-bold">{t.period}</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-surface-200/40 block">LANGUAGE</span>
              <span className="text-accent-cyan font-bold">Java (JDK)</span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-surface-200/40 block">OUTCOME</span>
              <span className="text-accent-emerald font-bold">{t.credential}</span>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <h3 className="text-xs uppercase font-mono text-surface-200/50 mb-3">Core Training Summary</h3>
          <p className="text-sm text-surface-200/80 leading-relaxed mb-4">
            {t.summary}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.takeaways.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-surface-200/70">
                <CheckCircle2 size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Grid */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Layers size={18} className="text-primary-400" />
          <h2 className="text-xl font-bold text-white">Curriculum Modules & Deep Topics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumModules.map((mod, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-primary-300 uppercase px-2 py-0.5 rounded bg-primary-500/10 border border-primary-500/20">
                    {mod.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-4">{mod.title}</h3>
                <ul className="space-y-2 text-xs text-surface-200/70">
                  {mod.topics.map((top, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-primary-400 font-mono">•</span>
                      <span>{top}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Algorithmic Complexity Mastery Table */}
      <div className="glass-card p-6 sm:p-8 border border-white/[0.08] overflow-x-auto">
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={18} className="text-accent-cyan" />
          <h2 className="text-xl font-bold text-white">Algorithmic Complexity Matrix</h2>
        </div>

        <table className="w-full text-left border-collapse text-xs font-mono min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10 text-surface-200/50">
              <th className="py-3 px-4">DATA STRUCTURE</th>
              <th className="py-3 px-4">ACCESS</th>
              <th className="py-3 px-4">SEARCH</th>
              <th className="py-3 px-4">INSERTION</th>
              <th className="py-3 px-4">DELETION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {complexityReference.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 text-white font-semibold">{row.structure}</td>
                <td className="py-3 px-4 text-surface-200/70">{row.access}</td>
                <td className="py-3 px-4 text-surface-200/70">{row.search}</td>
                <td className="py-3 px-4 text-accent-emerald">{row.insert}</td>
                <td className="py-3 px-4 text-primary-300">{row.delete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
