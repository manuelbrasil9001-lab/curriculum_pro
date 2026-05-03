import { cvData } from "../data/cv-data";

export const ExperienceItem = ({ exp }: { exp: typeof cvData.experience[0] }) => (
  <div className="mb-6 break-inside-avoid">
    <div className="flex justify-between items-start mb-1">
      <div>
        <h3 className="font-bold text-slate-900 text-lg leading-tight">{exp.role}</h3>
        <p className="text-blue-700 font-semibold">{exp.company}</p>
      </div>
      <span className="text-sm font-bold text-slate-500 tabular-nums">
        {exp.period}
      </span>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed text-justify mt-2">
      {exp.description}
    </p>
  </div>
);
