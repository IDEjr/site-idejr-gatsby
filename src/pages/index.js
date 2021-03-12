import React from "react"
import SEO from "@components/seo"
import Clientes from "@components/SectionClientes"
import Produtos from "@components/SectionProducts"
import Sobre from "@components/SectionSobre"
import Hero from "@components/SectionHero"
import SectionPortfolio from '@components/SectionPortfolio'
import Layout from '@components/Layout'

const HomePage = () => (
  <Layout>
    <SEO title="Empresa Júnior IDE" />
    <Hero />
    <Sobre />
    <Clientes />
    <SectionPortfolio />
    <Produtos />
  </Layout>
)

export default HomePage
