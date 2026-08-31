import React, { useState } from 'react';
import { SYSTEM_NODES } from '../../data/systems';
import type { SystemNode } from '../../data/systems';

export const Scene03SystemWorld: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SystemNode>(SYSTEM_NODES[2]); // Default to Orchestrator

  return (
    <section className="scene-system-world" id="scene-system-world">
      <div className="system-world-inner">
        {/* Scene Header */}
        <div className="world-header">
          <div className="scene-tag">02 // SYSTEM ARCHITECTURE TOPOLOGY</div>
          <h2 className="world-title">HOW I THINK ABOUT SYSTEMS</h2>
          <p className="world-subtitle">
            An interactive topology of AI orchestrations, agentic reasoning loops, grounded RAG pipelines, and resilience boundaries. Click any node to inspect engineering trade-offs.
          </p>
        </div>

        {/* 2-Column Grid on Desktop (7fr 5fr Side-by-Side), Accordion Flow on Mobile */}
        <div className="topology-grid-layout">
          {/* Mobile Architecture Pipeline Flow with Accordion Expanding Inline Details (rendered <= 768px) */}
          <div className="mobile-topology-container">
            <div className="mobile-flow-header">
              <span className="mobile-flow-title">// 9-NODE PIPELINE STAGES</span>
              <span className="mobile-flow-hint">TAP ANY STAGE TO EXPAND DETAILS &darr;</span>
            </div>

            <div className="mobile-nodes-flow">
              {SYSTEM_NODES.map((node, index) => {
                const isSelected = selectedNode.id === node.id;

                return (
                  <React.Fragment key={node.id}>
                    <div
                      className={`mobile-flow-card brutalist-box ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedNode(node)}
                    >
                      <div className="mobile-card-header">
                        <div className="mobile-card-top">
                          <span className="mobile-node-code">{node.code}</span>
                          <span className="mobile-node-cat">{node.category}</span>
                        </div>
                        <h3 className="mobile-node-title">{node.label}</h3>
                        <p className="mobile-node-tagline">{node.tagline}</p>

                        <div className="expand-toggle-indicator">
                          <span>{isSelected ? '▲ COLLAPSE DETAILS' : '▼ EXPAND ARCHITECTURE DETAILS'}</span>
                        </div>
                      </div>

                      {/* Accordion Inline Expanded Inspector for Mobile */}
                      {isSelected && (
                        <div className="mobile-expanded-inspector">
                          <div className="inspector-detail-block">
                            <h4 className="detail-heading">WHAT IT DOES</h4>
                            <p className="detail-text">{node.whatItDoes}</p>
                          </div>

                          <div className="inspector-detail-block">
                            <h4 className="detail-heading">WHY IT EXISTS</h4>
                            <p className="detail-text">{node.whyItExists}</p>
                          </div>

                          <div className="inspector-detail-block highlight-block">
                            <h4 className="detail-heading accent-text">ENGINEERING PROBLEM SOLVED</h4>
                            <p className="detail-text">{node.engineeringProblem}</p>
                          </div>

                          {node.targets.length > 0 && (
                            <div className="target-nodes-list">
                              <span className="target-label">DISPATCHES TO:</span>
                              {node.targets.map((t) => (
                                <span key={t} className="target-chip">
                                  {t.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Flow Arrow connecting stages */}
                    {index < SYSTEM_NODES.length - 1 && (
                      <div className="mobile-flow-arrow">
                        <span>&darr;</span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* SVG Canvas Container (7fr on Desktop, hidden on Mobile) */}
          <div className="svg-canvas-box brutalist-box desktop-canvas">
            <div className="canvas-header-bar">
              <span className="bar-title">SYSTEM_TOPOLOGY_MAP.SVG</span>
              <span className="bar-status">ACTIVE DATA FLOW</span>
            </div>

            <div className="svg-scroll-wrapper">
              <svg viewBox="0 0 800 580" className="topology-svg">
                <defs>
                  <pattern id="world-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(17, 17, 17, 0.05)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#world-grid)" />

                {/* Connecting Edges with Animated Pulsing Data Nodes */}
                {SYSTEM_NODES.map((node) => {
                  return node.targets.map((targetId) => {
                    const targetNode = SYSTEM_NODES.find((n) => n.id === targetId);
                    if (!targetNode) return null;

                    const edgeId = `${node.id}-${targetNode.id}`;
                    const pathD = `M ${node.x} ${node.y + 20} L ${targetNode.x} ${targetNode.y - 20}`;
                    const isHighlighted = selectedNode.id === node.id || selectedNode.id === targetNode.id;

                    return (
                      <g key={edgeId} className="svg-edge-group">
                        <line
                          x1={node.x}
                          y1={node.y + 20}
                          x2={targetNode.x}
                          y2={targetNode.y - 20}
                          stroke={isHighlighted ? '#0047AB' : '#E5E2DC'}
                          strokeWidth={isHighlighted ? 2 : 1}
                          strokeDasharray="4 4"
                        />
                        <circle r={isHighlighted ? '4' : '3'} fill="#0047AB">
                          <animateMotion path={pathD} dur="2.5s" repeatCount="indefinite" />
                        </circle>
                      </g>
                    );
                  });
                })}

                {/* Nodes */}
                {SYSTEM_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const boxWidth = 160;
                  const boxHeight = 44;

                  return (
                    <g
                      key={node.id}
                      className={`svg-node-group ${isSelected ? 'is-selected' : ''}`}
                      transform={`translate(${node.x - boxWidth / 2}, ${node.y - boxHeight / 2})`}
                      onClick={() => setSelectedNode(node)}
                      style={{ cursor: 'pointer' }}
                    >
                      <rect
                        width={boxWidth}
                        height={boxHeight}
                        fill={isSelected ? '#FFFFFF' : '#F3F0E8'}
                        stroke={isSelected ? '#0047AB' : '#111111'}
                        strokeWidth={isSelected ? 2 : 1}
                      />

                      <text
                        x="10"
                        y="16"
                        fill={isSelected ? '#0047AB' : '#555550'}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {node.code}
                      </text>

                      <text
                        x="10"
                        y="32"
                        fill="#111111"
                        fontSize="10"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                      >
                        {node.label.length > 20 ? `${node.label.slice(0, 18)}..` : node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Desktop Node Inspector Drawer (5fr Side-by-Side on Desktop, hidden on Mobile) */}
          <div className="node-inspector-box brutalist-box desktop-inspector">
            <div className="inspector-header">
              <span className="inspector-tag">NODE INSPECTOR</span>
              <span className="node-code-badge">{selectedNode.code}</span>
            </div>

            <h3 className="inspector-title">{selectedNode.label}</h3>
            <div className="category-pill">{selectedNode.category}</div>

            <p className="inspector-tagline">{selectedNode.tagline}</p>

            <div className="inspector-detail-block">
              <h4 className="detail-heading">WHAT IT DOES</h4>
              <p className="detail-text">{selectedNode.whatItDoes}</p>
            </div>

            <div className="inspector-detail-block">
              <h4 className="detail-heading">WHY IT EXISTS</h4>
              <p className="detail-text">{selectedNode.whyItExists}</p>
            </div>

            <div className="inspector-detail-block highlight-block">
              <h4 className="detail-heading accent-text">ENGINEERING PROBLEM SOLVED</h4>
              <p className="detail-text">{selectedNode.engineeringProblem}</p>
            </div>

            {selectedNode.targets.length > 0 && (
              <div className="target-nodes-list">
                <span className="target-label">DISPATCHES TO:</span>
                {selectedNode.targets.map((t) => (
                  <span key={t} className="target-chip">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene03SystemWorld;
