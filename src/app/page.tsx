"use client";
import { cvData } from "@/data/cv-data";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-8 border-b border-gray-100 pb-4">
    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{title}</h2>
    {children}
  </section>
);

export default function CVPage() {
  return (
    <div className="bg-slate-100 min-h-screen p-4 md:p-12 font-sans text-slate-800">
      <main className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Columna Izquierda - Perfil */}
        <div className="w-full md:w-1/3 bg-slate-900 text-white p-8">
          <h1 className="text-4xl font-black mb-2 uppercase leading-none">{cvData.name}</h1>
          <p className="text-blue-400 font-bold mb-8 uppercase text-xs tracking-tighter">{cvData.role}</p>
          
          <div className="space-y-4 text-sm text-slate-300">
            <p>📍 {cvData.contact.location}</p>
            <p>📧 {cvData.contact.email}</p>
            <p>🔗 {cvData.contact.linkedin}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-800 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map(s => (
                <span key={s} className="bg-slate-800 text-[10px] px-2 py-1 rounded border border-slate-700">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna Derecha - Contenido */}
        <div className="w-full md:w-2/3 p-12 bg-white">
          <Section title="Resumen">
            <p className="text-slate-600 italic leading-relaxed">{cvData.summary}</p>
          </Section>

          <Section title="Experiencia">
            {cvData.experience.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-bold text-slate-400 tabular-nums">{exp.period}</span>
                </div>
                <p className="text-blue-600 text-sm font-medium mb-2">{exp.company}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </Section>

          <button 
            onClick={() => window.print()}
            className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors print:hidden shadow-lg shadow-blue-200"
          >
            🖨️ Descargar PDF
          </button>
        </div>
      </main>
    </div>
  );
}
