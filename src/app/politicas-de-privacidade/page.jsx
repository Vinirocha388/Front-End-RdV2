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

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Database = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const Lock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const Eye = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Share2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const Cookie = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M9 14h6" />
  </svg>
);

const ExternalLink = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Info = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function PoliticasPrivacidade() {
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
      icon: <Info className="w-5 h-5" />,
      title: "Introdução",
      content: "Bem-vindo às Políticas de Privacidade do Receitinhas da Vovó. Este documento tem como objetivo informar como coletamos, usamos e protegemos suas informações pessoais quando você visita nosso site e utiliza nossos serviços.",
      subContent: "Ao acessar ou utilizar o Receitinhas da Vovó, você concorda com as práticas descritas nesta política. Se você não concordar com qualquer parte desta política, por favor, não continue a usar nosso site."
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5" />,
      title: "Informações Coletadas",
      content: "Podemos coletar os seguintes tipos de informações:",
      list: [
        {
          title: "Informações Pessoais:",
          text: "Nome, endereço de e-mail e outras informações de contato que você nos fornece voluntariamente."
        },
        {
          title: "Informações de Uso:",
          text: "Dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo de permanência e preferências."
        },
        {
          title: "Cookies e Tecnologias Semelhantes:",
          text: "Utilizamos cookies para melhorar sua experiência, entender o uso do site e personalizar conteúdo."
        }
      ]
    },
    {
      id: 3,
      icon: <Eye className="w-5 h-5" />,
      title: "Como Utilizamos Suas Informações",
      content: "Utilizamos suas informações para:",
      list: [
        { text: "Fornecer e melhorar nossos serviços" },
        { text: "Personalizar sua experiência de navegação" },
        { text: "Responder a suas perguntas e solicitações" },
        { text: "Enviar atualizações e comunicações relacionadas aos nossos serviços (se você optar por recebê-las)" },
        { text: "Garantir a segurança e integridade do nosso site" }
      ]
    },
    {
      id: 4,
      icon: <Share2 className="w-5 h-5" />,
      title: "Compartilhamento de Informações",
      content: "Não vendemos, comercializamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto nos seguintes casos:",
      list: [
        { text: "Com prestadores de serviços que nos ajudam a operar nosso site" },
        { text: "Quando necessário para cumprir com obrigações legais" },
        { text: "Para proteger nossos direitos, propriedade ou segurança" }
      ]
    },
    {
      id: 5,
      icon: <Lock className="w-5 h-5" />,
      title: "Segurança dos Dados",
      content: "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro."
    },
    {
      id: 6,
      icon: <Shield className="w-5 h-5" />,
      title: "Seus Direitos",
      content: "Você tem os seguintes direitos em relação aos seus dados pessoais:",
      list: [
        { text: "Acesso aos seus dados pessoais" },
        { text: "Correção de dados incompletos ou imprecisos" },
        { text: "Exclusão dos seus dados pessoais" },
        { text: "Restrição do processamento dos seus dados" },
        { text: "Oposição ao processamento dos seus dados" },
        { text: "Portabilidade dos seus dados" }
      ]
    },
    {
      id: 7,
      icon: <Cookie className="w-5 h-5" />,
      title: "Cookies e Tecnologias de Rastreamento",
      content: "Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiência. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado."
    },
    {
      id: 8,
      icon: <ExternalLink className="w-5 h-5" />,
      title: "Links para Sites de Terceiros",
      content: "Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar."
    },
    {
      id: 9,
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Alterações a Esta Política",
      content: "Podemos atualizar nossa Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página, e a data da última atualização será modificada no topo deste documento."
    }
  ];

  const dataTypes = [
    { icon: <Database className="w-8 h-8" />, title: "Dados Pessoais", desc: "Nome e contato" },
    { icon: <Eye className="w-8 h-8" />, title: "Uso do Site", desc: "Navegação e preferências" },
    { icon: <Cookie className="w-8 h-8" />, title: "Cookies", desc: "Experiência personalizada" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Políticas de Privacidade</h1>
          <p className="text-gray-600">Receitinhas da Vovó</p>
          <div className="inline-block mt-4 px-4 py-2 bg-white rounded-full shadow-sm">
            <p className="text-sm text-gray-500">Última atualização: 23 de setembro de 2023</p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm text-blue-800 font-semibold mb-1">Seu compromisso com a privacidade</p>
              <p className="text-sm text-blue-700">
                Sua privacidade é importante para nós. Coletamos apenas as informações necessárias para oferecer a melhor experiência possível.
              </p>
            </div>
          </div>
        </div>

        {/* Data Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {dataTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-3 text-blue-600">
                {type.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.desc}</p>
            </div>
          ))}
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
                  <div className="text-blue-600">
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
                          <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-gray-700">
                            {item.title && <strong>{item.title}</strong>} {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Seus dados estão protegidos</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos criptografia e as melhores práticas de segurança para garantir que suas informações pessoais estejam sempre protegidas.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Dúvidas sobre Privacidade?</h2>
          </div>
          <p className="mb-4 text-blue-50">
            Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade, entre em contato conosco:
          </p>
          <a 
            href="mailto:contato@receitinhasdavovo.com.br"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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