import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.faq': 'FAQ',
    'header.terms': 'Terms',
    'header.privacy': 'Privacy',
    
    // Hero Section
    'hero.title': 'Remove Paywalls Instantly',
    'hero.subtitle': 'We all hate paywalls. Let us help you break down these walls.',
    'hero.button': 'Remove Paywall',
    'hero.or': 'Or go to',
    'hero.ios': '✨ Now Available on iOS',
    'hero.shortcut': 'Download the Shortcut',
    
    // Feature Cards
    'feature.how.title': 'How does it work?',
    'feature.how.desc': 'Many websites offer the ability to remove paywalls on news articles. We\'ve put them all together in one place for you. So, you can try them out and find which ones work best for the sites you like.',
    'feature.legal.title': 'Is it legal?',
    'feature.legal.desc': 'Yes, it is 100% legal. We redirect users to third party websites that remove the paywall. We do not have any association with these websites. We do not support using PaywallBuster to violate the terms of service or copyright of other websites.',
    'feature.free.title': 'Is it free?',
    'feature.free.desc': 'Absolutely, PaywallBuster is 100% free and always will be!',
    
    // FAQ
    'faq.title': '🤔 Frequently asked questions',
    'faq.q1': 'What is PaywallBuster?',
    'faq.a1': 'PaywallBuster is an aggregator that brings together multiple third-party paywall removal services in one convenient location. We don\'t remove paywalls ourselves, but rather redirect you to services that can help you access paywalled content.',
    'faq.q2': 'Why was PaywallBuster created?',
    'faq.a2': 'We created PaywallBuster to save you time searching for different paywall removal services. Instead of trying multiple websites, you can try them all in one place and find which ones work best for your favorite news sites.',
    'faq.q3': 'Does PaywallBuster work on all sites?',
    'faq.a3': 'PaywallBuster provides access to multiple removal services, but not all of them work on every website. Different services specialize in different paywalls, so you may need to try a few to find one that works for your specific article.',
    'faq.q4': 'What types of paywalls can be bypassed?',
    'faq.a4': 'The services we provide access to can help with various paywall types including article limits, subscription walls, and registration walls. However, success varies by publication and service.',
    'faq.q5': 'How does PaywallBuster protect its users\' privacy?',
    'faq.a5': 'PaywallBuster does not collect or store any personal information about our users. We don\'t track your browsing history or the articles you access. Your privacy is completely protected.',
    'faq.q6': 'Is PaywallBuster legal to use?',
    'faq.a6': 'Yes, PaywallBuster is 100% legal. We simply redirect you to third-party services and have no association with them. We do not support using PaywallBuster to violate the terms of service or copyright of other websites.',
    'faq.q7': 'Does it work on all devices?',
    'faq.a7': 'PaywallBuster works on any device with a web browser. We also offer an iOS Shortcut for iPhone and iPad users, making it even easier to remove paywalls on mobile devices.',
    'faq.q8': 'What should I do if a paywall remover doesn\'t work anymore?',
    'faq.a8': 'If one service stops working, try another option from our list. Services are updated regularly, and we continuously monitor them to ensure they remain functional.',
    
    // Articles Page
    'articles.back': 'Back',
    'articles.sources': 'Archive Sources',
    'articles.click': 'Click the different buttons to search various archives',
    'articles.selected': 'Selected:',
    'articles.share': 'Share this link',
    'articles.facebook': 'Facebook',
    'articles.twitter': 'Twitter',
    'articles.reddit': 'Reddit',
    'articles.whatsapp': 'WhatsApp',
    'articles.email': 'Email',
    'articles.copy': 'Copy Link',
    'articles.url': 'Article URL:',
    'articles.nourl': 'No article URL provided',
    'articles.back_home': 'Go Back Home',
    
    // Footer
    'footer.copyright': '© 2026 PaywallBuster™. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.blog': 'Blog',
  },
  zh: {
    // Header
    'header.faq': '常见问题',
    'header.terms': '条款',
    'header.privacy': '隐私',
    
    // Hero Section
    'hero.title': '立即移除付费墙',
    'hero.subtitle': '我们都讨厌付费墙。让我们帮助你突破这些墙。',
    'hero.button': '移除付费墙',
    'hero.or': '或访问',
    'hero.ios': '✨ 现已在 iOS 上可用',
    'hero.shortcut': '下载快捷指令',
    
    // Feature Cards
    'feature.how.title': '它如何工作？',
    'feature.how.desc': '许多网站都提供了移除新闻文章付费墙的能力。我们将它们全部汇集在一个方便的地方。所以，你可以尝试它们，找到最适合你喜欢的网站的服务。',
    'feature.legal.title': '合法吗？',
    'feature.legal.desc': '是的，100% 合法。我们将用户重定向到第三方网站来移除付费墙。我们与这些网站没有任何关联。我们不支持使用 PaywallBuster 来违反其他网站的服务条款或版权。',
    'feature.free.title': '免费吗？',
    'feature.free.desc': '绝对免费，PaywallBuster 永远免费！',
    
    // FAQ
    'faq.title': '🤔 常见问题',
    'faq.q1': '什么是 PaywallBuster？',
    'faq.a1': 'PaywallBuster 是一个聚合器，将多个第三方付费墙移除服务汇集在一个方便的位置。我们不自己移除付费墙，而是将你重定向到可以帮助你访问付费内容的服务。',
    'faq.q2': '为什么创建 PaywallBuster？',
    'faq.a2': '我们创建 PaywallBuster 是为了节省你搜索不同付费墙移除服务的时间。与其尝试多个网站，不如在一个地方尝试所有服务，找到最适合你最喜欢的新闻网站的服务。',
    'faq.q3': 'PaywallBuster 对所有网站都有效吗？',
    'faq.a3': 'PaywallBuster 提供对多个移除服务的访问，但并非所有服务都对每个网站都有效。不同的服务专门处理不同的付费墙，所以你可能需要尝试几个才能找到适合你特定文章的服务。',
    'faq.q4': '可以绕过哪些类型的付费墙？',
    'faq.a4': '我们提供的服务可以帮助处理各种付费墙类型，包括文章限制、订阅墙和注册墙。但是，成功率因出版物和服务而异。',
    'faq.q5': 'PaywallBuster 如何保护用户隐私？',
    'faq.a5': 'PaywallBuster 不收集或存储关于我们用户的任何个人信息。我们不跟踪你的浏览历史或你访问的文章。你的隐私完全受保护。',
    'faq.q6': '使用 PaywallBuster 合法吗？',
    'faq.a6': '是的，PaywallBuster 100% 合法。我们只是将你重定向到第三方服务，与它们没有任何关联。我们不支持使用 PaywallBuster 来违反其他网站的服务条款或版权。',
    'faq.q7': '在所有设备上都有效吗？',
    'faq.a7': 'PaywallBuster 可在任何带有网络浏览器的设备上使用。我们还为 iPhone 和 iPad 用户提供 iOS 快捷指令，使在移动设备上移除付费墙变得更加容易。',
    'faq.q8': '如果付费墙移除器不再工作怎么办？',
    'faq.a8': '如果一个服务停止工作，请尝试我们列表中的另一个选项。服务会定期更新，我们持续监控它们以确保它们保持正常工作。',
    
    // Articles Page
    'articles.back': '返回',
    'articles.sources': '存档来源',
    'articles.click': '点击不同的按钮搜索各种存档',
    'articles.selected': '已选择：',
    'articles.share': '分享此链接',
    'articles.facebook': 'Facebook',
    'articles.twitter': 'Twitter',
    'articles.reddit': 'Reddit',
    'articles.whatsapp': 'WhatsApp',
    'articles.email': '邮件',
    'articles.copy': '复制链接',
    'articles.url': '文章网址：',
    'articles.nourl': '未提供文章网址',
    'articles.back_home': '返回首页',
    
    // Footer
    'footer.copyright': '© 2026 PaywallBuster™。版权所有。',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.blog': '博客',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
