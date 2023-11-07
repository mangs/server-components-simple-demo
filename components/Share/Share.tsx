'use client';

// External Imports
import React, { useState } from 'react';

// Local Functions
function shareContent(content) {
  alert(`Sharing content: ${content}`);
}

// Component Definition
export default function Share({ children }) {
  const [isPending, setIsPending] = useState(false);

  function onClick() {
    setIsPending(true);
    setTimeout(() => shareContent(children), 1)
    setTimeout(() => setIsPending(false), 100);
  }

  return (
    <p style={{ backgroundColor: isPending ? 'yellow' : 'green' }} onClick={onClick}>{children}</p>
  );
}
