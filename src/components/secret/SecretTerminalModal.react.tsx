import React, { useState, useEffect } from 'react';
import OSTerminalIsland from '../terminal/OSTerminalIsland';
import { TERMINAL_PROJECTS, TERMINAL_RESEARCH, TERMINAL_FAILURES, TERMINAL_EXPERIENCE } from '@/data/terminalData';

export const SecretTerminalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="secret-terminal-overlay" onClick={() => setIsOpen(false)}>
      <div className="secret-terminal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar">
          <span className="modal-title">// SECRET TERMINAL DRAWER [CMD + K]</span>
          <button type="button" className="close-btn" onClick={() => setIsOpen(false)}>
            [ ESC / CLOSE &times; ]
          </button>
        </div>

        <div className="modal-terminal-container">
          <OSTerminalIsland
            projects={TERMINAL_PROJECTS}
            research={TERMINAL_RESEARCH}
            failures={TERMINAL_FAILURES}
            experience={TERMINAL_EXPERIENCE}
          />
        </div>
      </div>
    </div>
  );
};

export default SecretTerminalModal;
