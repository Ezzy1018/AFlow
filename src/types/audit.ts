export type AuditScore = {
  overall: number;
  clarity: number;
  trust: number;
  friction: number;
};

export type AuditIssue = {
  id: string;
  title: string;
  summary: string;
  severity: "low" | "medium" | "high";
  recommendation: string;
};

export type AuditReport = {
  url: string;
  auditedAt: string;
  score: AuditScore;
  issues: AuditIssue[];
  highlights: string[];
};
