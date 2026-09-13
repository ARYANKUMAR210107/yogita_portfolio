import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Code2, Loader2 } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

const languageColors: Record<string, string> = {
  Java: '#f89820',
  'C++': '#f34b7d',
  C: '#555555',
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const username = personalInfo.githubUsername || 'yogitasharma3372-ui';

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error('API limit');

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  return (
    <SectionWrapper id="github" className="overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">GitHub Activity</h2>
        <p className="section-subtitle">
          My open source contributions and projects
        </p>
      </div>

      {loading && (
        <div className="flex justify-center py-16">
          <Loader2 size={32} className="animate-spin text-primary-400" />
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <div className="glass-card max-w-md mx-auto p-8">
            <GithubIcon size={40} className="text-surface-200/30 mx-auto mb-4" />
            <p className="text-surface-200/60 mb-4">
              GitHub data is temporarily unavailable.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <ExternalLink size={16} />
              Visit My GitHub
            </a>
          </div>
        </div>
      )}

      {!loading && !error && profile && (
        <>
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 mb-10 max-w-2xl mx-auto"
          >
            <img
              src={profile.avatar_url}
              alt={`${profile.login}'s avatar`}
              className="w-20 h-20 rounded-xl border-2 border-primary-500/20"
              loading="lazy"
            />
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg font-bold text-surface-100">{profile.login}</h3>
              {profile.bio && (
                <p className="text-sm text-surface-200/60 mt-1">{profile.bio}</p>
              )}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 text-sm text-surface-200/50">
                <span>{profile.public_repos} repos</span>
                <span>{profile.followers} followers</span>
                <span>{profile.following} following</span>
              </div>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm flex-shrink-0"
            >
              <GithubIcon size={16} />
              View Profile
            </a>
          </motion.div>

          {/* Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 mb-10 overflow-x-auto"
          >
            <img
              src={`https://ghchart.rshah.org/6366f1/${username}`}
              alt="GitHub contribution graph"
              className="w-full max-w-4xl mx-auto opacity-80"
              loading="lazy"
            />
          </motion.div>

          {/* Repos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-5 block group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Code2 size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                  <h4 className="text-sm font-semibold text-surface-100 group-hover:text-primary-400 transition-colors truncate">
                    {repo.name}
                  </h4>
                </div>
                <p className="text-xs text-surface-200/50 mb-4 line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex items-center gap-4 text-xs text-surface-200/40">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || '#858585' }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
