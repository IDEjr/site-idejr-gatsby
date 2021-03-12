import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'infinite-react-carousel';

// Components
import SectionHeader from '../shared/SectionHeader'

// Suport
import { viewportIsSmall , viewportIsExtraSmall, viewportIsMedium } from '@utils/responsiveness'
import { SMALL } from "@utils/breakpoints"


const itensCarousel = [
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },
  { image:"https://www.ufpb.br/educacaofinanceira/contents/imagens/brasoes-universidades/ufrgs.png/@@images/image.png", link:"https://idejr.com.br/", empresa:"IDE" },

]

const PartnerSectionCarouselSlide = styled.div`
a {
  display: flex;
  align-items: center;
  justify-content: center;
}

a > img {
  max-height: 120px;
  margin: 0;
}
`
export const SectionContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 50vh;
    padding: 5vh 5vw;
    @media (max-width: ${SMALL}px) {
        min-height: 70vh;
    }
`

export const SliderContainer = styled.div`
  width: 100%;
`

export default class SectionClientes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselSettings: {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        slidesToShow: this.getHowManySlidesToShow(),
        pauseOnHover: true,
      }
    }
  }

  updateCarouselSettings(newSettings) {
    this.setState({
      ...this.state,
      carouselSettings: {
        ...this.state.carouselSettings,
        ...newSettings
      }
    })
  }

  getHowManySlidesToShow() {
    if(viewportIsExtraSmall()) {
      return 1
    }
    if(viewportIsSmall()) {
      return 2
    }
    if(viewportIsMedium()) {
      return 4
    }
    return 5
  }

  updateSettingsIfBreakpointReached(){
    this.updateCarouselSettings({
      slidesToShow: this.getHowManySlidesToShow()
    })
  }

  render() {

    return (
        <SectionContainer id="clientes">
            <SectionHeader title="Clientes" description="Quem já nos conhece" />
            <SliderContainer>
              <Slider { ...this.state.carouselSettings } onResize={() => this.updateSettingsIfBreakpointReached()}>
                {itensCarousel.map(function (item, index) { return (

                    <PartnerSectionCarouselSlide key={index}>

                    <a href={item.link} target="_blank" rel="noopener noreferrer" >
                        <img src={item.image} className='image' alt={item.empresa} />
                    </a>

                    </PartnerSectionCarouselSlide>

                )})}
              </Slider>
            </SliderContainer>
        </SectionContainer>
    )
  }
}
