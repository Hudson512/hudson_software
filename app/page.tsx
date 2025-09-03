"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Globe,
  Zap,
  Users,
  Target,
  Eye,
  Heart,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hudsons Software",
    alternateName: "Hudsons Software Angola",
    url: "https://hudsons.software",
    logo: "https://hudsons.software/logo.png",
    description:
      "Agência de desenvolvimento de software em Angola especializada em transformação digital, desenvolvimento web, sistemas sob medida e aplicações móveis.",
    founder: {
      "@type": "Person",
      name: "Hudson Mateque",
      jobTitle: "Fundador e Desenvolvedor",
      url: "https://www.linkedin.com/in/hudsonmateque/",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AO",
      addressRegion: "Angola",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+244",
      contactType: "customer service",
      email: "hmateque@gmail.com",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: ["https://www.linkedin.com/in/hudsonmateque/", "https://github.com/Hudson512"],
    serviceArea: {
      "@type": "Country",
      name: "Angola",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Desenvolvimento de Software",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento Web",
            description: "Criação de websites modernos, rápidos e responsivos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistemas Sob Medida",
            description: "Soluções personalizadas para processos internos de empresas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplicações Móveis",
            description: "Desenvolvimento de aplicações Android e iOS",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integrações e APIs",
            description: "Integração de sistemas e criação de APIs robustas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoria Técnica",
            description: "Orientação especializada para projetos de software",
          },
        },
      ],
    },
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50" role="banner">
          <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-xl font-bold text-white">Hudsons Software</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Navegação principal">
              <Link href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="text-gray-300 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="#valores" className="text-gray-300 hover:text-white transition-colors">
                Valores
              </Link>
              <Link href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 lg:py-32" role="main">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="border-blue-400/50 text-blue-400 bg-blue-400/10">
                Transformação Digital em Angola
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transformamos
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Ideias{" "}
                </span>
                em Soluções Digitais
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A Hudsons Software é uma agência especializada em desenvolvimento de software. Impulsionamos a
                transformação digital de instituições e empresas com tecnologia moderna, sistemas sob medida e
                aplicações móveis de alta qualidade.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Ver nossos serviços de desenvolvimento de software"
                >
                  Começar Projeto
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-20 bg-black/20" aria-labelledby="sobre-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10">
                  Sobre a Hudsons Software
                </Badge>
                <h2 id="sobre-heading" className="text-3xl md:text-4xl font-bold text-white">
                  Uma ponte entre ideias e soluções reais
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A Hudsons Software é uma agência de desenvolvimento de software fundada por Hudson Mateque, com o
                  propósito de impulsionar a transformação digital de instituições e empresas.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Trabalhamos com paixão, criatividade e responsabilidade para oferecer soluções tecnológicas sob
                  medida, adaptadas à realidade de cada parceiro. Nosso compromisso vai além da entrega técnica:
                  queremos participar ativamente do crescimento e sucesso dos nossos clientes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="text-white font-semibold">Clientes Satisfeitos</h3>
                    <p className="text-gray-400 text-sm">Diversos segmentos</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Code2 className="h-8 w-8 text-purple-400 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="text-white font-semibold">Projetos Entregues</h3>
                    <p className="text-gray-400 text-sm">Com excelência técnica</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="text-white font-semibold">Tecnologia Moderna</h3>
                    <p className="text-gray-400 text-sm">Sempre atualizada</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="text-white font-semibold">Crescimento</h3>
                    <p className="text-gray-400 text-sm">Conjunto com clientes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section id="valores" className="py-20" aria-labelledby="valores-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-blue-400/50 text-blue-400 bg-blue-400/10 mb-4">
                Nossos Pilares
              </Badge>
              <h2 id="valores-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Missão, Visão e Valores da Hudsons Software
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-400/50 backdrop-blur-sm">
                <CardHeader>
                  <Target className="h-8 w-8 text-blue-200 mb-2" aria-hidden="true" />
                  <CardTitle className="text-white text-lg font-bold">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100 leading-relaxed font-medium">
                    Entregar soluções digitais de ponta que cumpram com excelência os requisitos propostos, superando as
                    expectativas dos clientes e contribuindo ativamente para o sucesso de seus projetos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-400/50 backdrop-blur-sm">
                <CardHeader>
                  <Eye className="h-8 w-8 text-purple-200 mb-2" aria-hidden="true" />
                  <CardTitle className="text-white text-lg font-bold">Nossa Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100 leading-relaxed font-medium">
                    Ser reconhecida como uma das principais agências de software em Angola e no continente africano,
                    pela qualidade técnica, compromisso com os clientes e inovação contínua.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-400/50 backdrop-blur-sm">
                <CardHeader>
                  <Heart className="h-8 w-8 text-green-200 mb-2" aria-hidden="true" />
                  <CardTitle className="text-white text-lg font-bold">Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-200" aria-hidden="true" />
                      <span className="text-gray-100 text-sm font-medium">Compromisso com o cliente</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4 text-yellow-200" aria-hidden="true" />
                      <span className="text-gray-100 text-sm font-medium">Inovação contínua</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-blue-200" aria-hidden="true" />
                      <span className="text-gray-100 text-sm font-medium">Transparência</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-purple-200" aria-hidden="true" />
                      <span className="text-gray-100 text-sm font-medium">Crescimento conjunto</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-black/20" aria-labelledby="servicos-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10 mb-4">
                Serviços de Desenvolvimento de Software
              </Badge>
              <h2 id="servicos-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                O Que Fazemos
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Oferecemos um portfólio completo de serviços para transformar ideias em soluções digitais concretas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Globe className="h-10 w-10 text-blue-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Desenvolvimento Web</CardTitle>
                  <CardDescription className="text-gray-400">Websites modernos, rápidos e responsivos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    De sites institucionais a plataformas complexas, criamos soluções web que impressionam e convertem
                    para empresas em Angola.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Code2 className="h-10 w-10 text-purple-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Sistemas Sob Medida</CardTitle>
                  <CardDescription className="text-gray-400">Soluções personalizadas para sua empresa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Desenvolvemos sistemas que atendem processos internos de empresas angolanas com foco em eficiência,
                    automação e escalabilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-green-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Aplicações Móveis</CardTitle>
                  <CardDescription className="text-gray-400">Apps Android e iOS de alta qualidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Aplicações móveis focadas na experiência do usuário, conectividade e performance para o mercado
                    angolano.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Integrações e APIs</CardTitle>
                  <CardDescription className="text-gray-400">Conectamos seus sistemas com eficiência</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Integramos sistemas diversos e criamos APIs robustas para permitir comunicação eficiente entre
                    serviços em Angola.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Users className="h-10 w-10 text-red-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Consultoria Técnica</CardTitle>
                  <CardDescription className="text-gray-400">Orientação especializada para seu projeto</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Ajudamos equipes e projetos angolanos a encontrarem os melhores caminhos técnicos e organizacionais.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-orange-400 mb-4" aria-hidden="true" />
                  <CardTitle className="text-white">Mentoria Técnica</CardTitle>
                  <CardDescription className="text-gray-400">Capacitação e desenvolvimento de equipes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Oferecemos mentoria para desenvolver as habilidades técnicas da sua equipe e acelerar projetos em
                    Angola.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <Card className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-blue-400/40 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Pronto para transformar sua ideia em realidade?
                </h2>
                <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Atendemos empresas de diversos portes e segmentos, desde startups até instituições públicas e
                  privadas. Nossa abordagem é flexível e adaptável a diferentes contextos.
                </p>
                <Link href="mailto:hmateque@gmail.com?subject=Interesse nos serviços da Hudsons Software&body=Olá,%0D%0A%0D%0AGostaria de saber mais sobre os vossos serviços.%0D%0A%0D%0AObrigado!">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                    Vamos Conversar
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-black/20" aria-labelledby="contato-heading">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-green-400/50 text-green-400 bg-green-400/10 mb-4">
                Contato Hudsons Software Angola
              </Badge>
              <h2 id="contato-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vamos Trabalhar Juntos
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Estamos prontos para conversar sobre sua ideia ou projeto de software. Juntos, podemos transformar
                tecnologia em solução para sua empresa em Angola.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <Link
                    href="mailto:hmateque@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    hmateque@gmail.com
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/hudsonmateque/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Hudson Mateque
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
                <CardContent className="p-8">
                  <Github className="h-8 w-8 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-white font-semibold mb-2">GitHub</h3>
                  <Link
                    href="https://github.com/Hudson512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Hudson512
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8" role="contentinfo">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Code2 className="h-6 w-6 text-blue-400" aria-hidden="true" />
                <span className="text-white font-semibold">Hudsons Software</span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="https://hudsons.software" className="text-gray-400 hover:text-white transition-colors">
                  hudsons.software
                </Link>
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Hudsons Software Angola. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
