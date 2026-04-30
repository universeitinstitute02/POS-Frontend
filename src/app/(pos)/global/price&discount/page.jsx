"use client";

import { useEffect } from 'react';
import Link from 'next/link';

const PriceDiscountPage = () => {
    useEffect(() => {
        document.title = "Price & Discounts";
    }, []);

    const sections = [
        {
            title: "Standard",
            links: [
                { name: "Standard Selling Prices", href: "/global/price&discount/standard-selling-prices" },
                { name: "Standard Selling Discounts", href: "#" },
                { name: "Standard Buying Prices", href: "/global/price&discount/standard-buying-prices" },
                { name: "Standard Buying Discounts", href: "/global/price&discount/standard-buying-discounts" },
            ]
        },
        {
            title: "Rate Tables & Promos",
            links: [
                { name: "Standard Selling Rate Tables", href: "/global/price&discount/standard-selling-rate-tables" },
                { name: "Standard Buying Rate Tables", href: "/global/price&discount/standard-buying-rate-tables" },
                { name: "Special (Promo-Code) Selling Prices", href: "/global/price&discount/special-promo-code-selling-prices" },
                { name: "Special (Promo-Code) Buying Prices", href: "/global/price&discount/special-promo-code-buying-prices" },
            ]
        },
        {
            title: "Contractual",
            links: [
                { name: "Contract Selling Prices", href: "/global/price&discount/contract-selling-prices" },
                { name: "Contract Selling Discounts", href: "/global/price&discount/contract-selling-discounts" },
                { name: "Contract Buying Prices", href: "/global/price&discount/contract-buying-prices" },
                { name: "Contract Buying Discounts", href: "/global/price&discount/contract-buying-discounts" },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-center text-2xl font-bold text-blue-700 mb-12 uppercase tracking-wide border-b-2 border-blue-100 pb-4'>
                Price & Discounts Configuration
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:-translate-y-1">
                        <div className="bg-blue-600 px-6 py-4">
                            <h2 className="text-white font-bold text-lg">{section.title}</h2>
                        </div>
                        <div className="p-6 space-y-3">
                            {section.links.map((link, lIdx) => (
                                <Link 
                                    key={lIdx} 
                                    href={link.href}
                                    className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                        link.href === '#' 
                                        ? 'text-gray-400 cursor-not-allowed bg-gray-50' 
                                        : 'text-blue-600 hover:bg-blue-50 hover:text-blue-800'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <p className="text-blue-700 font-medium">
                    Select a category above to manage system-wide pricing structures, promotional discounts, and contractual agreements.
                </p>
            </div>
        </div>
    );
};

export default PriceDiscountPage;
