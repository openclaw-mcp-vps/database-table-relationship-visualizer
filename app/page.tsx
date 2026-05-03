export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Visualization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate ER diagrams<br />
          <span className="text-[#58a6ff]">from existing databases</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Connect to any SQL database via a secure connection string. ERDiagram analyzes your schemas and foreign keys, then renders interactive entity-relationship diagrams you can export or share.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">PostgreSQL · MySQL · SQLite · MSSQL supported</p>

        {/* Diagram preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {["users","orders","products","categories"].map((t) => (
              <div key={t} className="bg-[#0d1117] border border-[#58a6ff] rounded-lg px-4 py-3 min-w-[120px]">
                <p className="text-[#58a6ff] font-bold text-sm mb-2 uppercase">{t}</p>
                {t === "users" && <><p className="text-xs text-[#8b949e]">🔑 id</p><p className="text-xs text-[#c9d1d9]">email</p><p className="text-xs text-[#c9d1d9]">name</p></>}
                {t === "orders" && <><p className="text-xs text-[#8b949e]">🔑 id</p><p className="text-xs text-[#e3b341]">🔗 user_id</p><p className="text-xs text-[#c9d1d9]">total</p></>}
                {t === "products" && <><p className="text-xs text-[#8b949e]">🔑 id</p><p className="text-xs text-[#e3b341]">🔗 category_id</p><p className="text-xs text-[#c9d1d9]">price</p></>}
                {t === "categories" && <><p className="text-xs text-[#8b949e]">🔑 id</p><p className="text-xs text-[#c9d1d9]">name</p><p className="text-xs text-[#c9d1d9]">slug</p></>}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#8b949e] mt-4">Live interactive diagram — drag, zoom, export</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited database connections",
              "PostgreSQL, MySQL, SQLite, MSSQL",
              "Interactive drag-and-drop diagrams",
              "Export as PNG / SVG",
              "Shareable public diagram links",
              "Schema change history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Is my database connection string stored securely?</p>
            <p className="text-[#8b949e] text-sm">Connection strings are encrypted at rest using AES-256 and are never logged or exposed. You can delete them at any time from your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Which databases are supported?</p>
            <p className="text-[#8b949e] text-sm">PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server are fully supported. More adapters are added regularly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Can I share diagrams with my team?</p>
            <p className="text-[#8b949e] text-sm">Yes. Every diagram gets a unique public link you can share with anyone — no account required to view. You control access and can revoke links anytime.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ERDiagram. All rights reserved.
      </footer>
    </main>
  );
}
