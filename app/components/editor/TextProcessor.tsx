"use client"

import React, { useState } from 'react';

interface ProcessedText {
  html: string;
  markdown: string;
  headers: string[];
  title: string;
  tags: string[];
  author: string;
  accessLevel: string[];
}

interface Props {
  defaultTags?: string[];
  defaultAuthor?: string;
  onChange: any;
  accessFor?: string[]
}

const TextProcessor: React.FC<Props> = ({defaultTags, defaultAuthor, accessFor, onChange}) => {
  const [tags, setTags] = useState(defaultTags ? defaultTags : ['example', 'markdown', 'nextjs']);
  const [author, setAuthor] = useState(defaultAuthor ? defaultAuthor : "");
  const [accessLevel, setAccessLevel] = useState(accessFor ? accessFor : [""]);

  const [inputText, setInputText] = useState('');
  const [processedText, setProcessedText] = useState<ProcessedText | null>(null);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const processText = (text: string): ProcessedText => {
    const headers = text.match(/^(#+\s.*)$/gm) || [];
    const title = headers[0] && headers.length > 0 ? headers[0].replace(/^#+\s/, '') : 'Untitled';

    return {
      html: parseMarkdown(text),
      markdown: text,
      headers,
      title,
      tags,
      author,
      accessLevel,
    };
  };

  const parseMarkdown = (text: string): string => {
    let html = text;

    // Заголовки
    html = html.replace(/^(#{1,6})\s*(.*)$/gm, (match, p1, p2) => {
      const level = p1.length;
      return `<h${level}>${p2}</h${level}>`;
    });

    // Жирный текст
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Курсив
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Ссылки
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // todo add another types

    return html;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = processText(inputText);
    setProcessedText(result);
    onChange(result.headers);
  };

  return (
    <div>
      <div>
        <button className="border bg-[#8aeb78] hover:bg-white text-white hover:text-black px-4 py-2 hover:opacity-80"
          onClick={() => setActiveTab('edit')}>Редактировать</button>
        <button className="border bg-[#8aeb78] hover:bg-white text-white hover:text-black px-4 py-2 hover:opacity-80"
          onClick={() => setActiveTab('preview')}>Предпросмотр</button>
      </div>
      {activeTab === 'edit' && (
        <form className="flex flex-col gap-4 align-end justify-between border" onSubmit={handleSubmit}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите текст"
            rows={10}
            cols={50}
          />
          <button className="border bg-[#8aeb78] hover:bg-white text-white hover:text-black px-4 py-2 hover:opacity-80" type="submit">Обработать текст</button>
        </form>
      )}
      {activeTab === 'preview' && processedText && (
        <div className="px-2 py-2 border">
          <div dangerouslySetInnerHTML={{ __html: processedText.html }} />
        </div>
      )}
    </div>
  );
};

export default TextProcessor;
