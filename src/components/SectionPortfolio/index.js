import React from 'react';
import Slider from 'infinite-react-carousel';
import { SectionContainer, SectionBackground, SliderContainer, Control } from './style'
import PortfolioItem from './PortfolioItem'
import SectionHeader from './SectionHeader'
import Blob from '../../assets/bg-blob-2.svg'
import item1Logo from '../../assets/portfolio-item-1-logo.png'
import item1Content from '../../assets/portfolio-item-1-content.png'
// Components

export default function SectionPortfolio() {
  return (
    <SectionContainer>
      <SectionHeader title="Portfolio" description="Alguns projetos que já fizemos" />

      <SliderContainer>
        <Slider  autoplay prevArrow={<Control prev>prev</Control>} nextArrow={<Control>next</Control>}>
          <PortfolioItem
            logoProps={{src: item1Logo, alt: "Portfolio item logo"}}
            contentProps={{src: item1Content, alt: "Portfolio item content"}}
          />

          <PortfolioItem
            logoProps={{src: item1Logo, alt: "Portfolio item logo"}}
            contentProps={{src: item1Content, alt: "Portfolio item content"}}
          />
        </Slider>
      </SliderContainer>
      <SectionBackground src={Blob} alt="" aria-hidden="true" />
    </SectionContainer>
  )
}
