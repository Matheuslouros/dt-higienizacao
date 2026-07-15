import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Instagram, Phone, MessageCircle, Menu, X } from "lucide-react";
import { siteInfo, navLinks } from "../mock";

const Layout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-dt-blue">
      {/* Top thin bar */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4FA8] hover:text-[#E15400] transition-colors flex items-center gap-2"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${siteInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1B4FA8] hover:text-[#E15400] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{siteInfo.phone}</span>
          </a>
        </div>
      </div>

      {/* Orange header */}
      <header className="bg-dt-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
          <h1 className="font-brand text-4xl sm:text-5xl md:text-6xl tracking-wide">
            {siteInfo.brand}
          </h1>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.25em] font-semibold">
            {siteInfo.tagline}
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `nav-link text-[15px] font-medium ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav toggle */}
        <div className="md:hidden max-w-7xl mx-auto px-4 pb-4 flex justify-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-4 py-2 transition-colors"
            aria-label="Abrir menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-sm font-medium">Menu</span>
          </button>
        </div>
        {open && (
          <nav className="md:hidden bg-dt-orange border-t border-white/10">
            <ul className="flex flex-col items-center py-4 gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `nav-link block px-4 py-2 text-[15px] ${isActive ? "active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-dt-blue text-white">
        <Outlet />
      </main>

      {/* Contact block (mimics footer contact info) */}
      <section className="bg-dt-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg">DT Higienização</h3>
            <p className="text-white/80">{siteInfo.location}</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <a
              href={`https://wa.me/${siteInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-lg hover:text-[#E85C5C] transition-colors"
            >
              {siteInfo.phone}
            </a>
            <p className="text-white/80">WhatsApp</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-lg hover:text-[#E85C5C] transition-colors"
            >
              {siteInfo.instagram}
            </a>
            <p className="text-white/80">Instagram</p>
          </div>
        </div>
      </section>

      <footer className="bg-dt-blue-dark border-t border-white/10 text-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <span>© {new Date().getFullYear()} DT Higienização. Todos os direitos reservados.</span>
          <span>Cuidando dos seus estofados com excelência.</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5531987041746"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Layout;
