import React, { useEffect } from 'react';

export const TalkToUs: React.FC = () => {
  useEffect(() => {
    // If DISQUS is already present on window, reload it to attach to #disqus_thread
    if (typeof window !== 'undefined' && (window as any).DISQUS) {
      try {
        (window as any).DISQUS.reset({
          reload: true,
          config: function () {
            this.page.url = window.location.href;
            this.page.identifier = 'carpark-rates-singapore-landing';
          },
        });
        return;
      } catch (e) {
        console.warn('Disqus reset notice:', e);
      }
    }

    // Set configuration variables
    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = 'carpark-rates-singapore-landing';
    };

    // Embed Disqus Universal Code script dynamically
    const existingScript = document.getElementById('dsq-embed-scr');
    if (!existingScript) {
      const d = document;
      const s = d.createElement('script');
      s.id = 'dsq-embed-scr';
      s.src = 'https://carpark-rates-1.disqus.com/embed.js';
      s.setAttribute('data-timestamp', String(+new Date()));
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <section id="talk-to-us-section" className="mt-10 mb-8 bg-white rounded-2xl border border-[#e2e2e5] p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-[#f0f0f3] mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#003d9b]/10 flex items-center justify-center text-[#003d9b]">
            <span className="material-symbols-outlined text-[24px]">forum</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1a1c1e] tracking-tight">Talk to Us</h3>
            <p className="text-xs text-[#737685]">
              Join the community discussion, share parking tips, rate updates, or ask questions
            </p>
          </div>
        </div>
      </div>

      {/* Disqus Thread Container */}
      <div id="disqus_thread" className="min-h-[220px]"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript" className="text-[#003d9b] underline">
          comments powered by Disqus.
        </a>
      </noscript>
    </section>
  );
};
