import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNodedotjs,
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTensorflow,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPhp,
  SiVuedotjs,
  SiFirebase,
  SiStripe,
  SiOpenaigym as SiOpenai,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

interface TechIconConfig {
  icon: React.ReactNode;
  color: string;
}

export const techIconMap: Record<string, TechIconConfig> = {
  REACT: { icon: <SiReact />, color: "#61DAFB" },
  "NEXT.JS": { icon: <SiNextdotjs />, color: "#000000" },
  PYTHON: { icon: <SiPython />, color: "#3776AB" },
  JAVASCRIPT: { icon: <SiJavascript />, color: "#F7DF1E" },
  TYPESCRIPT: { icon: <SiTypescript />, color: "#3178C6" },
  GOLANG: { icon: <SiGo />, color: "#00ADD8" },
  GO: { icon: <SiGo />, color: "#00ADD8" },
  "NODE.JS": { icon: <SiNodedotjs />, color: "#339933" },
  DJANGO: { icon: <SiDjango />, color: "#092E20" },
  TAILWIND: { icon: <SiTailwindcss />, color: "#06B6D4" },
  MYSQL: { icon: <SiMysql />, color: "#4479A1" },
  POSTGRES: { icon: <SiPostgresql />, color: "#336791" },
  POSTGRESQL: { icon: <SiPostgresql />, color: "#336791" },
  MONGODB: { icon: <SiMongodb />, color: "#13AA52" },
  PRISMA: { icon: <SiPrisma />, color: "#2D3748" },
  TENSORFLOW: { icon: <SiTensorflow />, color: "#FF6F00" },
  HTML5: { icon: <SiHtml5 />, color: "#E34C26" },
  GIT: { icon: <SiGit />, color: "#F1502F" },
  GITHUB: { icon: <SiGithub />, color: "#181717" },
  PHP: { icon: <SiPhp />, color: "#777BB4" },
  "VUE.JS": { icon: <SiVuedotjs />, color: "#4FC08D" },
  FIREBASE: { icon: <SiFirebase />, color: "#FFCA28" },
  STRIPE: { icon: <SiStripe />, color: "#005EB8" },
  OPENAI: { icon: <SiOpenai />, color: "#10A37F" },
  DOCKER: { icon: <SiDocker />, color: "#2496ED" },
  KUBERNETES: { icon: <SiKubernetes />, color: "#326CE5" },
};

export function getTechIcon(techName: string) {
  const tech = techName.toUpperCase();
  return techIconMap[tech] || null;
}

export function renderTechWithIcon(techName: string, size: number = 24) {
  const config = getTechIcon(techName);
  if (!config) return techName;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: `${size}px`,
      }}
    >
      <div
        style={{
          fontSize: `${size}px`,
          display: "flex",
          alignItems: "center",
          color: config.color,
        }}
      >
        {config.icon}
      </div>
      <span>{techName}</span>
    </div>
  );
}
