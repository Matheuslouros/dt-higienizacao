import React from "react";
import { Link } from "react-router-dom";
import { services } from "../mock";

const Servicos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center fade-up">
        <h1 className="text-dt-coral text-3xl sm:text-4xl md:text-5xl font-heading">
          Cuidando dos seus estofados com excelência
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Na DT Higienização cuidamos da limpeza completa de sofás, cadeiras e
          estofados automotivos, removendo sujeiras profundas, manchas e odores.
          Utilizamos produtos e equipamentos profissionais para garantir
          higienização segura e eficiente, preservando o tecido e prolongando a
          vida útil dos estofados.
        </p>
      </div>

      <div className="mt-14 space-y-16">
        {services.map((service, idx) => (
          <article
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {service.images.map((img, i) => (
                <div key={i} className="img-card aspect-square">
                  <img src={img} alt={`${service.title} ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-dt-coral text-2xl sm:text-3xl md:text-4xl font-heading">
                {service.title}
              </h2>
              <p className="mt-4 text-white/90 leading-relaxed">{service.description}</p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center bg-[#E15400] hover:bg-[#c94a00] transition-colors text-white px-5 py-2.5 rounded-md font-semibold"
              >
                Solicitar orçamento
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
