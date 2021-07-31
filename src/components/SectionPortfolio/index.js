import React from 'react';
import Slider from 'infinite-react-carousel';
import { SectionContainer, SectionBackground, SliderContainer, Control } from './style'
import PortfolioItem from './PortfolioItem'
import SectionHeader from '../shared/SectionHeader'

//Images
import Blob from '@assets/bg-blob-2.svg'
import item1Logo from '@assets/portfolio-item-1-logo.png'
import item1Content from '@assets/portfolio-item-1-content.png'
import item2Logo from '@assets/portfolio-item-2-logo.png'
import item2Content from '@assets/portfolio-item-2-content.png'
import item3Logo from '@assets/portfolio-item-3-logo.png'
import item3Content from '@assets/portfolio-item-3-content.png'

export default function SectionPortfolio() {
  return (
    <SectionContainer id="portfolio">
      <SectionHeader title="Portfólio" description="Alguns projetos que já fizemos" />

      <SliderContainer>
        <Slider   prevArrow={<Control prev>prev</Control>} nextArrow={<Control>next</Control>}>
          <PortfolioItem
            logoProps={{src: item1Logo, alt: "logo ceanut"}}
            contentProps={{src: item1Content, alt: "amostra website ceanut"}}
          />
          <PortfolioItem
            logoProps={{src: item2Logo, alt: "logo nejpoa"}}
            contentProps={{src: item2Content, alt: "amostra website nejpoa"}}
          />
          <PortfolioItem
            logoProps={{src: item3Logo, alt: "logo RS Racing"}}
            contentProps={{src: item3Content, alt: "amostra website RS Racing"}}
          />
        </Slider>
      </SliderContainer>
      <SectionBackground src={Blob} alt="" aria-hidden="true" />
    </SectionContainer>
  )
}
