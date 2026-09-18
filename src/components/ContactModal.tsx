import React, { useState, useEffect } from 'react';
import { X, Mail, MapPin, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Web Design & Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] text-stone-900 rounded-2xl shadow-2xl border border-stone-200 z-10 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-stone-200 pb-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#8e472a] font-semibold">
            Let's Collaborate
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Get in Touch
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Have a project, partnership, or idea to discuss? Drop a message below.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Message Received
            </h3>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Thank you for reaching out, <strong>{name || 'Friend'}</strong>! I will review your inquiry and get back to you within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Vance"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8e472a]/30 focus:border-[#8e472a]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alexander@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8e472a]/30 focus:border-[#8e472a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Area of Interest
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8e472a]/30 focus:border-[#8e472a]"
              >
                <option value="Web Design & Development">Web Design & Full-Stack Development</option>
                <option value="Restaurant & Hospitality">Restaurant & Catering Collaboration</option>
                <option value="Ice Cream Venture">Artisanal Ice Cream Venture</option>
                <option value="Properties & Development">Properties & Real Estate Development</option>
                <option value="Student Housing">Student Housing Partnership</option>
                <option value="Advisory / Speaking">Advisory & Speaking</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your goals, timelines, or questions..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#8e472a]/30 focus:border-[#8e472a] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs text-stone-500 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Direct correspondence</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#8e472a] hover:bg-[#7a3c22] disabled:opacity-60 text-white text-sm font-medium rounded-lg shadow-sm transition"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Quick Contacts Footer */}
        <div className="mt-8 pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-stone-400" />
            <a href="mailto:contact@tuhinahmed.com" className="hover:text-stone-900 hover:underline">
              contact@tuhinahmed.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-stone-400" />
            <span>London • Global Remote</span>
          </div>
        </div>
      </div>
    </div>
  );
};
