"use client";

import { useEffect } from 'react';
import { HiOutlineRefresh, HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-rose-50 rounded-3xl shadow-xl shadow-rose-100 flex items-center justify-center text-rose-600">
            <HiOutlineExclamationCircle className="w-12 h-12" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900">Something went wrong</h1>
          <p className="text-slate-500 max-w-xs mx-auto">
            An unexpected error occurred. We've been notified and are working to fix it.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 text-left">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Error Message</p>
          <p className="text-xs font-mono text-rose-600 break-words">{error.message || "Unknown Application Error"}</p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
          >
            <HiOutlineRefresh className="w-5 h-5" />
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
