'use client';

import type { ErrorBannerProps } from '@/types/componentTypes';

export default function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-lg max-w-xl mx-auto my-6">
            <p className="font-semibold">Algo salió mal</p>
            <p className="text-sm mt-1">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Reintentar
                </button>
            )}
        </div>
    );
}