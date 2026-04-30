"use client";

import Link from 'next/link';
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="relative">
          <div className="text-[12rem] font-black text-slate-200 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-indigo-600 rotate-12">
              <HiOutlineSearch className="w-12 h-12" />
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="text-slate-500 max-w-xs mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 group"
          >
            <HiOutlineHome className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>

        <p className="text-xs text-slate-400 font-medium pt-8">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}
