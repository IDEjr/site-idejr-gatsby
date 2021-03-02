import React from "react"
import SEO from "@components/seo"
import Clientes from "@components/SectionClientes"
import Produtos from "@components/SectionProducts"
import Sobre from "@components/SectionSobre"
import Contact from "@components/SectionContact"
import Hero from "@components/SectionHero"
import Navbar from "@components/NavBar"
import SectionPortfolio from '@components/SectionPortfolio'
import "@components/layout.css"

const HomePage = () => (
  <div style={{ position: 'relative' }}>
    <div style={{ overflow: 'hidden' }}>
      <SEO title="Empresa Júnior IDE" />
      <Navbar />
      <Hero />
      <Sobre />
      <Clientes />
      <SectionPortfolio />
      <Produtos />
      <Contact />
    </div>
  </div>
)

export default HomePage
