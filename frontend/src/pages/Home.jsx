import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import {
  heroImages,
  homeFeatures,
  servicesSummary,
  testimonialsGallery,
  logoImage,
} from "../mock";

const Home = () => {
  return (
    <div>
      {/* Hero / Instagram card + gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <a
            href="https://www.instagram.com/_dtservicos?igsh=dmd4NWU0aWNrbXZ4"
            target="_blank"
            rel="noopener noreferrer"
            className="img-card fade-up aspect-square"
          >
            <img src={heroImages[0]} alt="DT Serviços no Instagram" loading="lazy" />
          </a>
          <div className="img-card fade-up-delay-1 aspect-square">
            <img src={heroImages[1]} alt="Antes e depois higienização" loading="lazy" />
          </div>
          <div className="img-card fade-up-delay-2 aspect-square">
            <img src={heroImages[2]} alt="Trabalho em estofados" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Features numbered list (title from source) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-sm">
          <h2 className="text-dt-coral text-2xl sm:text-3xl md:text-4xl font-heading leading-snug">
            Por que escolher a DT Higienização
          </h2>
          <p className="mt-3 text-white/85 max-w-3xl">
            A DT Higienização é especializada em serviços de higienização de sofás,
            cadeiras e estofados automotivos, removendo sujeira, manchas e odores
            de forma profunda e segura. Utilizamos produtos e técnicas
            profissionais para garantir mais saúde, conforto e durabilidade para
            seus estofados.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeFeatures.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="shrink-0 mt-1 text-[#E85C5C]">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-white/70 text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-white leading-snug">{f}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              to="/sobre-nos"
              className="inline-flex items-center gap-2 bg-white text-[#1B4FA8] hover:bg-[#E85C5C] hover:text-white transition-colors px-5 py-2.5 rounded-md font-semibold"
            >
              Sobre nós <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence section with logo image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-dt-coral text-3xl sm:text-4xl md:text-5xl font-heading leading-tight">
              Cuidando dos seus estofados com excelência
            </h2>
            <p className="mt-5 text-white/90 leading-relaxed">
              Na DT Higienização cuidamos da limpeza completa de sofás, cadeiras
              e estofados automotivos, removendo sujeiras profundas, manchas e
              odores. Utilizamos produtos e equipamentos profissionais para
              garantir higienização segura e eficiente, preservando o tecido e
              prolongando a vida útil dos estofados.
            </p>

            <ul className="mt-6 space-y-3">
              {servicesSummary.map((s, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#E85C5C]" />
                  <span className="text-white/95">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 bg-[#E15400] hover:bg-[#c94a00] transition-colors text-white px-5 py-2.5 rounded-md font-semibold"
              >
                Todos os serviços <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="img-card aspect-square max-w-md mx-auto w-full bg-white">
            <img src={logoImage} alt="Logo DT Higienização" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Testimonials gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-dt-coral text-3xl sm:text-4xl font-heading text-center">
          Depoimentos de clientes
        </h2>
        <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">
          Alguns dos resultados que entregamos com muito cuidado, técnica e dedicação.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonialsGallery.slice(0, 12).map((src, idx) => (
            <div key={idx} className="img-card aspect-square">
              <img src={src} alt={`Depoimento ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/depoimentos"
            className="inline-flex items-center gap-2 bg-white text-[#1B4FA8] hover:bg-[#E85C5C] hover:text-white transition-colors px-5 py-2.5 rounded-md font-semibold"
          >
            Ver todos os depoimentos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
