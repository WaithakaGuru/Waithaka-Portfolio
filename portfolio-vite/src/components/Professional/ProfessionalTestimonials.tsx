import { useScrollReveal } from "../../hooks/useScrollReveal";
import { userReports } from "../../data";

export function ProfessionalTestimonials() {
  const scrollRef = useScrollReveal();

  return (
    <section
      className="py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#f5f5f5" }}
    >
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
          {userReports.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="p-8 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all"
            >
              <p className="font-['Playfair_Display'] text-base sm:text-lg italic text-gray-900 leading-relaxed mb-8">
                "{testimonial.report}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 font-bold"
                  style={{ borderColor: `var(--${testimonial.color}, #999)` }}
                >
                  <span style={{ color: `var(--${testimonial.color}, #999)` }}>
                    {testimonial.from.charAt(0)}
                    {testimonial.from.charAt(testimonial.from.length - 1)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">
                    {testimonial.from}
                  </div>
                  <div className="text-xs text-gray-600">{testimonial.log}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
