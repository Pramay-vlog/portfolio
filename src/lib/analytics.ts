/**
 * Lightweight Privacy-First Telemetry Engine
 * Tracks system interaction events without collecting PII or introducing heavy dependencies.
 */

export type AnalyticsEventType =
  | 'boot_completed'
  | 'system_entered'
  | 'systems_opened'
  | 'project_opened'
  | 'experiment_opened'
  | 'failure_opened'
  | 'terminal_opened'
  | 'terminal_command'
  | 'ask_query'
  | 'ask_answered'
  | 'ask_abstained'
  | 'resume_opened'
  | 'contact_clicked';

export interface AnalyticsEventPayload {
  event: AnalyticsEventType;
  timestamp: number;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Dispatch an analytics interaction event asynchronously.
 */
export function trackEvent(
  event: AnalyticsEventType,
  properties?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  const payload: AnalyticsEventPayload = {
    event,
    timestamp: Date.now(),
    properties,
  };

  // Dispatch custom browser event for decoupled listener integrations
  window.dispatchEvent(
    new CustomEvent('pramayos:telemetry', {
      detail: payload,
    })
  );

  // Development logger output
  if (import.meta.env.DEV) {
    console.log(`[TELEMETRY]`, payload.event, payload.properties || '');
  }
}
