import React from 'react';

export interface FormattedTitleProps {
  title?: string;
  titleMain?: string;
  titleAccent?: string;
  titleEnd?: string;
  defaultTitle?: React.ReactNode;
  defaultAccentPhrase?: string;
}

export function renderFormattedTitle({
  title,
  titleMain,
  titleAccent,
  titleEnd,
  defaultTitle,
  defaultAccentPhrase,
}: FormattedTitleProps): React.ReactNode {
  // 1. Explicit titleAccent from Sanity Schema
  if (titleAccent || titleMain || titleEnd) {
    return (
      <>
        {titleMain}
        {titleAccent && <em>{titleAccent}</em>}
        {titleEnd}
      </>
    );
  }

  // 2. String Title Parsing
  if (typeof title === 'string' && title.trim() !== '') {
    // 2a. Check for <em>...</em> or *...* markers
    if (title.includes('<em>') || title.includes('*')) {
      const parts = title.split(/(<em>.*?<\/em>|\*.*?\*)/g);
      return (
        <>
          {parts.map((part, idx) => {
            if (part.startsWith('<em>') && part.endsWith('</em>')) {
              const inner = part.substring(4, part.length - 5);
              return <em key={idx}>{inner}</em>;
            }
            if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
              const inner = part.substring(1, part.length - 1);
              return <em key={idx}>{inner}</em>;
            }
            return part;
          })}
        </>
      );
    }

    // 2b. Check for target defaultAccentPhrase
    if (defaultAccentPhrase && title.toLowerCase().includes(defaultAccentPhrase.toLowerCase())) {
      const regex = new RegExp(`(${defaultAccentPhrase})`, 'gi');
      const parts = title.split(regex);
      return (
        <>
          {parts.map((part, idx) =>
            part.toLowerCase() === defaultAccentPhrase.toLowerCase() ? (
              <em key={idx}>{part}</em>
            ) : (
              part
            )
          )}
        </>
      );
    }

    // 2c. Common accent phrase auto-matching across company pages
    const commonAccents = [
      'Enterprise Velocity',
      'Software Craftsmanship',
      'Principles',
      'Journey',
      'Engineers',
      'International Scale',
      'Enterprise Platform',
      'Zero Tech Debt',
      'Action Blueprint',
      'Technical Excellence',
      'Manifesto',
      'Code Integrity',
      'Resilient Software Engineering',
      'Founders & Architects',
      'Spotlight',
      'Craftsmen',
      'Leadership Operates',
      'Technical Leadership',
      'Local Execution',
      'Audit Readiness',
      'Architectural Controls',
      'Enterprise Security Compliance',
      'Consultation Questions',
      'Next Enterprise System',
    ];

    for (const accent of commonAccents) {
      if (title.toLowerCase().includes(accent.toLowerCase())) {
        const regex = new RegExp(`(${accent})`, 'gi');
        const parts = title.split(regex);
        return (
          <>
            {parts.map((part, idx) =>
              part.toLowerCase() === accent.toLowerCase() ? (
                <em key={idx}>{part}</em>
              ) : (
                part
              )
            )}
          </>
        );
      }
    }

    return title;
  }

  // 3. Default JSX fallback
  return defaultTitle || null;
}
