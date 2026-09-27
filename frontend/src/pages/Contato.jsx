import React, { useState } from "react";
import { Phone, Instagram, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { siteInfo } from "../mock";
import { useToast } from "../hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.mensagem) {
      toast({
        title: "Preencha os campos obrigatórios",
        description: "Informe pelo menos seu nome e uma mensagem.",
      });
      return;
    }
    setSubmitting(true);
    // Store locally for now (mock)
    const existing = JSON.parse(localStorage.getItem("dt_leads") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("dt_leads", JSON.stringify(existing));

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato. Obrigado!",
      });
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center fade-up">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-heading">Contato</h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/90">
          Entre em contato com a DT Higienização e solicite seu orçamento sem
          compromisso.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-dt-coral text-2xl font-heading">Fale conosco</h2>
          <p className="mt-2 text-white/80">Prefere falar diretamente? Estamos por aqui:</p>

          <div className="mt-6 space-y-4">
            <a
              href={`https://wa.me/${siteInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">WhatsApp</p>
                <p className="text-white font-medium">{siteInfo.phone}</p>
              </div>
            </a>

            <a
              href={`tel:+55${siteInfo.phoneRaw}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="w-11 h-11 rounded-full bg-[#E15400] flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Telefone</p>
                <p className="text-white font-medium">{siteInfo.phone}</p>
              </div>
            </a>

            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="w-11 h-11 rounded-full bg-[#E85C5C] flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Instagram</p>
                <p className="text-white font-medium">{siteInfo.instagram}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Atendimento</p>
                <p className="text-white font-medium">{siteInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-dt-coral text-2xl font-heading">Solicite um orçamento</h2>
          <p className="mt-2 text-white/80">
            Preencha o formulário abaixo e retornaremos o mais breve possível.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Nome *</label>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-white/40 focus:outline-none px-4 py-2.5 text-white placeholder-white/40"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">E-mail</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white/10 border border-white/15 focus:border-white/40 focus:outline-none px-4 py-2.5 text-white placeholder-white/40"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Telefone</label>
                <input
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white/10 border border-white/15 focus:border-white/40 focus:outline-none px-4 py-2.5 text-white placeholder-white/40"
                  placeholder="(31) 99999-9999"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Mensagem *</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-md bg-white/10 border border-white/15 focus:border-white/40 focus:outline-none px-4 py-2.5 text-white placeholder-white/40 resize-none"
                placeholder="Conte-nos qual serviço você precisa..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-[#E15400] hover:bg-[#c94a00] disabled:opacity-70 transition-colors text-white px-5 py-2.5 rounded-md font-semibold"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contato;
