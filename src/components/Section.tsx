import React from 'react';

export const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-8 print:mb-5">
    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-900 mb-4 pb-1 uppercase tracking-widest">
      {title}
    </h2>
    <div className="px-1 text-slate-700">
      {children}
    </div>
  </section>
);
