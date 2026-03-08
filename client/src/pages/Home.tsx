import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * PaywallBuster Replica - Home Page
 * Design: Minimalist with asymmetric layout, electric blue accents
 * Languages: English and Chinese
 * 
 * Key sections:
 * - Header with language switcher
 * - Hero section with input form
 * - Three feature cards
 * - FAQ accordion section
 * - Footer
 */

interface FAQItem {
  question: string;
  answer: string;
}

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [url, setUrl] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') },
  ];

  const handleRemovePaywall = () => {
    if (url.trim()) {
      window.location.href = `/articles/?article=${encodeURIComponent(url)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRemovePaywall();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">PB</span>
            </div>
            <h1 className="text-xl font-semibold text-foreground">PaywallBuster</h1>
          </div>
          <nav className="flex gap-6 items-center">
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground no-underline">
              {t('header.faq')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground no-underline">
              {t('header.terms')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground no-underline">
              {t('header.privacy')}
            </a>
            {/* Language Switcher */}
            <div className="flex gap-2 ml-4 pl-4 border-l border-border">
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium px-2 py-1 rounded-sm transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`text-sm font-medium px-2 py-1 rounded-sm transition-colors ${
                  language === 'zh'
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                中文
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  {t('hero.title')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-md">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* URL Input Form */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder={language === 'en' ? 'Enter Article URL here...' : '在此输入文章网址...'}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border-2 border-dashed border-orange-400 bg-white text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    onClick={handleRemovePaywall}
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
                  >
                    {t('hero.button')}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('hero.or')} <code className="bg-secondary px-2 py-1 rounded text-foreground">https://paywallbuster.me/articles?article=&lt;URL&gt;</code>
                </p>
              </div>

              {/* iOS Shortcut */}
              {/* <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{t('hero.ios')}</p>
                <a
                  href="https://www.icloud.com/shortcuts/561e47f5a2424858b1e49bc7e0274516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block no-underline"
                >
                  <Button variant="outline" className="border-border">
                    {t('hero.shortcut')}
                  </Button>
                </a>
              </div> */}
            </div>

            {/* Right: Mascot Image */}
            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663320349087/ETX9mT6p7oY2WLTaV2ML8L/paywall-robot-hero-ZEtRfXhdfqMvfv9grid3ej.webp"
                alt="PaywallBuster Robot breaking through a wall"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: How does it work */}
            <div className="bg-white border border-border p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('feature.how.title')}</h3>
              <p className="text-muted-foreground">
                {t('feature.how.desc')}
              </p>
            </div>

            {/* Card 2: Is it legal */}
            <div className="bg-white border border-border p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('feature.legal.title')}</h3>
              <p className="text-muted-foreground">
                {t('feature.legal.desc')}
              </p>
            </div>

            {/* Card 3: Is it free */}
            <div className="bg-white border border-border p-8 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('feature.free.title')}</h3>
              <p className="text-muted-foreground">
                {t('feature.free.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            {t('faq.title')}
          </h2>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-secondary/50 transition-colors text-left"
                >
                  <h3 className="text-xl font-bold text-foreground">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground no-underline">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground no-underline">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground no-underline">
                {t('footer.blog')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
