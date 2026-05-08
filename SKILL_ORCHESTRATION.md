# Skill Orchestration Guide
## Purpose
Route user queries to the most relevant globally installed skill from the verified available set. This guide ensures consistent, efficient skill invocation based on user intent.

## Available Skills (Verified)
All skills listed below are confirmed installed globally, with exact names (matching `available_skills` list):
- `app-store-screenshots` → `file:///Users/ankityadav/.agents/skills/app-store-screenshots/SKILL.md`
- `autoplan` → `file:///Users/ankityadav/.agents/skills/gstack/autoplan/SKILL.md`
- `benchmark` → `file:///Users/ankityadav/.agents/skills/gstack/benchmark/SKILL.md`
- `browse` → `file:///Users/ankityadav/.agents/skills/gstack/browse/SKILL.md`
- `canary` → `file:///Users/ankityadav/.agents/skills/gstack/canary/SKILL.md`
- `careful` → `file:///Users/ankityadav/.agents/skills/gstack/careful/SKILL.md`
- `checkpoint` → `file:///Users/ankityadav/.agents/skills/gstack/checkpoint/SKILL.md`
- `codex` → `file:///Users/ankityadav/.agents/skills/gstack/codex/SKILL.md`
- `cso` → `file:///Users/ankityadav/.agents/skills/gstack/cso/SKILL.md`
- `defuddle` → `file:///Users/ankityadav/.opencode/skills/obsidian-skills/skills/defuddle/SKILL.md`
- `design-consultation` → `file:///Users/ankityadav/.agents/skills/gstack/design-consultation/SKILL.md`
- `design-html` → `file:///Users/ankityadav/.agents/skills/gstack/design-html/SKILL.md`
- `design-review` → `file:///Users/ankityadav/.agents/skills/gstack/design-review/SKILL.md`
- `design-shotgun` → `file:///Users/ankityadav/.agents/skills/gstack/design-shotgun/SKILL.md`
- `devex-review` → `file:///Users/ankityadav/.agents/skills/gstack/devex-review/SKILL.md`
- `document-release` → `file:///Users/ankityadav/.agents/skills/gstack/document-release/SKILL.md`
- `emil-design-eng` → `file:///Users/ankityadav/.agents/skills/emil-design-eng/SKILL.md`
- `freeze` → `file:///Users/ankityadav/.agents/skills/gstack/freeze/SKILL.md`
- `gstack` → `file:///Users/ankityadav/.agents/skills/gstack/SKILL.md`
- `gstack-openclaw-ceo-review` → `file:///Users/ankityadav/.claude/skills/gstack/openclaw/skills/gstack-openclaw-ceo-review/SKILL.md`
- `gstack-openclaw-investigate` → `file:///Users/ankityadav/.claude/skills/gstack/openclaw/skills/gstack-openclaw-investigate/SKILL.md`
- `gstack-openclaw-office-hours` → `file:///Users/ankityadav/.claude/skills/gstack/openclaw/skills/gstack-openclaw-office-hours/SKILL.md`
- `gstack-openclaw-retro` → `file:///Users/ankityadav/.claude/skills/gstack/openclaw/skills/gstack-openclaw-retro/SKILL.md`
- `gstack-upgrade` → `file:///Users/ankityadav/.agents/skills/gstack/gstack-upgrade/SKILL.md`
- `guard` → `file:///Users/ankityadav/.agents/skills/gstack/guard/SKILL.md`
- `health` → `file:///Users/ankityadav/.agents/skills/gstack/health/SKILL.md`
- `investigate` → `file:///Users/ankityadav/.agents/skills/gstack/investigate/SKILL.md`
- `json-canvas` → `file:///Users/ankityadav/.opencode/skills/obsidian-skills/skills/json-canvas/SKILL.md`
- `land-and-deploy` → `file:///Users/ankityadav/.agents/skills/gstack/land-and-deploy/SKILL.md`
- `learn` → `file:///Users/ankityadav/.agents/skills/gstack/learn/SKILL.md`
- `obsidian-bases` → `file:///Users/ankityadav/.opencode/skills/obsidian-skills/skills/obsidian-bases/SKILL.md`
- `obsidian-cli` → `file:///Users/ankityadav/.opencode/skills/obsidian-skills/skills/obsidian-cli/SKILL.md`
- `obsidian-markdown` → `file:///Users/ankityadav/.opencode/skills/obsidian-skills/skills/obsidian-markdown/SKILL.md`
- `office-hours` → `file:///Users/ankityadav/.agents/skills/gstack/office-hours/SKILL.md`
- `open-gstack-browser` → `file:///Users/ankityadav/.agents/skills/gstack/connect-chrome/SKILL.md`
- `pair-agent` → `file:///Users/ankityadav/.agents/skills/gstack/pair-agent/SKILL.md`
- `plan-ceo-review` → `file:///Users/ankityadav/.agents/skills/gstack/plan-ceo-review/SKILL.md`
- `plan-design-review` → `file:///Users/ankityadav/.agents/skills/gstack/plan-design-review/SKILL.md`
- `plan-devex-review` → `file:///Users/ankityadav/.agents/skills/gstack/plan-devex-review/SKILL.md`
- `plan-eng-review` → `file:///Users/ankityadav/.agents/skills/gstack/plan-eng-review/SKILL.md`
- `qa` → `file:///Users/ankityadav/.agents/skills/gstack/qa/SKILL.md`
- `qa-only` → `file:///Users/ankityadav/.agents/skills/gstack/qa-only/SKILL.md`
- `retro` → `file:///Users/ankityadav/.agents/skills/gstack/retro/SKILL.md`
- `review` → `file:///Users/ankityadav/.agents/skills/gstack/review/SKILL.md`
- `setup-browser-cookies` → `file:///Users/ankityadav/.agents/skills/gstack/setup-browser-cookies/SKILL.md`
- `setup-deploy` → `file:///Users/ankityadav/.agents/skills/gstack/setup-deploy/SKILL.md`
- `ship` → `file:///Users/ankityadav/.agents/skills/gstack/ship/SKILL.md`
- `unfreeze` → `file:///Users/ankityadav/.agents/skills/gstack/unfreeze/SKILL.md`

*Note: The `superpowers` skill was not found in the available set.*

## Intent-to-Skill Routing Table
Match user query keywords to the exact skill name to load via the `skill` tool:

| User Intent Keywords | Exact Skill Name |
|-----------------------|-------------------|
| app store, screenshots, marketing assets, html-to-image | `app-store-screenshots` |
| auto review, autoplan, run all reviews, review plan automatically | `autoplan` |
| performance, benchmark, page speed, lighthouse, web vitals | `benchmark` |
| open browser, test site, take screenshot, dogfood, QA test | `browse` |
| post-deploy monitor, canary, watch production | `canary` |
| safety, careful mode, destructive command warning | `careful` |
| save progress, checkpoint, resume work | `checkpoint` |
| codex review, second opinion, consult codex | `codex` |
| security audit, threat model, OWASP, CSO review | `cso` |
| extract markdown from URL, defuddle, clean web content | `defuddle` |
| design system, brand guidelines, create DESIGN.md | `design-consultation` |
| finalize design, turn to HTML, implement design | `design-html` |
| audit design, visual QA, design polish | `design-review` |
| explore designs, design variants, visual brainstorm | `design-shotgun` |
| DX audit, developer experience test, onboarding test | `devex-review` |
| post-ship docs, update docs, sync documentation | `document-release` |
| Emil Kowalski, UI polish, component design | `emil-design-eng` |
| restrict edits, freeze directory, lock edits | `freeze` |
| gstack, headless browser, QA testing | `gstack` |
| CEO review, think bigger, expand scope, strategy review | `gstack-openclaw-ceo-review` |
| debug, root cause analysis, investigate error | `gstack-openclaw-investigate` |
| brainstorm, office hours, idea validation | `gstack-openclaw-office-hours` |
| weekly retro, what shipped, engineering retrospective | `gstack-openclaw-retro` |
| upgrade gstack, update gstack | `gstack-upgrade` |
| full safety, guard mode, maximum safety | `guard` |
| health check, code quality, run all checks | `health` |
| debug, fix bug, why broken, root cause | `investigate` |
| json canvas, .canvas files, mind maps | `json-canvas` |
| land and deploy, merge, deploy to production | `land-and-deploy` |
| learn, show learnings, prune learnings | `learn` |
| obsidian bases, .base files, note views | `obsidian-bases` |
| obsidian cli, vault management, note search | `obsidian-cli` |
| obsidian markdown, wikilinks, callouts | `obsidian-markdown` |
| office hours, brainstorm, idea validation | `office-hours` |
| open gstack browser, launch chrome, control browser | `open-gstack-browser` |
| pair agent, share browser, remote agent access | `pair-agent` |
| plan CEO review, think bigger, scope expansion | `plan-ceo-review` |
| plan design review, design critique | `plan-design-review` |
| plan DX review, developer experience audit | `plan-devex-review` |
| plan eng review, architecture review, lock in plan | `plan-eng-review` |
| QA, test site, fix bugs, test and fix | `qa` |
| QA report only, bug report, no fixes | `qa-only` |
| weekly retro, engineering retrospective | `retro` |
| PR review, code review, pre-landing review | `review` |
| import cookies, login, authenticate browser | `setup-browser-cookies` |
| setup deploy, configure deployment | `setup-deploy` |
| ship, deploy, create PR, push to main | `ship` |
| unfreeze, unlock edits, allow all edits | `unfreeze` |

## Usage Rules
1. Load the exact skill name from the table using the `skill` tool for matching queries
2. For multi-domain queries (product + design + eng), use `autoplan` as primary orchestrator
3. If no exact match, use `Task` tool with `explore` subagent to gather context first
4. Never load skills not listed in the Available Skills section