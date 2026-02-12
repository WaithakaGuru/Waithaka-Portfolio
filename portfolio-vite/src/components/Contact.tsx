import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-10 bg-transparent">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        GET_IN_<span className="text-green">TOUCH</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-[600px] mx-auto">
        Have a project in mind? Let's work together to create something amazing.
      </p>

      <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="bg-white border-3 border-black p-6 shadow-[5px_5px_0_var(--color-black)]">
            <h3 className="font-bold text-lg mb-4">CONTACT INFO</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow border-2 border-black flex items-center justify-center font-bold">
                  @
                </div>
                <div>
                  <div className="text-xs text-gray-500">EMAIL</div>
                  <div className="font-semibold">arham@example.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue border-2 border-black flex items-center justify-center font-bold text-white">
                  in
                </div>
                <div>
                  <div className="text-xs text-gray-500">LINKEDIN</div>
                  <div className="font-semibold">linkedin.com/in/arham</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center font-bold text-white">
                  GH
                </div>
                <div>
                  <div className="text-xs text-gray-500">GITHUB</div>
                  <div className="font-semibold">github.com/arham</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow border-3 border-black p-6 shadow-[5px_5px_0_var(--color-black)]">
            <div className="text-sm font-bold mb-2">💡 FUN FACT</div>
            <p className="text-sm">
              I've written over 100,000 lines of code and consumed approximately 
              2,847 cups of coffee in the process.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="bg-white border-3 border-black p-6 shadow-[5px_5px_0_var(--color-black)]">
          <h3 className="font-bold text-lg mb-6">SEND A MESSAGE</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold mb-2">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-2 border-black p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-2">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
