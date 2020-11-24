import React from "react"
import SEO from "../components/seo"
import Clientes from "../components/SectionClientes/index"
import Produtos from "../components/SectionProducts/index"
import Sobre from "../components/SectionSobre/index"
import Contact from "../components/SectionContact/Card/index"

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <Sobre />
    <Clientes />
    <Produtos />
    <Contact />
  </div>
 
)

export default SecondPage
