import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

export default function CampanhaSite() {
  const [active, setActive] = useState(null);

  const toggle = (card) => {
    setActive(active === card ? null : card);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 via-yellow-400 to-blue-700 text-white">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Propostas Renato para Deputado Federal
        </h1>
        <Button className="bg-white text-black">Apoiar</Button>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Família, Segurança e Empreendedorismo
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          Um compromisso com o desenvolvimento do Brasil baseado em valores sólidos,
          gestão eficiente e incentivo ao crescimento econômico.
        </p>
      </section>

      {/* Eixos */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20">

        {/* Família */}
        <motion.div whileHover={{ y: -10, scale: 1.05 }}>
          <Card onClick={() => toggle("familia")} className="bg-green-600 rounded-2xl shadow-xl cursor-pointer">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Família</h3>

              <div>
                <p className="font-semibold">Saúde Familiar Integrada</p>
                {active === "familia" && <p className="text-sm">Ampliação do acesso à saúde preventiva e acompanhamento contínuo.</p>}
              </div>

              <div>
                <p className="font-semibold">Combate à Evasão Escolar</p>
                {active === "familia" && <p className="text-sm">Monitoramento e apoio direto para manter jovens na escola.</p>}
              </div>

              <div>
                <p className="font-semibold">Educação com Valores</p>
                {active === "familia" && <p className="text-sm">Formação baseada em responsabilidade, respeito e convivência social.</p>}
              </div>

              <div>
                <p className="font-semibold">Esporte e Inclusão</p>
                {active === "familia" && <p className="text-sm">Uso do esporte como ferramenta de disciplina e integração.</p>}
              </div>

              <div>
                <p className="font-semibold">Rede de Apoio às Famílias</p>
                {active === "familia" && <p className="text-sm">Apoio estruturado a famílias em situação de vulnerabilidade.</p>}
              </div>

            </CardContent>
          </Card>
        </motion.div>

        {/* Segurança */}
        <motion.div whileHover={{ y: -10, scale: 1.05 }}>
          <Card onClick={() => toggle("seguranca")} className="bg-yellow-400 text-black rounded-2xl shadow-xl cursor-pointer">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Segurança</h3>

              <div>
                <p className="font-semibold">Inteligência Integrada</p>
                {active === "seguranca" && <p className="text-sm">Integração de dados para prevenir e combater o crime de forma eficiente.</p>}
              </div>

              <div>
                <p className="font-semibold">Gestão Territorial Inteligente</p>
                {active === "seguranca" && <p className="text-sm">Uso de tecnologia para atuação estratégica nas regiões.</p>}
              </div>

              <div>
                <p className="font-semibold">Governança com a Sociedade</p>
                {active === "seguranca" && <p className="text-sm">Integração entre sociedade civil e forças policiais para fortalecer vínculos, confiança e reduzir o crime.</p>}
              </div>

            </CardContent>
          </Card>
        </motion.div>

        {/* Empreendedorismo */}
        <motion.div whileHover={{ y: -10, scale: 1.05 }}>
          <Card onClick={() => toggle("empreendedorismo")} className="bg-blue-600 rounded-2xl shadow-xl cursor-pointer">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Empreendedorismo</h3>

              <div>
                <p className="font-semibold">Redes de Empreendimentos</p>
                {active === "empreendedorismo" && <p className="text-sm">Conexão entre negócios para fortalecimento econômico local.</p>}
              </div>

              <div>
                <p className="font-semibold">Distritos Industriais Interligados</p>
                {active === "empreendedorismo" && <p className="text-sm">Integração de polos produtivos para ganho de escala e eficiência.</p>}
              </div>

              <div>
                <p className="font-semibold">Microcrédito facilitado para MEIs e pequenas empresas</p>
                {active === "empreendedorismo" && <p className="text-sm">Acesso a crédito com condições especiais para impulsionar negócios.</p>}
              </div>

              <div>
                <p className="font-semibold">Unidades Profissionalizantes</p>
                {active === "empreendedorismo" && <p className="text-sm">Capacitação alinhada às demandas do mercado.</p>}
              </div>

              <div>
                <p className="font-semibold">Educação Financeira no Ensino Médio</p>
                {active === "empreendedorismo" && <p className="text-sm">Ensinar imposto de renda, juros e finanças práticas para autonomia dos jovens.</p>}
              </div>

            </CardContent>
          </Card>
        </motion.div>

      </section>

      {/* Texto ideológico */}
      <section className="px-6 pb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Mais do que palavras</h2>

        <p className="mb-4">
          <strong>Família</strong> é o ponto de partida de qualquer sociedade que se mantem estável ao longo do tempo. É nela que valores são transmitidos, onde se constrói o senso de responsabilidade e respeito. Uma sociedade que fortalece suas famílias reduz vulnerabilidades e cria cidadãos mais preparados para sustentar o futuro.
        </p>

        <p className="mb-4">
          <strong>Segurança</strong> é o que permite ao cidadão viver com tranquilidade, tomar decisões e construir sua vida com liberdade. Quando há confiança  e respeito entre população e forças de segurança, cria-se um ambiente estável onde o desenvolvimento acontece de forma natural e consistente.
        </p>

        <p>
          <strong>Empreendedorismo</strong> é o motor que gera inovação e crescimento. Ao integrar trabalhadores e empresários, estimular novos negócios e manter a riqueza dentro do país, criamos um ciclo de desenvolvimento que gera oportunidades e avanço econômico.
        </p>
      </section>

      {/* Pirâmide interativa */}
      <section className="flex flex-col items-center justify-center pb-20">
        <h2 className="text-3xl font-bold mb-16">Estrutura que queremos para o Brasil</h2>

        <div className="relative w-64 h-64 mt-6" style={{ perspective: "1000px" }}>
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
          >

            <div onClick={() => setActive("familia")}
              className="absolute w-full h-full bg-green-600 flex items-center justify-center font-bold rounded-xl cursor-pointer"
              style={{ transform: "rotateY(0deg) rotateX(25deg) translateZ(130px)" }}>
              Família
            </div>

            <div onClick={() => setActive("seguranca")}
              className="absolute w-full h-full bg-yellow-400 text-black flex items-center justify-center font-bold rounded-xl cursor-pointer"
              style={{ transform: "rotateY(120deg) rotateX(25deg) translateZ(130px)" }}>
              Segurança
            </div>

            <div onClick={() => setActive("empreendedorismo")}
              className="absolute w-full h-full bg-blue-600 flex items-center justify-center font-bold rounded-xl cursor-pointer"
              style={{ transform: "rotateY(240deg) rotateX(25deg) translateZ(130px)" }}>
              Empreendedorismo
            </div>

          </motion.div>
        </div>

        {active && (
          <div className="mt-6 bg-white text-black p-4 rounded-xl shadow-lg max-w-md text-center">
            {active === "familia" && <p><strong>Família:</strong> Base dos valores e formação do indivíduo.</p>}
            {active === "seguranca" && <p><strong>Segurança:</strong> Condição para viver com liberdade.</p>}
            {active === "empreendedorismo" && <p><strong>Empreendedorismo:</strong> Motor do desenvolvimento.</p>}
          </div>
        )}

        <p className="max-w-2xl text-center mt-8 text-lg">
          Esses três pilares formam a base da sociedade que queremos construir a família como origem dos valores, a segurança como condição para viver com liberdade e o empreendedorismo como motor do desenvolvimento e da geração de oportunidades.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black bg-opacity-40 flex justify-center gap-8 text-2xl">
        <FaFacebook />
        <FaWhatsapp />
        <FaTiktok />
        <FaInstagram />
      </footer>

    </div>
  );
}
