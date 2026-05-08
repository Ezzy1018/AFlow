export type AuditCategory =
  | "copy"
  | "trust"
  | "cta"
  | "visuals"
  | "ux"
  | "seo";

export type AuditSeverity = "critical" | "major" | "minor";

export type AuditCategoryScore = {
  category: AuditCategory;
  score: number;
  label: string;
};

export type AuditIssue = {
  id: string;
  category: AuditCategory;
  severity: AuditSeverity;
  title: string;
  description: string;
  recommendation: string;
  rewriteBefore?: string;
  rewriteAfter?: string;
  priorityRank: number;
  screenshotAnnotation?: { x: number; y: number; width: number; height: number };
};

export type AuditScore = {
  overall: number;
  categories: AuditCategoryScore[];
};

export type AuditReport = {
  id: string;
  url: string;
  auditedAt: string;
  score: AuditScore;
  issues: AuditIssue[];
  highlights: string[];
  screenshotUrl?: string;
  status: "pending" | "scanning" | "analyzing" | "done" | "failed";
};
