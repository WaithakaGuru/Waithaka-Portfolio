import { techStack } from "../data";

export function TechStack() {
  return (
    <section id="stack" className="bg-black text-white py-20 px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-16">
        TECH_<span className="text-green">STACK</span>
      </h2>

      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <TechCategory title="FRONTEND" items={techStack.frontend} />
        <TechCategory title="BACKEND" items={techStack.backend} />
        <TechCategory title="DATABASE" items={techStack.database} />
        <TechCategory title="CI/CD & TESTING" items={techStack.devops} />
      </div>
    </section>
  );
}

function TechCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/5 border-2 border-gray-700 p-8">
      <h3 className="text-yellow text-base font-extrabold mb-5 tracking-wider">
        {title}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="bg-white text-black border-2 border-white py-3 px-5 text-center font-semibold text-[13px] transition-all hover:bg-yellow hover:-translate-y-1 cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
