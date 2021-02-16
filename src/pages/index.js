import React from "react"
import SEO from "../components/seo"
import Clientes from "../components/SectionClientes/index"
import Produtos from "../components/SectionProducts/index"
import Sobre from "../components/SectionSobre/index"
import Contact from "../components/SectionContact/index"
import Hero from "../components/SectionHero/index"
import Navbar from "../components/NavBar/index"
import "../components/layout.css"

const HomePage = () => (
  <div style={{ position: 'relative' }}>
    <div style={{ overflow: 'hidden' }}>
      <SEO title="Empresa Júnior IDE" />
      <Navbar />
      <Hero />
      <Sobre id="sobre" />
      <Clientes />
      <Produtos id="produtos" />
      <Contact id="contato" />
    </div>
  </div>

)

export default HomePage
