'use client';

import React, { useState } from 'react';

// Ícones SVG simples
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AlertCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function TermosDeUso() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections = [
    {
      id: 1,
      icon: <FileText className="w-5 h-5" />,
      title: "Aceitação dos Termos",
      content: "Ao acessar e utilizar o site Receitinhas da Vovó, você confirma que leu, entendeu e concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site."
    },
    {
      id: 2,
      icon: <Shield className="w-5 h-5" />,
      title: "Utilização do Site",
      content: "O Receitinhas da Vovó é uma plataforma dedicada a compartilhar receitas culinárias tradicionais. Ao usar nosso site, você concorda em:",
      list: [
        "Utilizar o site de maneira lícita e de acordo com estes termos",
        "Não modificar, adaptar ou hackear o site",
        "Não utilizar o site para qualquer finalidade ilegal ou não autorizada",
        "Não interferir no funcionamento adequado do site"
      ]
    },
    {
      id: 3,
      icon: <FileText className="w-5 h-5" />,
      title: "Conteúdo do Site",
      content: "Todo o conteúdo disponível no Receitinhas da Vovó, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade do Receitinhas da Vovó ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais.",
      subContent: "Você pode visualizar, imprimir e baixar uma cópia das receitas para uso pessoal e não comercial, desde que:",
      list: [
        "Não modifique os materiais",
        "Não remova quaisquer direitos autorais ou outras notações de propriedade dos materiais",
        "Não utilize os materiais para qualquer finalidade comercial"
      ]
    },
    {
      id: 4,
      icon: <User className="w-5 h-5" />,
      title: "Contas de Usuário",
      content: "Para acessar determinados recursos do nosso site, pode ser necessário criar uma conta. Ao criar uma conta, você concorda em fornecer informações precisas, atuais e completas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta."
    },
    {
      id: 5,
      icon: <FileText className="w-5 h-5" />,
      title: "Conteúdo Gerado pelo Usuário",
      content: "Nosso site pode permitir que você envie comentários, sugestões ou outras informações. Ao fornecer tal conteúdo, você:",
      list: [
        "Garante que tem o direito de fornecer esse conteúdo",
        "Concorda que o conteúdo não é difamatório, obsceno, ofensivo ou ilegal",
        "Concede ao Receitinhas da Vovó uma licença não exclusiva para usar, reproduzir, adaptar, publicar, traduzir e distribuir seu conteúdo"
      ]
    },
    {
      id: 6,
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Limitação de Responsabilidade",
      content: "O Receitinhas da Vovó não garante que o site estará sempre disponível, livre de erros, vírus ou outros componentes prejudiciais. Em nenhuma circunstância, o Receitinhas da Vovó será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais, especiais ou punitivos resultantes do uso ou impossibilidade de uso do site."
    },
    {
      id: 7,
      icon: <Shield className="w-5 h-5" />,
      title: "Isenção de Garantias",
      content: "O site é fornecido \"como está\" e \"conforme disponível\", sem qualquer garantia expressa ou implícita. Não garantimos que as receitas ou outras informações disponíveis no site sejam precisas, completas ou atuais."
    },
    {
      id: 8,
      icon: <ExternalLink className="w-5 h-5" />,
      title: "Links para Sites de Terceiros",
      content: "Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados pelo Receitinhas da Vovó. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros."
    },
    {
      id: 9,
      icon: <FileText className="w-5 h-5" />,
      title: "Alterações aos Termos",
      content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após serem publicadas no site. Seu uso continuado do site após quaisquer alterações constitui sua aceitação dos novos termos."
    },
    {
      id: 10,
      icon: <Shield className="w-5 h-5" />,
      title: "Lei Aplicável",
      content: "Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, independentemente dos princípios de conflitos de leis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Termos de Uso</h1>
          <p className="text-gray-600">Receitinhas da Vovó</p>
          <div className="inline-block mt-4 px-4 py-2 bg-white rounded-full shadow-sm">
            <p className="text-sm text-gray-500">Última atualização: 23 de setembro de 2023</p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-orange-800">
              <strong>Importante:</strong> Ao utilizar nosso site, você concorda automaticamente com todos os termos descritos abaixo. 
              Leia atentamente antes de prosseguir.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-orange-500">
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {section.id}. {section.title}
                  </h2>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {section.content}
                  </p>
                  {section.subContent && (
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {section.subContent}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Dúvidas ou Preocupações?</h2>
          </div>
          <p className="mb-4 text-orange-50">
            Se você tiver dúvidas ou preocupações sobre nossos Termos de Uso, entre em contato conosco:
          </p>
          <a 
            href="mailto:contato@receitinhasdavovo.com.br"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            contato@receitinhasdavovo.com.br
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2023 Receitinhas da Vovó. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}