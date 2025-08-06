"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { QrCode, MessageCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';

// 协会LOGO
const Logo = () => (
    <Link href="/" className="flex items-center space-x-2">
        <Image src="https://i0.hdslb.com/bfs/new_dyn/5d3e1bd27f89862095d6fd3d7f5bc1c32066498480.png@560w_560h_1e_1c.avif" alt="CNTA Logo" width={32} height={32} className="w-8 h-8" referrerPolicy="no-referrer" />
        <span className="text-2xl font-bold text-white">CNTA</span>
    </Link>
);

// 导航项
const navItems = [
    { name: "首页", href: "/", icon: null },
    { name: "技术部", href: "/tech", icon: null },
    { name: "志愿队", href: "/volunteer", icon: null },
    { name: "加入我们", href: "/join", icon: null },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--background)] backdrop-blur-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-gray-300 hover:text-[var(--primary)] transition-colors duration-300">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right-side Icons & Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative group">
                        <QrCode className="w-6 h-6 text-gray-300 cursor-pointer hover:text-[var(--primary)]" />
                        <div className="absolute right-0 top-full mt-2 p-2 bg-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* Placeholder for QR Code Image */}
                            <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
                                <Image src="https://i0.hdslb.com/bfs/new_dyn/759272e2a4f8cdf6f188c2e0cc103bec2066498480.png@536w_536h_1c_1s.webp" alt="CNTA QQ交流群" width={128} height={128} className="object-cover" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-[var(--primary)] rounded-full shadow-lg transition-all duration-300 hover:shadow-[var(--primary)]/50 animate-pulse">
                        <MessageCircle className="inline w-4 h-4 mr-2" />
                        加入QQ群
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative z-50 text-white"
                        aria-label="Menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Neon bottom border */}

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`mobile-menu-container ${isMenuOpen ? 'is-open' : ''} md:hidden`}
            >
                <ul className="mobile-menu-list">
                    {navItems.map((item, index) => (
                        <li
                            key={item.name}
                            className="mobile-menu-item"
                            style={{ transitionDelay: `${isMenuOpen ? index * 100 + 300 : 0}ms` }}
                        >
                            <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="mobile-menu-link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}