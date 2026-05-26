/**
 * Enfraa | Simplifying Business
 * Zine/Neubrutalist Landing Page Interactions
 */

// -------------------------------------------------------------
// 1. SECTOR SHOWCASE DATA
// -------------------------------------------------------------
const sectorData = {
  supermarket: {
    title: "Supermarkets",
    desc: "Engineered to process massive quantities of fast-moving products. Complete barcode infrastructure, fast touch-point register billing, supplier logs, automated rack stock alerts, and daily sales diagnostics.",
    emoji: "🛒",
    gradient: "from-orange-200 to-amber-100",
    bullets: [
      "⚡ Fast POS billing",
      "⚡ Barcode support",
      "⚡ Product tracking",
      "⚡ Stock alerts",
      "⚡ Daily sales reports"
    ]
  },
  retail: {
    title: "Retail Stores",
    desc: "Keep absolute track of customer purchasing trends and shelf inventories. Manage multiple sizes, colors, and SKUs easily, issue modern digital tax invoices, log credit customers, and generate month-end margins reports.",
    emoji: "🏪",
    gradient: "from-lime-200 to-emerald-100",
    bullets: [
      "⚡ Invoice management",
      "⚡ Customer records",
      "⚡ Inventory control",
      "⚡ Sales analytics",
      "⚡ Multiple branch sync"
    ]
  },
  restaurant: {
    title: "Restaurants",
    desc: "Keep your kitchen and tables in absolute sync. Manage active kitchen order tickets (KOT), update items and menu pricing instantly, keep tabs on ingredient usage, and track daily cash registers.",
    emoji: "🍽",
    gradient: "from-yellow-200 to-amber-100",
    bullets: [
      "⚡ Order billing",
      "⚡ Menu management",
      "⚡ Expense tracking",
      "⚡ Daily reports",
      "⚡ Table status log"
    ]
  },
  medical: {
    title: "Medical Shops",
    desc: "A compliant stock and invoice engine designed for pharmacies. Real-time batch-number tracking, drug expiry alerts, schedule H alerts, purchase ledger tracking, and GST report generation.",
    emoji: "💊",
    gradient: "from-pink-200 to-purple-100",
    bullets: [
      "⚡ Product inventory",
      "⚡ Billing support",
      "⚡ Stock monitoring",
      "⚡ Expiry alerts",
      "⚡ GST reports"
    ]
  },
  wholesale: {
    title: "Wholesale Business",
    desc: "Handle bulk distributions and supplier chains like clockwork. Flexible pricing groups, credit limit alerts, shipping manifest generation, bulk invoice print jobs, and deep financial debt ledgers.",
    emoji: "📦",
    gradient: "from-teal-200 to-emerald-100",
    bullets: [
      "⚡ Bulk billing",
      "⚡ Inventory tracking",
      "⚡ Customer management",
      "⚡ Finance reports",
      "⚡ Vendor ledgers"
    ]
  },
  small: {
    title: "Small Businesses",
    desc: "Zero-bloat billing and ledger tracking. Perfect for local shops and service creators who want to log cash inputs, send receipts on WhatsApp, track small expenditures, and audit monthly margins.",
    emoji: "💼",
    gradient: "from-indigo-200 to-purple-100",
    bullets: [
      "⚡ Easy setup",
      "⚡ Expense tracking",
      "⚡ Business insights",
      "⚡ Monthly analytics",
      "⚡ WhatsApp receipts"
    ]
  }
};

// -------------------------------------------------------------
// 2. DYNAMIC FOLDER SWITCHER LOGIC
// -------------------------------------------------------------
function switchSector(sectorKey, color, activeBtn) {
  const data = sectorData[sectorKey];
  if (!data) return;

  const folderBody = document.getElementById("folderBody");
  const folderContent = document.getElementById("folderContent");

  // Fade out current content
  folderContent.style.opacity = "0";
  folderContent.style.transform = "translateY(5px)";

  setTimeout(() => {
    // Update folder body background color
    folderBody.style.backgroundColor = color;

    // Render new content
    folderContent.innerHTML = `
      <!-- Left Preview -->
      <div class="w-full border border-black rounded-2xl overflow-hidden shadow-neubrutal-sm bg-white relative aspect-video md:aspect-square md:h-[300px]">
        <div class="absolute top-2 left-2 bg-black text-white font-mono text-[9px] px-2 py-0.5 z-10 rounded">PREVIEW_WINDOW.BIN</div>
        <div class="w-full h-full flex flex-col justify-center items-center p-6 text-center space-y-4 bg-gradient-to-br ${data.gradient}">
          <span class="text-6xl animate-bounce-slow">${data.emoji}</span>
          <div>
            <h4 class="font-bold text-lg leading-tight uppercase font-pixel text-neutral-900">${data.title} POS</h4>
            <p class="text-xs text-neutral-700 mt-1 font-mono">Terminal active and connected.</p>
          </div>
        </div>
      </div>

      <!-- Right Content Details -->
      <div class="flex flex-col justify-center space-y-6">
        <div>
          <span class="text-xs font-pixel uppercase font-bold tracking-widest px-3 py-1 bg-black text-white rounded-full inline-block">SECTOR PACKAGE</span>
          <h3 class="text-3xl font-bold uppercase mt-2">${data.title}</h3>
        </div>
        
        <p class="text-sm leading-relaxed text-black/90 font-medium">
          ${data.desc}
        </p>

        <div class="border-t border-black/30 pt-6">
          <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-black/60 mb-3">IMPACT FEATURES:</h4>
          <ul class="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs font-bold text-black/80">
            ${data.bullets.map(b => `<li class="flex items-center gap-2">${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    // Fade in new content
    folderContent.style.opacity = "1";
    folderContent.style.transform = "translateY(0)";
  }, 250);

  // Update tabs styles
  const allTabs = document.querySelectorAll(".folder-tab");
  allTabs.forEach(tab => {
    // Reset positions, z-indexes, and active states
    tab.style.transform = "translateY(12px)";
    tab.style.zIndex = "10";
  });

  // Make clicked tab active
  activeBtn.style.transform = "translateY(4px)";
  activeBtn.style.zIndex = "30";
}

// -------------------------------------------------------------
// 3. CONTACT FORM REDIRECTION TO WHATSAPP
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const business = document.getElementById("business").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      // Prefilled WhatsApp message
      const text = `Hello Enfraa Team,\n\nI would like to request a product demo for my business.\n\nMy Details:\n• Name: ${name}\n• Business: ${business}\n• Email: ${email}\n• Phone: ${phone}\n• Message: ${message}`;
      
      const waUrl = `https://wa.me/917306396562?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp tab
      window.open(waUrl, "_blank");
      
      form.reset();
    });
  }

  // Set initial animations transition values
  const folderContent = document.getElementById("folderContent");
  if (folderContent) {
    folderContent.style.transition = "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }
});
