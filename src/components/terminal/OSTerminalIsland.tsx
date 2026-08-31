import React, { useState, useRef, useEffect } from 'react';
import type {
  TerminalProjectData,
  TerminalResearchData,
  TerminalFailureData,
  TerminalExperienceData,
} from '@/data/terminalData';
import { SYSTEM_SKILLS_DATA, SYSTEM_CONTACT_DATA } from '@/data/terminalData';
import { trackEvent } from '@/lib/analytics';

interface Props {
  projects: TerminalProjectData[];
  research: TerminalResearchData[];
  failures: TerminalFailureData[];
  experience: TerminalExperienceData[];
}

interface CommandEntry {
  id: string;
  command: string;
  output: React.ReactNode;
  isError?: boolean;
}

const COMMAND_LIST = [
  'help',
  'projects',
  'systems',
  'experience',
  'research',
  'failures',
  'skills',
  'resume',
  'contact',
  'clear',
];

export default function OSTerminalIsland({
  projects = [],
  research = [],
  failures = [],
  experience = [],
}: Props) {
  const [history, setHistory] = useState<CommandEntry[]>([
    {
      id: 'welcome',
      command: 'sys.init',
      output: (
        <div className="term-welcome-msg">
          <div className="term-brand">PRAMAY TERMINAL [VERSION 2.4.0]</div>
          <div>PRIVATE ENGINEERING SYSTEM // TERMINAL INTERFACE</div>
          <div>Type <span className="term-cmd-highlight">help</span> to view available system commands.</div>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    trackEvent('terminal_opened');
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmitDirect = (cmdToRun: string) => {
    executeCommand(cmdToRun);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const executeCommand = (cmdStringToRun: string) => {
    const rawCmd = cmdStringToRun.trim();
    if (!rawCmd) return;

    trackEvent('terminal_command', { command: rawCmd });

    const lowerCmd = rawCmd.toLowerCase();
    const parts = rawCmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    let outputNode: React.ReactNode = null;
    let isErr = false;

    switch (mainCmd) {
      case 'clear':
        setHistory([]);
        setInputVal('');
        setCmdHistory((prev) => [rawCmd, ...prev]);
        setHistoryIdx(-1);
        return;

      case 'help':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// AVAILABLE SYSTEM COMMANDS</div>
            <table className="term-table">
              <tbody>
                <tr>
                  <td className="term-td-cmd">help</td>
                  <td>Display list of system CLI commands</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">projects</td>
                  <td>List declassified engineering mission dossiers</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">systems</td>
                  <td>Display 9-node architecture topology pipeline</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">experience</td>
                  <td>Display 5-level engineering evolution timeline</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">research</td>
                  <td>List whitepapers and investigation findings</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">failures</td>
                  <td>List incident post-mortems ("Failure is data")</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">skills</td>
                  <td>Display technical capabilities matrix</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">resume</td>
                  <td>Display engineering profile summary dossier</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">contact</td>
                  <td>Display system communication channels</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">ask &lt;query&gt;</td>
                  <td>Query the Ask AI grounding engine</td>
                </tr>
                <tr>
                  <td className="term-td-cmd">clear</td>
                  <td>Wipe terminal buffer screen</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// DECLASSIFIED ENGINEERING MISSIONS</div>
            <div className="term-list">
              {projects.map((p) => (
                <div key={p.id} className="term-list-item">
                  <div className="term-item-title">
                    <span>{p.title}</span> &bull; <span className="term-dim">{p.classification}</span> [{p.status}]
                  </div>
                  <div className="term-item-sub">{p.objective}</div>
                  <a href={`/projects/${p.id}`} className="term-link">
                    &rarr; VIEW MISSION DOSSIER (/projects/{p.id})
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'systems':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// SYSTEM ARCHITECTURE PIPELINE TOPOLOGY</div>
            <div className="term-code-block">
              USER &rarr; API GATEWAY &rarr; AI ORCHESTRATOR &rarr; [ RAG / AGENTS / TOOLS ] &rarr; DATABASE / MEMORY
            </div>
            <div className="term-item-sub">
              Interactive 2D visual canvas active at <a href="/systems" className="term-link">/systems</a>
            </div>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// CAPABILITY PROGRESSION TIMELINE</div>
            <div className="term-list">
              {experience.map((exp, idx) => (
                <div key={idx} className="term-list-item">
                  <div className="term-item-title">
                    <span className="term-cmd-highlight">{exp.level}</span> — {exp.title}
                  </div>
                  <div className="term-item-sub">{exp.summary}</div>
                </div>
              ))}
            </div>
            <a href="/experience" className="term-link">
              &rarr; VIEW FULL TIMELINE (/experience)
            </a>
          </div>
        );
        break;

      case 'research':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// DECLASSIFIED RESEARCH WHITEPAPERS</div>
            <div className="term-list">
              {research.map((r) => (
                <div key={r.id} className="term-list-item">
                  <div className="term-item-title">{r.title}</div>
                  <div className="term-item-sub">{r.hypothesis}</div>
                  <a href={`/research/${r.id}`} className="term-link">
                    &rarr; READ WHITEPAPER (/research/{r.id})
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'failures':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// INCIDENT POST-MORTEMS ("FAILURE IS DATA")</div>
            <div className="term-list">
              {failures.map((f) => (
                <div key={f.id} className="term-list-item">
                  <div className="term-item-title warning-text">{f.title} [{f.status}]</div>
                  <div className="term-item-sub">ROOT CAUSE: {f.cause}</div>
                  <a href={`/failures/${f.id}`} className="term-link warning-link">
                    &rarr; INSPECT INCIDENT REPORT (/failures/{f.id})
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// TECHNICAL CAPABILITIES MATRIX</div>
            <div className="term-skills-grid">
              {SYSTEM_SKILLS_DATA.map((s, idx) => (
                <div key={idx} className="term-skill-col">
                  <div className="term-cmd-highlight">// {s.category}</div>
                  <ul className="term-bullet-list">
                    {s.items.map((item, i2) => (
                      <li key={i2}>&bull; {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'resume':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// ENGINEERING PROFILE DOSSIER</div>
            <div>SUBJECT: PRAMAY USADADIYA</div>
            <div>ROLE: AI SOFTWARE ENGINEER (5 YEARS EXPERIENCE)</div>
            <div>SUMMARY: Full-stack AI Engineer building RAG architectures, AI agents, microservices, and cloud systems.</div>
            <div>EDUCATION: Bachelor's in Computer Applications (BCA), Veer Narmad South Gujarat University (2019 – 2022)</div>
            <div style={{ marginTop: '0.5rem' }}>// EXPERIENCE HISTORY:</div>
            <div>  &bull; My Juno Health — AI Software Engineer (06/2026 – Present)</div>
            <div>  &bull; Bacancy Technology — AI Software Engineer (01/2025 – 01/2026)</div>
            <div>  &bull; LogWinTech — Software Development Engineer (07/2022 – 12/2024)</div>
            <div>  &bull; Websolex Infotech — Software Development Engineer (07/2021 – 07/2022)</div>
            <div className="term-item-sub">
              To inspect complete capability records, type <span className="term-cmd-highlight">projects</span> or <span className="term-cmd-highlight">experience</span>.
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="term-output-block">
            <div className="term-output-head">// SYSTEM COMMUNICATION CHANNELS</div>
            <div>EMAIL: <a href={`mailto:${SYSTEM_CONTACT_DATA.email}`} className="term-link">{SYSTEM_CONTACT_DATA.email}</a></div>
            <div>PHONE: <span className="term-cmd-highlight">{SYSTEM_CONTACT_DATA.phone}</span></div>
            <div>LOCATION: <span className="term-cmd-highlight">{SYSTEM_CONTACT_DATA.location}</span></div>
            <div>GITHUB: <a href={SYSTEM_CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className="term-link">{SYSTEM_CONTACT_DATA.github}</a></div>
            <div>STATUS: {SYSTEM_CONTACT_DATA.status}</div>
          </div>
        );
        break;

      case 'ask':
        if (!args) {
          outputNode = (
            <div className="term-output-block warning-text">
              Usage: ask &lt;query&gt; (e.g. ask How does Juno Health prevent hallucinations?)
            </div>
          );
        } else {
          outputNode = (
            <div className="term-output-block">
              <div className="term-output-head">// ASK GROUNDED RAG ENGINE</div>
              <div>QUERY: "{args}"</div>
              <div className="term-item-sub">
                Grounded search active. Access interactive Ask RAG interface at <a href="/ask" className="term-link">/ask</a>
              </div>
            </div>
          );
        }
        break;

      default:
        isErr = true;
        outputNode = (
          <div className="term-output-block danger-text">
            Command not recognized: '{mainCmd}'. Type <span className="term-cmd-highlight">help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        command: rawCmd,
        output: outputNode,
        isError: isErr,
      },
    ]);

    setCmdHistory((prev) => [rawCmd, ...prev]);
    setHistoryIdx(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = COMMAND_LIST.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div className="term-island-wrapper brutalist-box" onClick={focusInput}>
      <div className="term-island-header">
        <span className="term-island-title">TERMINAL CLI // SESSION ACTIVE</span>
        <span className="term-island-badge">STATUS: ONLINE</span>
      </div>

      <div className="term-body">
        {history.map((entry) => (
          <div key={entry.id} className="term-entry">
            <div className="term-prompt-line">
              <span className="term-user-prompt">pramay@terminal:~$</span>
              <span className="term-cmd-text">{entry.command}</span>
            </div>
            <div className="term-output">{entry.output}</div>
          </div>
        ))}

        {/* Mobile Touch Command Helper Bar */}
        <div className="term-mobile-helpers">
          <button type="button" className="helper-cmd-btn" onClick={() => handleCommandSubmitDirect('help')}>
            [ help ]
          </button>
          <button type="button" className="helper-cmd-btn" onClick={() => handleCommandSubmitDirect('projects')}>
            [ projects ]
          </button>
          <button type="button" className="helper-cmd-btn" onClick={() => handleCommandSubmitDirect('systems')}>
            [ systems ]
          </button>
          <button type="button" className="helper-cmd-btn" onClick={() => handleCommandSubmitDirect('experience')}>
            [ experience ]
          </button>
          <button type="button" className="helper-cmd-btn" onClick={() => handleCommandSubmitDirect('clear')}>
            [ clear ]
          </button>
        </div>

        <form onSubmit={handleSubmit} className="term-input-form">
          <span className="term-user-prompt">pramay@terminal:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="term-input-field"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            aria-label="Terminal Command Input"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
