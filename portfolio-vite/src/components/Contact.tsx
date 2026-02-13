import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-3 sm:px-10 bg-transparent">
      <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-4 ml-10">
        GET_IN_<span className="text-green">TOUCH</span>
      </h2>
      <p className="text-left text-xl text-gray-600 mb-12 w-full ml-10 wrap-break-word">
        Have a project in mind? Let's work together to create something amazing.
      </p>

      <div
        className="bg-white max-w-fit mx-auto w-260 shadow-[8px_8px_0_var(--color-black)]
      grid grid-cols-1 md:grid-cols-5 gap-8 border-4 border-black p-2 relative"
      >
        {/* Start a project 'banner' */}
        <div
          className="text-3xl font-extrabold text-black bg-yellow  border-4 border-black py-1 px-6
         shadow-[4px_4px_0_var(--color-black)] absolute -top-6 -left-6 -rotate-5 tracking-tighter"
        >
          START A PROJECT
        </div>
        {/* Contact info */}
        <div className="space-y-4 col-span-2">
          <div className="px-6 py-2">
            <h3 className="font-extrabold text-6xl my-6">LET'S CREATE MAGIC</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-yellow border-2 border-black flex items-center justify-center font-bold">
                  @
                </div>
                <div>
                  <div className="text-xs text-gray-500">EMAIL</div>
                  <div className="font-semibold">waithakaoffices@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue border-2 border-black flex items-center justify-center font-bold text-white">
                  in
                </div>
                <div>
                  <div className="text-xs text-gray-500">LINKEDIN</div>
                  <div className="font-semibold">linkedin.com/in/waithaka</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center font-bold text-white">
                  GH
                </div>
                <div>
                  <div className="text-xs text-gray-500">GITHUB</div>
                  <div className="font-semibold">github.com/WaithakaGuru</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow border-3 border-black p-4 shadow-[5px_5px_0_var(--color-black)]">
            <div className="text-sm font-bold mb-2">💡 FUN FACT</div>
            <p className="text-sm">
              I've written over 100,000 lines of code and consumed approximately
              2,847 cups of coffee in the process.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="border-2 border-black sm:p-6 p-2 
          md:col-span-3 mx-auto min-w-92"
        >
          <h3 className="font-bold text-xl mb-6">CHAT ME UP</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border-2 border-black p-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white border-2 border-black py-3 font-bold text-sm transition-all hover:bg-yellow hover:text-black hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-black)]"
            >
              SEND MESSAGE →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
