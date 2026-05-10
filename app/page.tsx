'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (document.getElementById('email') as HTMLInputElement).value.trim();
    if (!emailInput) return;

    setStatus('loading');

    try {
      const response = await fetch('https://xfkziloyyotnnxkypgmb.supabase.co/functions/v1/capture-signal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhma3ppbG95eW90bm54a3lwZ21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzE5MTAsImV4cCI6MjA5NDAwNzkxMH0.0uiWtaFifM20h5-sSV4dtpf7ID_uH_W_lSe9rPqjnEA'
        },
        body: JSON.stringify({
          experiment_id: "1b221829",
          signal_type: "email_signup",
          value: emailInput,
          raw_data: { source: "landing_page" }
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">Stop Spiraling. Get Your Answer in 60 Seconds.</h1>
        <p className="text-2xl text-zinc-400 mb-10">An ADHD-safe decision coach that kills the 'what ifs' and hands you a clear, guilt-free path forward — so you stop losing hours to your own head.</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input 
            type="email" 
            id="email" 
            placeholder="your@email.com" 
            required 
            className="w-full px-8 py-5 bg-zinc-900 border border-zinc-700 rounded-3xl text-xl focus:outline-none focus:border-white"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white hover:bg-zinc-100 text-black py-5 px-8 rounded-3xl font-semibold text-2xl transition disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 
             status === 'success' ? '✅ Success!' : 
             'Get My Answer Now — $12/mo'}
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-6">Join for $12/month. Cancel anytime. Your first decision is on us — free for 7 days.</p>
      </div>

      {/* PROBLEM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Your Brain Isn't Broken. But Decision Paralysis Is Costing You Everything.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 p-8 rounded-3xl">
            You've been 'thinking it through' for 3 hours — and you're more confused than when you started.
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">
            Every option spawns five new 'what ifs' until the original decision is buried under an avalanche of anxiety.
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">
            You know what you *should* do. But you can't make yourself commit — and the guilt of not deciding is worse than any outcome.
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">
            It's 11pm. Your coach is asleep. Your therapist has a 2-week waitlist. And your brain will not. stop. looping.
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">
            Inaction isn't 'taking your time.' Inaction IS the decision — and it's usually the worst one.
          </div>
          
        </div>
      </div>

      {/* SOLUTION SECTION */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Meet DecideBot: Your Async, Non-Judgmental Decision Co-Pilot — Available the Moment Paralysis Hits.</h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-12">DecideBot isn't another productivity app that adds to your mental load. It's a structured AI coach that meets you exactly where you are — mid-spiral, late at night, overwhelmed — and walks you out in under 60 seconds. You dump the mess. It asks exactly 3 clarifying questions. It surfaces what YOU actually value, eliminates the options that don't serve you, and hands you one clear, committed recommendation — plus a permission slip to move forward without guilt. No infinite rabbit holes. No judgment. Just your answer.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">The 3-Question Clarity Protocol</p>
              <p className="text-zinc-400 text-sm">No endless intake forms. DecideBot asks exactly 3 targeted questions to cut through the noise and surface what actually matters to you — then stops.</p>
              
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">Values Alignment Engine</p>
              <p className="text-zinc-400 text-sm">It doesn't tell you what to do. It reflects your own stated values back at you so the decision feels like *yours* — because it is.</p>
              
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">Dominated Option Eliminator</p>
              <p className="text-zinc-400 text-sm">Automatically removes choices that are objectively worse across every dimension you care about — so you're never choosing between 10 options when only 2 are real.</p>
              
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">The Permission Slip Reframe</p>
              <p className="text-zinc-400 text-sm">Every recommendation comes with a guilt-free 'permission slip' — a clear, non-judgmental statement that gives your brain the closure it's been desperately searching for.</p>
              
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">Micro-Celebration + Decision Streak</p>
              <p className="text-zinc-400 text-sm">Every completed decision triggers a small win moment and builds your streak — rewiring your brain to associate deciding with competence, not dread.</p>
              
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">
              
              <p className="font-semibold mb-2">Available at 11pm. No Appointment Needed.</p>
              <p className="text-zinc-400 text-sm">Paralysis doesn't respect business hours. DecideBot is async, instant, and ready exactly when your brain needs it most.</p>
              
            </div>
            
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500 text-sm">
        Powered by PMF Autopilot • Experiment #1b221829
      </div>
    </main>
  );
}