import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RouteScrollToTop from './components/RouteScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import TaskFlowCaseStudy from './pages/TaskFlowCaseStudy';
import IPCDebuggerCaseStudy from './pages/IPCDebuggerCaseStudy';
import StarbucksCaseStudy from './pages/StarbucksCaseStudy';
import CertificationsPage from './pages/CertificationsPage';
import TrainingPage from './pages/TrainingPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Router>
      <RouteScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#060810] text-surface-100 selection:bg-primary-500/30 selection:text-white relative">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/taskflow" element={<TaskFlowCaseStudy />} />
            <Route path="/projects/ipc-debugger" element={<IPCDebuggerCaseStudy />} />
            <Route path="/projects/starbucks-clone" element={<StarbucksCaseStudy />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
