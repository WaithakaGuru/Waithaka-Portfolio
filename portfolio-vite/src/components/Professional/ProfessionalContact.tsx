import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const scrollRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    const original = btn.textContent;
    btn.textContent = "Message sent! ✓";
    setTimeout(() => {
      btn.textContent = original;
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: "waithakaoffices@gmail.com",
      href: "mailto:waithakaoffices@gmail.com",
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "@waithaka",
      href: "https://linkedin.com/in/waithaka",
    },
    {
      icon: "𝕏",
      label: "Twitter",
      value: "@waithaka",
      href: "https://twitter.com/waithaka",
    },
    {
      icon: "⌨",
      label: "GitHub",
      value: "@waithaka",
      href: "https://github.com/waithaka",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Get in Touch
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Have a project in mind? Let's chat about how I can help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Links */}
          <div ref={scrollRef(0)}>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-gray-900 mb-8 animate-fade-in-left">
              Let's connect and create something awesome.
            </h3>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  ref={scrollRef(i)}
                  href={link.href}
                  className="flex items-center gap-3 py-3 border-b border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 group hover-lift"
                >
                  <span className="text-lg text-gray-500 group-hover:text-orange-500 animate-bounce-in">
                    {link.icon}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-orange-500">
                      {link.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-orange-500">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl border border-gray-200 animate-fade-in-right hover:border-orange-500 transition-all duration-300"
          >
            <h3 className="text-base font-bold mb-6 text-gray-900">
              Send me a message
            </h3>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wide block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wide block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-wide block mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-wide block mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell me more..."
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm resize-none text-gray-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-full font-bold text-sm tracking-wide hover:bg-orange-600 transition-colors"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
