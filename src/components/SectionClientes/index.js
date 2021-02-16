import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'infinite-react-carousel';

// Components
import SectionTitle from "../SectionTitle"
import Center from "../shared/Center"

// Suport
import { viewportIsSmall , viewportIsExtraSmall, viewportIsMedium } from '../../support/responsiveness'

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

const Container = styled.div`
    padding: 10vh 0px;
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
        className: "teste",
        pauseOnHover: true,
        centerMode:	true,
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
        <Container>
            <div style={{paddingLeft: '10vw', paddingRight: '10vw'}}>
              <Center>
                <SectionTitle title={"Quem já nos conhece"} uppertitle={"Clientes"}/>
              </Center>
            </div>
            <Slider { ...this.state.carouselSettings } onResize={() => this.updateSettingsIfBreakpointReached()}>
            {itensCarousel.map(function (item, index) { return (

                <PartnerSectionCarouselSlide key={index}>

                <a href={item.link} target="_blank" rel="noopener noreferrer" >
                    <img src={item.image} className='image' alt={item.empresa} />
                </a>

                </PartnerSectionCarouselSlide>

            )})}
            </Slider>    
        </Container>
    ) 
  }
}
