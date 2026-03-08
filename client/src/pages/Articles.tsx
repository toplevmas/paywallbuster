import { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { Button } from '@/components/ui/button';
import { Copy, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * PaywallBuster Replica - Articles Page
 * Design: Clean layout with improved preview window
 * Languages: English and Chinese
 * 
 * Key features:
 * - Display article URL from query parameter
 * - Multiple service buttons (archive.is, web.archive.org, smry.ai, 12ft.io, Google Cache)
 * - Large service iframe display (improved size)
 * - Social sharing buttons
 * - Copy link functionality
 */

interface Service {
  id: number;
  name: string;
  description: string;
  getUrl: (articleUrl: string) => string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Archive.is',
    description: 'Archive service',
    getUrl: (url) => `https://archive.is/newest/${url}`,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Internet Archive',
    description: 'Web Archive',
    getUrl: (url) => `https://web.archive.org/web/${url}`,
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Smry.ai',
    description: 'Article Summarizer',
    getUrl: (url) => `https://smry.ai/${url}`,
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    name: '12ft.io',
    description: 'Paywall Remover',
    getUrl: (url) => `https://12ft.io/${url}`,
    color: 'bg-red-500'
  },
  {
    id: 5,
    name: 'Google Cache',
    description: 'Google Cache',
    getUrl: (url) => `https://webcache.googleusercontent.com/search?q=cache:${url}`,
    color: 'bg-purple-500'
  }
];

export default function Articles() {
  const search = useSearch();
  const [, navigate] = useLocation();
  const { language, t } = useLanguage();
  const [articleUrl, setArticleUrl] = useState('');
  const [selectedService, setSelectedService] = useState<number>(1);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const url = params.get('article');
    if (url) {
      setArticleUrl(decodeURIComponent(url));
    }
  }, [search]);

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId);
    setIframeKey(prev => prev + 1);
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    // Show toast notification
    const toast = document.createElement('div');
    toast.textContent = language === 'en' ? 'Link copied to clipboard!' : '链接已复制到剪贴板！';
    toast.className = 'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-sm text-sm z-50';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  const handleShare = (platform: string) => {
    const currentUrl = window.location.href;
    const text = language === 'en' 
      ? `Check out this PaywallBuster link to remove paywalls: ${currentUrl}`
      : `查看这个 PaywallBuster 链接来移除付费墙：${currentUrl}`;
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=PaywallBuster`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
      email: `mailto:?subject=PaywallBuster Link&body=${encodeURIComponent(text)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const currentService = services.find(s => s.id === selectedService);
  const serviceUrl = currentService ? currentService.getUrl(articleUrl) : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="container flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 no-underline font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('articles.back')}</span>
          </button>
          <h1 className="text-xl font-semibold text-foreground">PaywallBuster</h1>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {!articleUrl ? (
          <div className="text-center py-24">
            <p className="text-lg text-muted-foreground">{t('articles.nourl')}</p>
            <Button
              onClick={() => navigate('/')}
              className="mt-4 bg-primary hover:bg-primary/90 text-white"
            >
              {t('articles.back_home')}
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Service Selection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{t('articles.sources')}</h2>
              <p className="text-muted-foreground">
                {t('articles.click')}
              </p>

              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-12 h-12 rounded-sm font-bold text-white transition-all ${
                      selectedService === service.id
                        ? `${service.color} scale-110 shadow-lg`
                        : `${service.color} opacity-70 hover:opacity-100`
                    }`}
                  >
                    {service.id}
                  </button>
                ))}
              </div>

              {currentService && (
                <p className="text-sm text-muted-foreground">
                  {t('articles.selected')} <span className="font-bold text-foreground">{currentService.name}</span> - {currentService.description}
                </p>
              )}
            </div>

            {/* Service Display Area - Improved Size */}
            <div className="border border-border rounded-sm overflow-hidden bg-secondary/30">
              {serviceUrl && (
                <iframe
                  key={iframeKey}
                  src={serviceUrl}
                  className="w-full h-screen border-none"
                  title={`${currentService?.name} - ${articleUrl}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                />
              )}
            </div>

            {/* Sharing Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">{t('articles.share')}</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <span>{t('articles.facebook')}</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <span>{t('articles.twitter')}</span>
                </button>
                <button
                  onClick={() => handleShare('reddit')}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <span>{t('articles.reddit')}</span>
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <span>{t('articles.whatsapp')}</span>
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <span>{t('articles.email')}</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:bg-secondary/50 transition-colors text-sm font-medium text-foreground no-underline"
                >
                  <Copy className="w-4 h-4" />
                  <span>{t('articles.copy')}</span>
                </button>
              </div>
            </div>

            {/* Article URL Display */}
            <div className="bg-secondary/30 border border-border p-4 rounded-sm">
              <p className="text-xs text-muted-foreground mb-2">{t('articles.url')}</p>
              <p className="text-sm font-mono text-foreground break-all">{articleUrl}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/30 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PaywallBuster™. {language === 'en' ? 'All rights reserved.' : '版权所有。'}
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
