"use client";

import { useEffect } from 'react';
import Link from 'next/link';

const GlobalListPage = () => {
    useEffect(() => {
        document.title = "Listings";
    }, []);

    const sections = [
        {
            title: "Customers",
            links: [
                { name: "Customer List", href: "/global/price&discount/contract-list" },
                { name: "By Customer Group", href: "#" },
                { name: "By Price Group", href: "#" },
                { name: "Alphabetical List", href: "#" },
                { name: "Customer Price List", href: "#" },
            ]
        },
        {
            title: "Suppliers",
            links: [
                { name: "Supplier List", href: "#" },
                { name: "By Supplier Group", href: "#" },
                { name: "By Price Group", href: "#" },
                { name: "Alphabetical List", href: "#" },
                { name: "Supplier List by Product", href: "#" },
                { name: "Supplier Price List", href: "#" },
            ]
        },
        {
            title: "Items",
            links: [
                { name: "Item Master List", href: "#" },
                { name: "Service Item List", href: "#" },
                { name: "Item list by Group", href: "#" },
                { name: "By Item Brand", href: "#" },
                { name: "By Item Category", href: "#" },
                { name: "By Item Class", href: "#" },
            ]
        },
        {
            title: "Configuration",
            links: [
                { name: "Codes List", href: "#" },
                { name: "Transaction Codes List", href: "#" },
                { name: "GL Interface Table", href: "#" },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-center text-2xl font-bold text-blue-700 mb-12 uppercase tracking-wide border-b-2 border-blue-100 pb-4'>
                System Listings & Reports
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
                        <h2 className="text-red-500 font-bold text-lg mb-4 border-l-4 border-red-500 pl-3">{section.title}</h2>
                        <div className="space-y-2 flex-grow">
                            {section.links.map((link, lIdx) => (
                                <Link 
                                    key={lIdx} 
                                    href={link.href}
                                    className={`block py-1 px-2 rounded text-xs font-medium transition-colors ${
                                        link.href === '#' 
                                        ? 'text-gray-400 cursor-not-allowed italic' 
                                        : 'text-blue-600 hover:bg-blue-50 underline decoration-blue-200'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-center text-gray-500 text-sm font-medium">
                    Click on a list name to generate a report or view the detailed registry.
                </p>
            </div>
        </div>
    );
};

export default GlobalListPage;
