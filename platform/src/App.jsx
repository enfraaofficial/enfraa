import React, { useState } from 'react'
import { 
  Receipt, 
  Wallet, 
  Boxes, 
  TrendingUp, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Printer,
  Instagram,
  Github
} from 'lucide-react'

// -------------------------------------------------------------
// SECTOR SHOWCASE DATA
// -------------------------------------------------------------
const sectorData = {
  supermarket: {
    title: "Supermarkets",
    desc: "Engineered to process massive quantities of fast-moving products. Complete barcode infrastructure, fast touch-point register billing, supplier logs, automated rack stock alerts, and daily sales diagnostics.",
    emoji: "🛒",
    color: "#FD9800", // Orange
    gradient: "from-orange-200 to-amber-100",
    bullets: [
      "Fast POS billing",
      "Barcode support",
      "Product tracking",
      "Stock alerts",
      "Daily sales reports"
    ]
  },
  retail: {
    title: "Retail Stores",
    desc: "Keep absolute track of customer purchasing trends and shelf inventories. Manage multiple sizes, colors, and SKUs easily, issue modern digital tax invoices, log credit customers, and generate month-end margins reports.",
    emoji: "🏪",
    color: "#C3FF16", // Lime
    gradient: "from-lime-200 to-emerald-100",
    bullets: [
      "Invoice management",
      "Customer records",
      "Inventory control",
      "Sales analytics",
      "Multiple branch sync"
    ]
  },
  restaurant: {
    title: "Restaurants",
    desc: "Keep your kitchen and tables in absolute sync. Manage active kitchen order tickets (KOT), update items and menu pricing instantly, keep tabs on ingredient usage, and track daily cash registers.",
    emoji: "🍽",
    color: "#FFE816", // Yellow
    gradient: "from-yellow-200 to-amber-100",
    bullets: [
      "Order billing",
      "Menu management",
      "Expense tracking",
      "Daily reports",
      "Table status log"
    ]
  },
  medical: {
    title: "Medical Shops",
    desc: "A compliant stock and invoice engine designed for pharmacies. Real-time batch-number tracking, drug expiry alerts, schedule H alerts, purchase ledger tracking, and GST report generation.",
    emoji: "💊",
    color: "#F79CFF", // Pink
    gradient: "from-pink-200 to-purple-100",
    bullets: [
      "Product inventory",
      "Billing support",
      "Stock monitoring",
      "Expiry alerts",
      "GST reports"
    ]
  },
  wholesale: {
    title: "Wholesale Business",
    desc: "Handle bulk distributions and supplier chains like clockwork. Flexible pricing groups, credit limit alerts, shipping manifest generation, bulk invoice print jobs, and deep financial debt ledgers.",
    emoji: "📦",
    color: "#97F8B7", // Mint
    gradient: "from-teal-200 to-emerald-100",
    bullets: [
      "Bulk billing",
      "Inventory tracking",
      "Customer management",
      "Finance reports",
      "Vendor ledgers"
    ]
  },
  small: {
    title: "Small Businesses",
    desc: "Zero-bloat billing and ledger tracking. Perfect for local shops and service creators who want to log cash inputs, send receipts on WhatsApp, track small expenditures, and audit monthly margins.",
    emoji: "💼",
    color: "#AFA9EC", // Lavender
    gradient: "from-indigo-200 to-purple-100",
    bullets: [
      "Easy setup",
      "Expense tracking",
      "Business insights",
      "Monthly analytics",
      "WhatsApp receipts"
    ]
  }
};

export default function App() {
  const [activeSector, setActiveSector] = useState('supermarket');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Enfraa Team,\n\nI would like to request a product demo for my business.\n\nMy Details:\n• Name: ${formData.name}\n• Business: ${formData.business}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Message: ${formData.message}`;
    const waUrl = `https://wa.me/917306396562?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setFormData({ name: '', business: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-[#FFFFFF] text-[#160F2E] min-h-screen overflow-x-hidden font-sans relative">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-[120vh]">
        <div class="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[linear-gradient(to_right,#160F2E_1px,transparent_1px),linear-gradient(to_bottom,#160F2E_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#7B5CF5]/5 blur-[130px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" class="w-8 h-8">
              <defs>
                <linearGradient id="logoGradReact" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B5CF5" />
                  <stop offset="100%" stopColor="#AFA9EC" />
                </linearGradient>
              </defs>
              <text x="50%" y="65%" text-anchor="middle" fontFamily="Anton, sans-serif" fontSize="52" fill="url(#logoGradReact)">En</text>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-tighter text-black">En<span className="text-[#7B5CF5]">Fraa</span></span>
            <span className="text-[9px] font-mono text-[#7B5CF5] uppercase tracking-[0.25em] leading-none mt-0.5 font-bold">Simplifying Business</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 bg-white border-2 border-black px-8 py-3 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <a href="#features" className="text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#7B5CF5] transition-colors">Features</a>
          <a href="#sectors" className="text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#7B5CF5] transition-colors">Sectors</a>
          <a href="#pricing" className="text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#7B5CF5] transition-colors">Pricing</a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#7B5CF5] transition-colors">Contact</a>
        </nav>

        {/* WhatsApp Book Demo Redirect */}
        <a href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20would%20like%20to%20book%20a%20demo%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="bg-black text-white hover:bg-neutral-800 border-2 border-black font-bold uppercase text-xs tracking-widest px-6 py-3 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200">
          Book Demo
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#7B5CF5]/10 border-2 border-[#7B5CF5] px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span class="w-2.5 h-2.5 rounded-full bg-[#7B5CF5] animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider text-[#7B5CF5] font-mono uppercase">POS BILLING REVOLUTION</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-black leading-[1.05] relative">
            SIMPLIFYING<br />
            <span className="font-instrument italic font-normal text-[#7B5CF5] lowercase text-6xl md:text-7xl lg:text-8xl">business</span>.
            <span className="absolute -top-8 right-0 md:-right-8 bg-[#C3FF16] text-black font-mono font-bold text-[10px] uppercase px-3 py-1.5 border-2 border-black rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse">
              PANI THUDANGAM! 🚀
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-[#615E72] leading-relaxed max-w-xl font-medium">
            Smart billing, real-time inventory tracking, finance management and analytics engineered for modern businesses. Built to organize operations effortlessly.
          </p>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
            <!-- WhatsApp redirects -->
            <a href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20am%20interested%20in%20the%20%E2%82%B999%20Trial%20Plan%20(30%20Days).%0A%0APlease%20help%20me%20get%20started." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#7B5CF5] hover:bg-[#5B3FD4] text-white font-bold uppercase text-xs tracking-widest rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center">
              Start Trial
            </a>
            <a href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20would%20like%20to%20book%20a%20demo%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border-2 border-black text-black hover:bg-neutral-50 font-bold uppercase text-xs tracking-widest rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center">
              Book Demo
            </a>
          </div>
        </div>

        {/* Right: Aligned Dual Mockup Showcase */}
        <div className="lg:col-span-7 relative w-full h-[540px] flex items-center justify-center max-md:h-[460px]">
          {/* Desktop Dashboard Panel */}
          <div className="relative w-full max-w-[530px] bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(22,15,46,1)] z-10 transition-transform duration-500 hover:scale-[1.01] overflow-hidden flex flex-col h-[400px]">
            <div className="flex justify-between items-center px-5 py-3.5 border-b-2 border-black bg-[#F6F5FA]">
              <div className="flex gap-1.5 items-center">
                <span class="w-3 h-3 rounded-full bg-[#FF5F56] border border-black" />
                <span class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black" />
                <span class="w-3 h-3 rounded-full bg-[#27C93F] border border-black" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#7B5CF5]">enfraa_pos_os_v2.0</span>
              <span className="text-[10px] font-pixel uppercase font-bold bg-[#C3FF16] px-2.5 py-0.5 border-2 border-black shadow-sm">SYSTEM LIVE</span>
            </div>

            <div className="flex-1 flex overflow-hidden">
              <div className="w-36 border-r-2 border-black bg-[#F6F5FA] p-3 flex flex-col justify-between max-sm:hidden">
                <div className="space-y-1.5">
                  <div className="bg-[#7B5CF5]/15 border border-black text-[#7B5CF5] text-[10px] font-bold px-2 py-1.5 rounded flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CF5]" />
                    Dashboard
                  </div>
                  <div className="text-[10px] font-bold text-[#615E72] px-2 py-1.5 rounded flex items-center gap-2 hover:bg-neutral-100 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    Invoices
                  </div>
                  <div className="text-[10px] font-bold text-[#615E72] px-2 py-1.5 rounded flex items-center gap-2 hover:bg-neutral-100 transition-colors">
                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    Inventory
                  </div>
                </div>
                <div className="border-t border-black/15 pt-2 text-[9px] font-mono text-neutral-400 text-center">
                  V.2.0.18
                </div>
              </div>

              <div className="flex-1 p-5 overflow-y-auto space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F6F5FA] border-2 border-black p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-mono font-bold text-[#615E72]">Weekly Profit</span>
                      <h4 class="text-base font-bold text-black font-mono mt-0.5">₹48,920.00</h4>
                    </div>
                    <div className="w-7 h-7 bg-[#C3FF16]/20 border border-black rounded flex items-center justify-center">
                      📊
                    </div>
                  </div>
                  <div className="bg-[#F6F5FA] border-2 border-black p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-mono font-bold text-[#615E72]">Register</span>
                      <h4 class="text-base font-bold text-black font-mono mt-0.5">Manjeri</h4>
                    </div>
                    <Printer size={16} />
                  </div>
                </div>

                <div className="border-2 border-black rounded-xl overflow-hidden bg-white">
                  <div className="bg-[#160F2E] text-white font-mono text-[9px] px-3 py-1.5 flex justify-between font-bold">
                    <span>Recent Transactions</span>
                  </div>
                  <div className="divide-y border-black font-mono text-[9px] text-black">
                    <div className="px-3 py-2 flex justify-between items-center bg-[#F6F5FA]/50">
                      <span className="font-bold">#1024 - Raman Hyper</span>
                      <span class="font-bold">₹4,890.00</span>
                      <span className="bg-[#C3FF16] px-1.5 py-0.5 border border-black text-[8px] font-bold">PAID</span>
                    </div>
                    <div className="px-3 py-2 flex justify-between items-center">
                      <span className="font-bold">#1023 - Nilambur Meds</span>
                      <span class="font-bold">₹1,240.00</span>
                      <span className="bg-[#C3FF16] px-1.5 py-0.5 border border-black text-[8px] font-bold">PAID</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Mobile phone screen mockup */}
          <div className="absolute -bottom-8 -right-8 w-[210px] h-[380px] bg-black p-3 rounded-[36px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-3">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700" />
              <div className="w-8 h-[2px] bg-neutral-800 rounded-full" />
            </div>

            <div className="w-full h-full bg-white rounded-[26px] overflow-hidden relative flex flex-col p-3.5 pt-5 border-2 border-black">
              <div className="flex justify-between items-center pb-2 border-b border-black/10 text-[8px] font-mono font-bold text-black">
                <span>Enfraa Lite</span>
                <span className="text-[8px] text-neutral-400">02:58 PM</span>
              </div>

              <div className="flex-1 flex flex-col justify-between py-2.5 text-black">
                <div>
                  <span className="text-[8px] uppercase font-mono font-bold text-[#615E72] block mb-1">Keypad Billing</span>
                  <div className="bg-[#F6F5FA] border border-black p-2 rounded text-right font-mono font-bold text-sm text-black mb-2">
                    ₹ 410.00
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 font-mono text-[9px] text-center font-bold">
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">1</button>
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">2</button>
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">3</button>
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">4</button>
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">5</button>
                    <button className="p-1 bg-[#F6F5FA] border border-black/15 rounded">C</button>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-dashed border-black/20">
                  <button className="w-full py-2 bg-[#7B5CF5] text-white text-[10px] font-bold uppercase tracking-wider rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Charge POS ⚡
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee scrolling */}
      <div className="w-full bg-[#160F2E] border-y-2 border-black py-4 overflow-hidden relative z-20">
        <div className="flex gap-8 whitespace-nowrap text-xs font-pixel text-[#AFA9EC] uppercase tracking-widest">
          <span>• SUPERMARKETS • RETAIL STORES • RESTAURANTS • MEDICAL SHOPS • WHOLESALE • SMALL BUSINESSES • FASHION STORES • SERVICE COMPANIES</span>
        </div>
      </div>

      {/* Core Modules */}
      <section id="features" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="text-[#7B5CF5] font-mono uppercase tracking-widest text-xs font-bold">THE CORE BILLING ENGINE</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black">Engineered for growth.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:-translate-y-1 transition-all group">
            <Receipt className="text-[#7B5CF5] mb-6" size={28} />
            <h3 className="text-lg font-bold text-black mb-2 uppercase">POS & Billing</h3>
            <p className="text-[#615E72] text-xs leading-relaxed">Generate compliant invoice bills under 3 seconds. Pre-built with barcode integrations, discount setups, and local UPI configurations.</p>
          </div>
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:-translate-y-1 transition-all group">
            <Wallet className="text-[#7B5CF5] mb-6" size={28} />
            <h3 className="text-lg font-bold text-black mb-2 uppercase">Finance Logs</h3>
            <p className="text-[#615E72] text-xs leading-relaxed">Log every single coin automatically. Track cash registers, verify profit & loss ledgers, record vendor payments, and generate monthly tax files.</p>
          </div>
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:-translate-y-1 transition-all group">
            <Boxes className="text-[#7B5CF5] mb-6" size={28} />
            <h3 className="text-lg font-bold text-black mb-2 uppercase">Inventory System</h3>
            <p className="text-[#615E72] text-xs leading-relaxed">Track individual item stock values across multiple shelf racks. Set low-stock warning thresholds to auto-order and manage distributor cycles.</p>
          </div>
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:-translate-y-1 transition-all group">
            <TrendingUp className="text-[#7B5CF5] mb-6" size={28} />
            <h3 className="text-lg font-bold text-black mb-2 uppercase">Live Analytics</h3>
            <p className="text-[#615E72] text-xs leading-relaxed">Audit sales performance live from any device. Access detailed analytics showing bestseller configurations, staff logins, and monthly audits.</p>
          </div>
        </div>
      </section>

      {/* Sector Showcase Folders */}
      <section id="sectors" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 bg-[#F6F5FA] border-y-2 border-black">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#7B5CF5] font-mono uppercase tracking-widest text-xs font-bold">TAILORED INDUSTRY SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black">Built For Every Business Sector</h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-end overflow-x-auto w-full no-scrollbar px-4 -rotate-1 z-20 gap-1">
            {Object.keys(sectorData).map((key) => {
              const item = sectorData[key];
              const isActive = activeSector === key;
              return (
                <button 
                  key={key}
                  onClick={() => setActiveSector(key)}
                  className="shrink-0 text-xs md:text-sm px-6 py-3 text-black font-bold rounded-t-xl border-x-2 border-t-2 border-black text-center transition-all duration-200"
                  style={{ 
                    backgroundColor: item.color, 
                    transform: isActive ? 'translateY(4px)' : 'translateY(12px)',
                    zIndex: isActive ? 30 : 10
                  }}
                >
                  {item.emoji} {item.title.toUpperCase()}
                </button>
              )
            })}
          </div>

          <div 
            className="w-full border-2 border-black rounded-b-3xl rounded-tr-xl p-8 md:p-12 text-black transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(22,15,46,1)] relative z-10 -mt-[2px]" 
            style={{ backgroundColor: sectorData[activeSector].color }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="w-full border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white relative aspect-video md:aspect-square md:h-[300px]">
                <div className="absolute top-2 left-2 bg-black text-white font-mono text-[9px] px-2 py-0.5 z-10 rounded">PREVIEW_WINDOW.BIN</div>
                <div className={`w-full h-full flex flex-col justify-center items-center p-6 text-center space-y-4 bg-gradient-to-br ${sectorData[activeSector].gradient}`}>
                  <span className="text-6xl">{sectorData[activeSector].emoji}</span>
                  <div>
                    <h4 className="font-bold text-lg leading-tight uppercase text-neutral-900">{sectorData[activeSector].title} POS</h4>
                    <p className="text-xs text-neutral-700 mt-1 font-mono">Terminal active and connected.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase font-bold tracking-widest px-3 py-1 bg-black text-white rounded-full inline-block">SECTOR PACKAGE</span>
                  <h3 className="text-3xl font-bold uppercase mt-2">{sectorData[activeSector].title}</h3>
                </div>
                
                <p className="text-sm leading-relaxed text-black/90 font-medium">
                  {sectorData[activeSector].desc}
                </p>

                <div className="border-t border-black/20 pt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black/60 mb-3">IMPACT FEATURES:</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs font-bold text-black/80">
                    {sectorData[activeSector].bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">⚡ {b}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (WhatsApp pre-filled redirects configured) */}
      <section id="pricing" class="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#7B5CF5] font-mono uppercase tracking-widest text-xs font-bold">TRANSPARENT PRICING PLANS</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black">Simple plans, limitless growth.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(22,15,46,1)] hover:shadow-[8px_8px_0px_0px_rgba(22,15,46,1)] hover:-translate-y-1 transition-all">
            <div className="space-y-6 text-black">
              <h3 className="text-xl font-bold uppercase">Trial Plan</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-mono">₹</span>
                <span className="text-6xl font-bold font-mono">99</span>
                <span className="text-xs font-mono text-[#615E72]">/ 30 days</span>
              </div>
              <ul className="space-y-3 text-xs text-[#615E72]">
                <li>✔ Full system access</li>
                <li>✔ Billing & invoicing</li>
                <li>✔ Inventory management</li>
                <li>✔ Financial analysis tools</li>
              </ul>
            </div>
            {/* WhatsApp direct redirect link */}
            <a 
              href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20am%20interested%20in%20the%20%E2%82%B999%20Trial%20Plan%20(30%20Days).%0A%0APlease%20help%20me%20get%20started." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 block text-center border-2 border-black text-black font-bold uppercase text-xs py-4 rounded hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Trial
            </a>
          </div>

          {/* Plan 2 */}
          <div className="bg-[#7B5CF5] border-2 border-black p-8 rounded-2xl flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(22,15,46,1)] relative hover:-translate-y-1 transition-all text-white">
            <span className="absolute top-2 right-4 bg-[#C3FF16] text-black font-mono font-bold text-[9px] px-2 py-0.5 border border-black shadow-sm rotate-3">POPULAR</span>
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase">Monthly Plan</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-mono">₹</span>
                <span className="text-6xl font-bold font-mono">799</span>
                <span className="text-xs font-mono text-white/80">/ month</span>
              </div>
              <ul className="space-y-3 text-xs text-white">
                <li>✔ Unlimited POS Billing</li>
                <li>✔ Advanced inventory warnings</li>
                <li>✔ Finance & margin tracking</li>
                <li>✔ Customer ledgers & history</li>
              </ul>
            </div>
            {/* WhatsApp direct redirect link */}
            <a 
              href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20am%20interested%20in%20the%20%E2%82%B9799%20Monthly%20Plan.%0A%0APlease%20provide%20setup%20details." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 block text-center bg-[#C3FF16] text-black font-bold uppercase text-xs py-4 rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a6d812] transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(22,15,46,1)] hover:shadow-[8px_8px_0px_0px_rgba(22,15,46,1)] hover:-translate-y-1 transition-all">
            <div className="space-y-6 text-black">
              <h3 className="text-xl font-bold uppercase">Annual Plan</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-mono">₹</span>
                <span className="text-6xl font-bold font-mono">7,999</span>
                <span className="text-xs font-mono text-[#615E72]">/ year</span>
              </div>
              <ul className="space-y-3 text-xs text-[#615E72]">
                <li>✔ Everything in monthly plan</li>
                <li>✔ Save ₹1,589 annually</li>
                <li>✔ High priority support</li>
                <li>✔ Cloud backup syncs</li>
              </ul>
            </div>
            {/* WhatsApp direct redirect link */}
            <a 
              href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0A%0AI%20am%20interested%20in%20the%20%E2%82%B97,999%20Annual%20Plan.%0A%0APlease%20share%20onboarding%20details." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 block text-center border-2 border-black text-black font-bold uppercase text-xs py-4 rounded hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Choose Annual
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 w-full bg-[#F6F5FA] py-20 border-y-2 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#7B5CF5] font-mono uppercase tracking-widest text-xs font-bold">ANY QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-black mt-2">Frequently Answered Queries</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-6 rounded-xl shadow-neubrutal-sm text-black">
              <span className="text-[#7B5CF5] font-pixel text-xs font-bold block mb-1">Q1. Is this a co-working space?</span>
              <p class="text-xs text-[#615E72] leading-relaxed font-semibold">No, Enfraa is not a co-working space. It is a SaaS platform providing software engines to help local businesses manage billing, inventories, and cashbooks.</p>
            </div>
            <div class="bg-white border-2 border-black p-6 rounded-xl shadow-neubrutal-sm text-black">
              <span className="text-[#7B5CF5] font-pixel text-xs font-bold block mb-1">Q2. Do we need to pay to use the space/software?</span>
              <p class="text-xs text-[#615E72] leading-relaxed font-semibold">Enfraa offers a complete 30-day trial plan for only ₹99. Our monthly and annual enterprise options scale dynamically with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-80 bg-white p-4 pb-12 rounded border-2 border-black">
              <div className="bg-neutral-100 aspect-video overflow-hidden border-2 border-black flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-indigo-900/10 to-slate-900/20">
                <span className="text-3xl mb-1">📍</span>
                <h4 className="font-bold text-black text-sm">ENFRAA HEADQUARTERS</h4>
                <p className="text-xs text-[#615E72] font-mono mt-1 font-bold">Manjeri, Malappuram<br />Kerala, India</p>
              </div>
              <div className="absolute bottom-2 left-0 right-0 text-center font-mono text-xs font-bold text-neutral-800">
                Manjeri Office 🌴
              </div>
            </div>

            <div className="bg-white border-2 border-black p-5 rounded-xl w-80 font-mono text-xs text-black space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#7B5CF5]" />
                <a href="tel:+917306396562" className="hover:text-[#7B5CF5] font-bold">+91 7306396562</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#7B5CF5]" />
                <a href="mailto:enfraaoficial@gmail.com" className="hover:text-[#7B5CF5] font-bold">enfraaoficial@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F6F5FA] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold uppercase text-black mb-2">Request a Product Demo</h3>
            <p className="text-sm text-[#615E72] mb-6 font-medium">Leave your details and our team will demonstrate Enfraa configured to your specific sector.</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#7B5CF5]">Your Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleInputChange} className="bg-white border-2 border-black px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7B5CF5]" placeholder="K. Haridas" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#7B5CF5]">Business Name</label>
                  <input type="text" id="business" required value={formData.business} onChange={handleInputChange} className="bg-white border-2 border-black px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7B5CF5]" placeholder="Haridas Agencies" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#7B5CF5]">Email</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleInputChange} className="bg-white border-2 border-black px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7B5CF5]" placeholder="haridas@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#7B5CF5]">Phone</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={handleInputChange} className="bg-white border-2 border-black px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7B5CF5]" placeholder="+91 9895000000" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#7B5CF5]">Message</label>
                <textarea id="message" value={formData.message} onChange={handleInputChange} rows={3} className="bg-white border-2 border-black px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7B5CF5] resize-none" placeholder="We need bulk billing, inventory log support..."></textarea>
              </div>
              <button type="submit" className="bg-[#C3FF16] text-black font-bold uppercase text-xs py-4 px-8 rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a6d812] transition-all flex items-center gap-2">
                <span>Request Demo</span>
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Chat Button */}
      <a 
        href="https://wa.me/917306396562?text=Hello%20Enfraa%20Team,%0AI%20would%20like%20to%20know%20more%20about%20Enfraa." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 448 512" className="w-6 h-6 fill-current">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[#160F2E] text-white pt-16 pb-8 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-black rounded-lg">
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                  <text x="50%" y="65%" text-anchor="middle" fontFamily="Anton, sans-serif" fontSize="52" fill="url(#logoGrad)">En</text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">En<span className="text-[#AFA9EC]">Fraa</span></span>
                <span className="text-[8px] font-mono text-[#AFA9EC] uppercase tracking-widest mt-0.5">Simplifying Business</span>
              </div>
            </div>
            <p className="text-xs text-[#A09ABD] leading-relaxed max-w-sm">
              Smart billing, real-time inventory management, cash flow ledgers, and comprehensive growth analytics software designed for modern industries.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/enfraa.official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black text-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/enfraaofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white border-2 border-black text-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-center items-start">
            <div className="bg-[#7B5CF5]/20 border border-[#7B5CF5]/40 p-4 rounded-xl rotate-2">
              <p className="font-mono text-[9px] text-[#5B3FD4] mb-1 font-bold">LOCAL ROOTS 🌴</p>
              <p className="font-mono text-[#160F2E] text-sm font-bold leading-normal">
                ചെക്ക് - ഇൻ ചെയ്തോ? <br />
                അപ്പോൾ നമുക്ക് <span className="text-[#5B3FD4]">പണിതു തുടങ്ങാം!</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#AFA9EC] font-bold">RESOURCES</h4>
            <ul className="space-y-2 text-xs text-[#A09ABD]">
              <li><a href="#features" className="hover:text-white">Core Modules</a></li>
              <li><a href="#sectors" className="hover:text-white">Sectors</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing Plans</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#A09ABD]">
          <span>© 2026 Enfraa Systems Private Limited. All rights reserved.</span>
          <span>crafted by Ajlan with ❤️</span>
        </div>
      </footer>

    </div>
  )
}
