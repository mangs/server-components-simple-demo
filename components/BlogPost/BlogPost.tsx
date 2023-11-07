// External Imports
import React from 'react';

// Internal Imports
import { getParagraphs } from '../../utils/content';
import Share from '../Share/Share';

// Component Definition
export default async function BlogPost() {
  const paragraphs = await getParagraphs();

  return (
    <article>
      {paragraphs.map((paragraphText, index) => {
        if (index === 0) {
          return <Share key={paragraphText}>{paragraphText}</Share>
        }
        return <p key={paragraphText}>{paragraphText}</p>;
      })}
    </article>
  );
}
