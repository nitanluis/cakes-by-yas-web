import axe from 'axe-core';
// Opt-in local QA only. CUA operates the visible control and reads this DOM report.
function addAuditControl(target: HTMLElement) {
  const button = document.createElement('button');
  button.type = 'button'; button.textContent = 'Audit this view';
  button.className = 'audit-control';
  target.append(button);
  button.addEventListener('click', async () => {
  button.disabled = true;
  try {
    const results = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
    let output = document.getElementById('a11y-report');
    if (!output) { output = document.createElement('script'); output.id = 'a11y-report'; output.setAttribute('type', 'application/json'); document.body.append(output); }
    output.textContent = JSON.stringify({ url: location.href, date: new Date().toISOString(), violations: results.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), incomplete: results.incomplete.map(v => v.id), passes: results.passes.length });
    button.textContent = `Audit: ${results.violations.length} violations`;
  } finally { button.disabled = false; }
  });
}
addAuditControl(document.body);
// Native modal dialogs make background controls inert; keep their audit action inside the top layer.
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(addAuditControl);
