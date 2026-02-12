import { useEffect, useRef } from 'react';
import { stats } from '../data';

export function CodingStats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current && gridRef.current.children.length === 0) {
      const totalCells = 52 * 7; // 52 weeks * 7 days
      for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        const level = Math.floor(Math.random() * 5);
        cell.className = `aspect-square rounded-[2px] border border-[#1a1f2e] ${getLevelColor(level)}`;
        gridRef.current.appendChild(cell);
      }
    }
  }, []);

  return (
    <section className="bg-black text-white py-20 px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        CODING_<span className="text-green">STATS</span>
      </h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Contribution graph - full width */}
        <div className="col-span-1 md:col-span-2 bg-[#1a1a1a] border-2 border-gray-700 p-6">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              <div className="w-4 h-4 bg-yellow"></div>
              GITHUB CONTRIBUTIONS
            </div>
            <div className="text-[11px] text-gray-400">
              {stats.contributions.toLocaleString()} contributions in the last year
            </div>
          </div>

          {/* Month labels */}
          <div className="flex justify-between text-[10px] text-gray-500 mb-1.5">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
              (month) => (
                <span key={month}>{month}</span>
              )
            )}
          </div>

          {/* Contribution grid */}
          <div
            ref={gridRef}
            className="grid gap-[3px]"
            style={{ gridTemplateColumns: 'repeat(52, 1fr)' }}
          ></div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-2.5">
            <span className="mr-1">Less</span>
            <div className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(0)}`}></div>
            <div className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(1)}`}></div>
            <div className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(2)}`}></div>
            <div className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(3)}`}></div>
            <div className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(4)}`}></div>
            <span>More</span>
          </div>
        </div>

        {/* GitHub stats card */}
        <StatCard
          icon
          title="GITHUB"
          subtitle="LAST COMMIT"
          value={stats.contributions.toLocaleString()}
          details={[
            { label: 'Contributions', value: '+247' },
            { label: 'Repositories', value: stats.repositories.toString() },
            { label: 'Streak', value: `${stats.streak} days` },
          ]}
        />

        {/* WakaTime card */}
        <StatCard
          icon
          title="arham45.exe"
          subtitle="WAKATIME"
          value={`${stats.wakatimeHours} hrs`}
          details={[
            { label: 'Daily', value: stats.dailyAverage },
            { label: 'Lang', value: stats.topLanguage },
            { label: 'Total', value: `${stats.wakatimeHours} hours` },
          ]}
        />
      </div>
    </section>
  );
}

function getLevelColor(level: number): string {
  const colors: Record<number, string> = {
    0: 'bg-[#0e1117]',
    1: 'bg-[#0e4429]',
    2: 'bg-[#006d32]',
    3: 'bg-[#26a641]',
    4: 'bg-[#39d353]',
  };
  return colors[level] || colors[0];
}

interface StatCardProps {
  icon?: boolean;
  title: string;
  subtitle: string;
  value: string;
  details: { label: string; value: string }[];
}

function StatCard({ icon, title, subtitle, value, details }: StatCardProps) {
  return (
    <div className="bg-[#1a1a1a] border-2 border-gray-700 p-6">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2 text-[13px] font-semibold">
          {icon && <div className="w-4 h-4 bg-yellow"></div>}
          {title}
        </div>
        <div className="text-[11px] text-gray-400">{subtitle}</div>
      </div>
      <div className="text-[32px] font-extrabold mb-4">{value}</div>
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-xs text-gray-400 mb-2"
        >
          <span className="text-gray-300">{detail.label}</span>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
}
