import React from "react";

export default function LoadingSnippet({ message }) {
  return (
    <div className="flex items-center gap-6">
      <span className="loading loading-ring loading-lg text-secondary"></span>
      <span className="text-lg italic text-neutral">{message}</span>
    </div>
  );
}
