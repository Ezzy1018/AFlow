"use client";

import { Suspense } from "react";
import AuditPreviewContent from "./content";

// Mark this page as dynamic to prevent static prerendering
export const dynamic = 'force-dynamic';

export default function AuditPreviewPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading audit...</div>}>
      <AuditPreviewContent />
    </Suspense>
  );
}
