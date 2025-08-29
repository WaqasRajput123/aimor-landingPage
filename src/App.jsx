import React, { useState, useEffect } from "react";

// 🔥 AIMOR — Single-file React + Tailwind landing page
// How to use:
// 1) Make sure Tailwind is set up in your React app.
// 2) Drop this file anywhere in src/ (e.g., src/AIMORSite.jsx)
// 3) Import and render <AIMORSite /> in App.jsx
// 4) Replace placeholder images in /public/images/* with your brand assets.

export default function AIMORSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="scroll-smooth text-gray-900 bg-white selection:bg-black selection:text-white">
      <Header scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} navItems={navItems} />

      <main>
        <Hero />
        <Features />
        <Shop />
        <About />
        <Contact />
        <Cta />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}

function Header({ scrolled, mobileOpen, setMobileOpen, navItems }) {
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-white/70 shadow-sm" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center text-lg font-bold">a</div>
            <span className="font-extrabold tracking-tight text-xl">aimor</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium hover:text-black/80 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90 active:scale-[.98] transition">
              Shop Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {mobileOpen ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3.75 17.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-black/5">
                {n.label}
              </a>
            ))}
            <a href="#shop" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold bg-black text-white text-center">
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] grid place-items-center overflow-hidden">
      <img
        src="/images/Hero1.webp"
        alt="aimor apparel hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/10 backdrop-blur text-white text-xs border border-white/20">
          380gsm fleece • Export‑quality prints
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Streetwear that actually lasts.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/85 text-base sm:text-lg">
          Designed for Gen Z. Built for everyday. Hoodies, tees, and more from aimor.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#shop" className="rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:shadow-lg active:scale-[.98] transition">
            Shop the drop
          </a>
          <a href="#about" className="rounded-2xl border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 active:scale-[.98] transition">
            Why aimor?
          </a>
        </div>
      </div>

      {/* floating badges */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden md:block absolute left-10 bottom-16 rounded-2xl bg-white/90 px-4 py-3 shadow-lg">
          <p className="text-xs font-semibold">DTF Print • Crack‑Resistant</p>
        </div>
        <div className="hidden md:block absolute right-10 top-24 rounded-2xl bg-white/90 px-4 py-3 shadow-lg">
          <p className="text-xs font-semibold">1000+ Happy Customers</p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Heavyweight Build", desc: "380gsm fleece for extra warmth and structure." },
    { title: "Premium Prints", desc: "Deep, vivid DTF that survives the wash cycle." },
    { title: "Unisex Fit", desc: "Designed to look good on everyone, every day." },
  ];
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Why choose aimor</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-bold">✓</div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">Tested on real streets, not runways.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shop() {
  const products = [
    { id: 1, name: "AIMOR Classic T-Shirt", price: "Rs. 4,499", img: "/images/5ESHT804-BLK_2.webp" },
    { id: 2, name: "Street Logo T-Shirt", price: "Rs. 4,799", img: "/images/5ESHT804-RTO_2.webp" },
    { id: 3, name: "Oversized Tee — Black", price: "Rs. 1,799", img: "/images/K5AST252-KHK_2_bd0af615-08eb-43a2-84c6-cce50d02e701.webp" },
    { id: 4, name: "Oversized Tee — White", price: "Rs. 1,799", img: "/images/K5CST618-PNK_1.webp" },
    { id: 5, name: "Cargo Joggers", price: "Rs. 3,499", img: "/images/K5BST464-OTM_1_copy.webp" },
    { id: 6, name: "Cap — Night", price: "Rs. 1,199", img: "/images/K5DST666-MLT_1.webp" },
  ];

  return (
    <section id="shop" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:3xl md:text-3xl font-extrabold tracking-tight">Shop the latest</h2>
            <p className="text-gray-600 mt-1 text-sm">Limited drops. Restocks happen fast — stay ready.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-black/5">
            Need help?
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <div className="mt-1 text-sm text-gray-600">Unisex • True to size</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold">{p.price}</span>
                  <button className="rounded-xl px-3 py-2 text-sm font-semibold bg-black text-white hover:opacity-90 active:scale-[.98]">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Built for real life</h2>
        <p className="mt-4 text-gray-700">
          aimor is a Pakistan‑based streetwear label focused on quality basics with a bold twist. We obsess over fabric weight, print durability, and fits that look as good in class as they do on the gram. No fast fashion shortcuts.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-black text-white grid place-items-center text-xs">✓</span> 380gsm fleece hoodies</li>
          <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-black text-white grid place-items-center text-xs">✓</span> Export‑quality DTF prints</li>
          <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-black text-white grid place-items-center text-xs">✓</span> Oversized tees & relaxed joggers</li>
          <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-black text-white grid place-items-center text-xs">✓</span> Fast local shipping</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Contact us</h2>
        <p className="mt-2 text-gray-600 text-sm">Collabs, orders, questions — slide in.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <form className="rounded-2xl p-6 ring-1 ring-black/5 shadow-sm bg-white">
            <div className="grid gap-4">
              <Input label="Name" id="name" type="text" placeholder="Your name" />
              <Input label="Email" id="email" type="email" placeholder="you@example.com" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us what's up" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
              </div>
              <button type="submit" className="rounded-xl px-4 py-2 bg-black text-white text-sm font-semibold hover:opacity-90 active:scale-[.98]">Send</button>
            </div>
          </form>

          <div className="rounded-2xl p-6 ring-1 ring-black/5 shadow-sm bg-white">
            <h3 className="font-semibold">Reach us directly</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><strong>Email:</strong> hello@AIMOR.shop</li>
              <li><strong>Instagram:</strong> @aimor</li>
              <li><strong>Phone/WhatsApp:</strong> +92 322 5941395</li>
              <li><strong>Address:</strong> ShakarGarh, Punjab, Pakistan</li>
            </ul>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-100 grid place-items-center text-xs text-gray-500">
              Embed map here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-black to-gray-800 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Join the aimor list</h3>
          <p className="mt-2 text-white/80 text-sm">Drop alerts, exclusive discounts, behind‑the‑scenes.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-white/40" />
            <button className="rounded-xl px-5 py-3 bg-white text-black font-semibold active:scale-[.98]">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-black text-white grid place-items-center text-sm font-bold">a</div>
            <span className="font-extrabold tracking-tight">aimor</span>
          </a>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} aimor. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Input({ label, id, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      <input id={id} {...rest} className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/20" />
    </div>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg bg-black text-white active:scale-95"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
