import { useState } from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { BorderBeam } from "../ui/border-beam";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:sudhir@example.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
        window.location.href = mailtoLink;
        setSubmitted(true);
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-24 gap-4 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p className="text-sm uppercase tracking-[0.3em] text-[#c49260]/70 font-light">Get in touch</p>
            <h1 className="text-7xl font-semibold text-[#c49260] tracking-tight">Contact Me</h1>
            <div className="w-16 h-[2px] bg-[#c49260]/40 mt-2"></div>

            <div className="relative rounded-2xl bg-black/40 backdrop-blur-sm p-12 mt-12 w-full max-w-5xl overflow-hidden">
                <BorderBeam colorFrom="#c49260" colorTo="#d4a373" size={200} duration={10} borderWidth={2} />
                <div className="flex flex-col md:flex-row items-start justify-center gap-16">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <p className="text-base text-white/80 leading-relaxed">
                        Have a project in mind or want to collaborate? Feel free to reach out — I'd love to hear from you.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#c49260]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <a href="mailto:sudhir@example.com" className="text-white/80 hover:text-[#c49260] transition-colors">sudhir@example.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#c49260]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="text-white/80">Bangalore, India</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-2">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c49260] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c49260] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#c49260] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
                    {submitted && (
                        <p className="text-[#c49260] text-sm">Thanks for reaching out! Your email client should have opened.</p>
                    )}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm text-[#c49260]/70 uppercase tracking-wider">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border border-[#c49260]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c49260] transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm text-[#c49260]/70 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border border-[#c49260]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c49260] transition-colors"
                            placeholder="Your email"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm text-[#c49260]/70 uppercase tracking-wider">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="bg-white/5 border border-[#c49260]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c49260] transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 px-6 py-3 bg-[#c49260] text-black font-medium rounded-lg hover:bg-[#d4a373] transition-colors"
                    >
                        Send Message
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
};
