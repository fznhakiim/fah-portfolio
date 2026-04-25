import { useState, type FormEvent } from 'react';
import { Send, Loader2, Check } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name || !email || !message) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setState('loading');
    setTimeout(() => {
      setState('success');
      form.reset();
      setTimeout(() => setState('idle'), 3000);
    }, 1200);
  };

  const inputClass =
    'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-[hsl(165,60%,40%)] focus:ring-2 focus:ring-[hsl(165,60%,40%,0.15)]';

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 ${shake ? 'animate-shake' : ''}`}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nameInput" className="text-sm font-medium text-foreground">Name</label>
          <input id="nameInput" name="name" type="text" placeholder="Your name" autoComplete="name" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="emailInput" className="text-sm font-medium text-foreground">Email</label>
          <input id="emailInput" name="email" type="email" placeholder="you@example.com" autoComplete="email" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="messageInput" className="text-sm font-medium text-foreground">Message</label>
          <textarea
            id="messageInput"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            className={`${inputClass} h-auto min-h-[120px] resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={state !== 'idle'}
          className={`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-60 ${
            state === 'success'
              ? 'bg-emerald-500 text-white'
              : 'bg-foreground text-background hover:opacity-90 hover:-translate-y-[1px]'
          }`}
        >
          {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
          {state === 'success' && <Check className="h-4 w-4" />}
          {state === 'idle' && <Send className="h-4 w-4" />}
          {state === 'idle' ? 'Send Message' : state === 'loading' ? 'Sending...' : 'Sent!'}
        </button>
      </form>

      {/* Toast */}
      <div
        className={`fixed bottom-6 right-6 z-[1100] flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 ${
          state === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Check className="h-4 w-4" /> Message sent
      </div>

      <style>{`
        @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-4px); } 40%, 80% { transform: translateX(4px); } }
        .animate-shake { animation: shake 0.35s ease-out; }
      `}</style>
    </>
  );
}
