import React, { useState } from 'react';
import type { Boss } from '../../data/levels';
import { ENGINEERING_LEVELS as LEVELS } from '../../data/levels';

// Select 6 primary high-impact bosses for the homepage showcase
const FEATURED_BOSS_IDS = [
  'b-02-hallucination',
  'b-03-latency',
  'b-02-agent-reliability',
  'b-02-retrieval',
  'b-02-memory',
  'b-01-scalability',
];

const allBosses: Boss[] = LEVELS.flatMap((lvl) => lvl.bosses);
const featuredBosses: Boss[] = FEATURED_BOSS_IDS.map(
  (id) => allBosses.find((b) => b.id === id)!
).filter(Boolean);

export const Scene05Bosses: React.FC = () => {
  const [selectedBoss, setSelectedBoss] = useState<Boss>(featuredBosses[0]);

  return (
    <section className="scene-bosses" id="scene-bosses">
      <div className="bosses-inner">
        {/* Header Block */}
        <div className="bosses-header">
          <div className="scene-tag">05 // ENGINEERING CHALLENGES</div>
          <h2 className="bosses-title">DEFEATING SYSTEM BOTTLENECK "BOSSES"</h2>
          <p className="bosses-subtitle">
            Engineering capability is measured by the severity of the problems you can solve. Select a challenge below to inspect the solution strategy and evidence.
          </p>
        </div>

        {/* 6-Card Brutalist Challenge Grid */}
        <div className="bosses-showcase-grid">
          {/* Left Grid Selection & Inline Accordion on Mobile */}
          <div className="boss-cards-matrix">
            {featuredBosses.map((boss) => {
              const isSelected = selectedBoss.id === boss.id;

              return (
                <div
                  key={boss.id}
                  className={`boss-card-btn brutalist-box ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedBoss(boss)}
                >
                  <div className="boss-card-top">
                    <span className="boss-code">{boss.code}</span>
                    <span className={`boss-status-badge ${boss.status.toLowerCase()}`}>
                      {boss.status}
                    </span>
                  </div>
                  <h3 className="boss-name">{boss.name}</h3>
                  <span className="boss-category">{boss.category}</span>

                  <div className="boss-expand-hint show-on-mobile">
                    <span>{isSelected ? '▲ COLLAPSE BATTLE RECORD' : '▼ EXPAND BATTLE RECORD'}</span>
                  </div>

                  {/* Inline Expanded Battle Record for Mobile */}
                  {isSelected && (
                    <div className="mobile-inline-boss-dossier show-on-mobile">
                      <div className="dossier-section">
                        <h4 className="dossier-label">// WHY THIS PROBLEM IS HARD</h4>
                        <p className="dossier-text">{boss.whyItMatters}</p>
                      </div>

                      <div className="dossier-section">
                        <h4 className="dossier-label">// SOLUTION STRATEGY</h4>
                        <p className="dossier-text highlight-strategy">{boss.solutionStrategy}</p>
                      </div>

                      {boss.evidenceText && (
                        <div className="dossier-section evidence-box">
                          <h4 className="dossier-label accent-text">// VERIFIED PROJECT EVIDENCE</h4>
                          <p className="evidence-quote">&ldquo;{boss.evidenceText}&rdquo;</p>
                          {boss.relatedProjectId && (
                            <a
                              href={`/work/${boss.relatedProjectId}`}
                              className="evidence-link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              INSPECT EVIDENCE IN {boss.relatedProjectName} &rarr;
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Detailed Battle Record Card (Desktop Only) */}
          <div className="boss-detail-dossier brutalist-box desktop-dossier">
            <div className="dossier-top-bar">
              <span className="dossier-tag">// BATTLE RECORD: {selectedBoss.code}</span>
              <span className="dossier-status">{selectedBoss.status}</span>
            </div>

            <h3 className="dossier-boss-name">{selectedBoss.name}</h3>
            <div className="dossier-category-pill">{selectedBoss.category}</div>

            <div className="dossier-section">
              <h4 className="dossier-label">// WHY THIS PROBLEM IS HARD</h4>
              <p className="dossier-text">{selectedBoss.whyItMatters}</p>
            </div>

            <div className="dossier-section">
              <h4 className="dossier-label">// SOLUTION STRATEGY</h4>
              <p className="dossier-text highlight-strategy">{selectedBoss.solutionStrategy}</p>
            </div>

            {selectedBoss.evidenceText && (
              <div className="dossier-section evidence-box">
                <h4 className="dossier-label accent-text">// VERIFIED PROJECT EVIDENCE</h4>
                <p className="evidence-quote">&ldquo;{selectedBoss.evidenceText}&rdquo;</p>
                {selectedBoss.relatedProjectId && (
                  <a
                    href={`/work/${selectedBoss.relatedProjectId}`}
                    className="evidence-link"
                  >
                    INSPECT EVIDENCE IN {selectedBoss.relatedProjectName} &rarr;
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene05Bosses;
