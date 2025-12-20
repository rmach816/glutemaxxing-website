'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-3 bg-white text-gray-900 border-2 border-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
