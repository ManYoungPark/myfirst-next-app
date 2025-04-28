import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

export default function Summary({ markdownContent }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl prose">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}

// Next.js의 getStaticProps를 이용해서 Markdown 파일을 읽어온다
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'summary.md'); // summary.md 파일 경로
  const fileContents = fs.readFileSync(filePath, 'utf8');  // 파일 내용을 읽어옴

  return {
    props: {
      markdownContent: fileContents,
    },
  };
}
