import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalTestimonials() {
  const scrollRef = useScrollReveal();

  const testimonials = [
    {
      quote:
        "Waithaka is a phenomenal developer. He doesn't just write code—he builds solutions. His attention to detail and ability to think through complex problems is exceptional.",
      author: "Sarah Chen",
      role: "Product Manager, Anthropic",
      initials: "SC",
    },
    {
      quote:
        "Working with Waithaka was a game-changer for our startup. He delivered feature after feature with impeccable code quality and zero technical debt. Highly recommend.",
      author: "Jordan Smith",
      role: "Founder, StartupXYZ",
      initials: "JS",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            What Others Say
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Testimonial
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Hear from the people I've worked with on meaningful projects.
          </p>
        </div>

        {/* Testimonials */}
        <div ref={scrollRef()} className="space-y-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all"
            >
              <p className="font-['Playfair_Display'] text-base sm:text-lg italic text-gray-900 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 font-bold text-orange-500">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
