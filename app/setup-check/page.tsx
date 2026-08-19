'use client';

import { useEffect, useState } from 'react';

export default function SetupCheckPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    fetch('/api/setup-check')
      .then((r) => r.json())
      .then(setResult)
      .catch((e) => setResult({ ready: false, error: e.message }));
  }, []);

  return (
    <main className="shell">
      <div className="brand">SOLOSALON · SETUP CHECK</div>
      <div className="card" style={{ marginTop: 24 }}>
        <h1 style={{ fontSize: 42 }}>Installation check</h1>
        <p className="muted">This page checks the most common setup problems.</p>

        {!result && <p>Checking…</p>}
        {result?.error && <div className="notice">{result.error}</div>}

        {result?.checks && (
          <div style={{ marginTop: 18 }}>
            {Object.entries(result.checks).map(([key, value]: any) => (
              <div
                className="between"
                style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}
                key={key}
              >
                <span>{value.message}</span>
                <b>{value.ok ? '✓' : '✕'}</b>
              </div>
            ))}
          </div>
        )}

        {result && (
          <div className={result.ready ? 'successnote' : 'notice'} style={{ marginTop: 18 }}>
            {result.ready ? 'SoloSalon is ready to use.' : 'One or more setup items still need attention.'}
          </div>
        )}
      </div>
    </main>
  );
}
