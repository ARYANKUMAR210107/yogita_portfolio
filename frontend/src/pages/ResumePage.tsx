import { useState } from 'react';
import {
  FileDown,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { personalInfo, education, certifications } from '../data/portfolio';

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Resume & Professional Profile | Yogita Sharma"
        description="Official professional resume of Yogita Sharma, Computer Science & Engineering student at Lovely Professional University. Download PDF or view online."
      />

      {/* Top Action Bar (hidden when printing) */}
      <div className="no-print mb-8 p-4 rounded-xl glass-card border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-accent-emerald font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            Verified Authentic Curriculum Vitae
          </span>
          <span className="text-xs text-surface-200/50 block mt-0.5">
            Updated September 2026 • Print & ATS Optimized
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={personalInfo.resumeFile}
            download="Yogita_Sharma_Resume.pdf"
            className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5"
          >
            <FileDown size={14} />
            <span>Download Official PDF</span>
          </a>

          <button
            onClick={handlePrint}
            className="btn-outline text-xs py-2 px-3.5 flex items-center gap-1.5"
          >
            <Printer size={14} />
            <span>Print Resume</span>
          </button>

          <button
            onClick={copyProfileLink}
            className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
            title="Copy Resume Link"
          >
            {copied ? <Check size={14} className="text-accent-emerald" /> : <Copy size={14} />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Container */}
      <div className="resume-container glass-card p-8 sm:p-12 border border-white/[0.1] shadow-2xl bg-[#0a0d18] text-surface-100 font-sans">
        {/* Header */}
        <div className="text-center pb-6 border-b border-white/10 print-border">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 print-text-dark">
            {personalInfo.name}
          </h1>
          <p className="text-sm text-primary-400 font-mono font-medium mb-3 print-text-dark">
            {personalInfo.title} • Lovely Professional University
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-surface-200/70 print-text-muted">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white flex items-center gap-1">
              <Mail size={12} />
              <span>{personalInfo.email}</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Phone size={12} />
              <span>{personalInfo.phone}</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <LinkedinIcon size={12} />
              <span>linkedin.com/in/yogita2006</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <GithubIcon size={12} />
              <span>github.com/{personalInfo.githubUsername}</span>
            </a>
          </div>
        </div>

        {/* 1. Professional Summary */}
        <div className="py-6 border-b border-white/10 resume-section print-border">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-2 print-text-dark">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/80 leading-relaxed print-text-dark">
            {personalInfo.about}
          </p>
        </div>

        {/* 2. Education */}
        <div className="py-6 border-b border-white/10 resume-section print-border">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-4 print-text-dark">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print-text-dark">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-xs text-primary-300 print-text-muted">{edu.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-surface-200/70 text-xs mt-0.5 print-text-muted">
                  <span>{edu.degree}</span>
                  <span className="font-mono font-semibold text-accent-emerald">{edu.grade}</span>
                </div>
                {edu.id === 'lpu' && (
                  <p className="text-[11px] text-surface-200/50 mt-1 font-mono print-text-muted">
                    Relevant Coursework: Data Structures, Algorithms, OS, DBMS, Computer Networks, Java/C++ OOP
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Technical Skills */}
        <div className="py-6 border-b border-white/10 resume-section print-border">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-4 print-text-dark">
            Technical Skills
          </h2>
          <div className="space-y-2 text-xs font-mono text-surface-200/80 print-text-dark">
            <div>
              <strong className="text-white print-text-dark">Languages: </strong>
              <span>C++, Python, C, Java</span>
            </div>
            <div>
              <strong className="text-white print-text-dark">Data & Machine Learning: </strong>
              <span>NumPy, Pandas, Scikit-learn, XGBoost</span>
            </div>
            <div>
              <strong className="text-white print-text-dark">Databases & Tools: </strong>
              <span>MS SQL Server, Relational DBMS</span>
            </div>
            <div>
              <strong className="text-white print-text-dark">Platforms: </strong>
              <span>LeetCode, GeeksforGeeks, HackerRank, CodeTantra</span>
            </div>
            <div>
              <strong className="text-white print-text-dark">Soft Skills: </strong>
              <span>Problem-Solving, Team Player, Adaptability</span>
            </div>
          </div>
        </div>

        {/* 4. Projects */}
        <div className="py-6 border-b border-white/10 resume-section print-border">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-4 print-text-dark">
            Projects
          </h2>
          <div className="space-y-6 text-xs sm:text-sm">
            {/* TaskFlow */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print-text-dark">
                <span>TaskFlow – Priority Task Scheduler</span>
                <span className="font-mono text-xs text-primary-300 print-text-muted">Jun &apos;26</span>
              </div>
              <p className="text-xs font-mono text-surface-200/50 mb-2 print-text-muted">
                Java, Spring Boot, REST API, DSA (Min Heap, DAG, Trie)
              </p>
              <ul className="space-y-1 text-xs text-surface-200/80 list-disc list-inside print-text-dark">
                <li>Developed a priority-based task scheduling system using custom implementations of Min Heap, Stack, Queue, Trie, and Graph, enabling efficient task management, dependency handling, and undo functionality.</li>
                <li>Designed and implemented RESTful APIs using Spring Boot for task creation, completion, dependency management, autocomplete search, and execution-order generation through Topological Sort.</li>
                <li>Built an interactive web dashboard using HTML, CSS, and JavaScript to visualize task priorities, dependency graphs, and sorting algorithm performance while benchmarking Merge Sort and Quick Sort implementations.</li>
              </ul>
            </div>

            {/* IPC Debugger */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print-text-dark">
                <span>IPC Debugger – Inter-Process Communication Monitoring Tool</span>
                <span className="font-mono text-xs text-primary-300 print-text-muted">Dec &apos;25</span>
              </div>
              <p className="text-xs font-mono text-surface-200/50 mb-2 print-text-muted">
                C/C++, Operating Systems, IPC, POSIX System Calls, GUI
              </p>
              <ul className="space-y-1 text-xs text-surface-200/80 list-disc list-inside print-text-dark">
                <li>Developed an interactive IPC debugging tool supporting Pipes, Message Queues, and Shared Memory for real-time inter-process communication and process monitoring.</li>
                <li>Implemented process synchronization, resource allocation, and deadlock detection using Mutexes, Semaphores, and Resource Allocation Graphs (RAG) to identify communication bottlenecks and resource conflicts.</li>
                <li>Built a graphical monitoring dashboard to visualize process states, IPC workflows, message flow, synchronization events, and system logs for efficient debugging and analysis.</li>
              </ul>
            </div>

            {/* Starbucks Clone */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print-text-dark">
                <span>Starbucks Clone Website</span>
                <span className="font-mono text-xs text-primary-300 print-text-muted">Sep &apos;24</span>
              </div>
              <p className="text-xs font-mono text-surface-200/50 mb-2 print-text-muted">
                HTML, CSS, JavaScript, Responsive Web Design
              </p>
              <ul className="space-y-1 text-xs text-surface-200/80 list-disc list-inside print-text-dark">
                <li>Developed a responsive Starbucks-inspired website with an intuitive user interface, enabling seamless navigation and an engaging user experience.</li>
                <li>Implemented responsive web design principles to ensure compatibility and optimal performance across desktop, tablet, and mobile devices.</li>
                <li>Designed interactive coffee ordering and customization features, enhancing user engagement while demonstrating front-end development and UI/UX design skills.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Training */}
        <div className="py-6 border-b border-white/10 resume-section print-border">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-3 print-text-dark">
            Training & Continuing Education
          </h2>
          <div className="text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print-text-dark">
              <span>Board Infinity (EdTech Platform)</span>
              <span className="font-mono text-xs text-primary-300 print-text-muted">Jun &apos;26 – Jul &apos;26</span>
            </div>
            <p className="text-xs font-mono text-surface-200/50 mb-2 print-text-muted">
              Data Structure and Algorithm – JAVA
            </p>
            <ul className="space-y-1 text-xs text-surface-200/80 list-disc list-inside print-text-dark">
              <li>Acquired strong foundations in Data Structures and Algorithms, covering Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, and Hash Maps.</li>
              <li>Practiced sorting, searching, recursion, and algorithm design techniques to develop optimized and scalable solutions for coding problems.</li>
              <li>Enhanced analytical and problem-solving abilities by applying DSA concepts to real-world programming challenges and interview-oriented questions.</li>
            </ul>
          </div>
        </div>

        {/* 6. Certifications */}
        <div className="pt-6 resume-section">
          <h2 className="text-xs uppercase font-mono tracking-wider font-bold text-primary-400 mb-3 print-text-dark">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-surface-200/80 print-text-dark">
            {certifications.map((c) => (
              <div key={c.id} className="flex justify-between p-2 rounded bg-white/[0.02] border border-white/[0.04] print-border">
                <span>{c.name} | {c.organization}</span>
                <span className="text-surface-200/50 print-text-muted">{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
