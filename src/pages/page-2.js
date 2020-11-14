import React from "react"
import SEO from "../components/seo"
import Clientes from "../components/SectionClientes/index"
import Produtos from "../components/SectionProducts/index"

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <Clientes />
    <Produtos />
  </div>
 
)

export default SecondPage
