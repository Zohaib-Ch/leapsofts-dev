import React from 'react';

export interface FormattedSegment {
  text: string;
  bold: boolean;
}

/**
 * Parses markdown bold (**word**), HTML bold (<strong>word</strong> or <b>word</b>),
 * or arrays of segments into FormattedSegment[].
 * If no explicit formatting syntax is found, automatically applies key enterprise phrase highlighting.
 */
export function parseFormattedText(
  content?: string | FormattedSegment[]
): FormattedSegment[] {
  if (!content) return [];
  if (Array.isArray(content)) {
    return content.map(item => ({ text: item.text, bold: !!item.bold }));
  }

  // Check if string contains explicit markdown (**bold**, *bold/italic*, _bold/italic_) or HTML tags
  const hasFormattingTags = /\*\*.*?\*\*|\*.*?\*|_.*?_|<strong>.*?<\/strong>|<b>.*?<\/b>|<em>.*?<\/em>/gi.test(content);

  if (hasFormattingTags) {
    const formattedRegex = /(\*\*.*?\*\*|\*.*?\*|_.*?_|<strong>.*?<\/strong>|<b>.*?<\/b>|<em>.*?<\/em>)/gi;
    const parts = content.split(formattedRegex);
    return parts.filter(Boolean).map(part => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return { text: part.slice(2, -2), bold: true };
      }
      if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
        return { text: part.slice(1, -1), bold: true };
      }
      if (part.toLowerCase().startsWith('<strong>') && part.toLowerCase().endsWith('</strong>')) {
        return { text: part.slice(8, -9), bold: true };
      }
      if (part.toLowerCase().startsWith('<b>') && part.toLowerCase().endsWith('</b>')) {
        return { text: part.slice(3, -4), bold: true };
      }
      if (part.toLowerCase().startsWith('<em>') && part.toLowerCase().endsWith('</em>')) {
        return { text: part.slice(4, -5), bold: true };
      }
      return { text: part, bold: false };
    });
  }

  // Keywords to auto-highlight as fallback if plain string without ** syntax is passed
  const keywords = [
    "enterprise-grade custom software",
    "scalable cloud solutions",
    "proof of concept (PoC)",
    "resilient software architecture",
    "MVP development",
    "AI-driven system orchestrations"
  ];

  const pattern = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = content.split(pattern);

  return parts.filter(Boolean).map(part => {
    const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
    return { text: part, bold: isKeyword };
  });
}

/**
 * Parses markdown italics (*word* or _word_) and HTML emphasis (<em>word</em>)
 * for rendering dynamic heading styles. Includes fallback accent keyword detection.
 */
export function parseEmphasisText(content?: string, titleAccent?: string): React.ReactNode {
  if (!content) return null;

  if (titleAccent && content.toLowerCase().includes(titleAccent.toLowerCase())) {
    const pattern = new RegExp(`(${titleAccent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = content.split(pattern);
    return parts.filter(Boolean).map((part, index) => {
      if (part.toLowerCase() === titleAccent.toLowerCase()) {
        return React.createElement('em', { key: index }, part);
      }
      return React.createElement('span', { key: index }, part);
    });
  }

  const hasEmphasisTags = /(<em>.*?<\/em>|\*.*?\*|_.*?_)/gi.test(content);

  if (hasEmphasisTags) {
    const regex = /(<em>.*?<\/em>|\*.*?\*|_.*?_)/gi;
    const parts = content.split(regex);
    return parts.filter(Boolean).map((part, index) => {
      if (part.toLowerCase().startsWith('<em>') && part.toLowerCase().endsWith('</em>')) {
        return React.createElement('em', { key: index }, part.slice(4, -5));
      }
      if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
        return React.createElement('em', { key: index }, part.slice(1, -1));
      }
      return React.createElement('span', { key: index }, part);
    });
  }

  // Fallback auto-accent keywords if no *asterisk* or <em> tags are present
  const accentKeywords = ["execution", "velocity", "performance", "digital transformation"];
  const pattern = new RegExp(`(${accentKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  if (pattern.test(content)) {
    const parts = content.split(pattern);
    return parts.filter(Boolean).map((part, index) => {
      const isAccent = accentKeywords.some(k => k.toLowerCase() === part.toLowerCase());
      if (isAccent) {
        return React.createElement('em', { key: index }, part);
      }
      return React.createElement('span', { key: index }, part);
    });
  }

  return content;
}



