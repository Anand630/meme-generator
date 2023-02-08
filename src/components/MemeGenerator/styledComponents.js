// Style your components here
import styled from 'styled-components'

export const MemeDisplay = styled.div`
  width: 45%;
  height: 350px;
  background-size: 100% 100%;
  // background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.imageUrl});
  @media (max-width: 767px) {
    width: 100%;
    order: -1;
    margin: 25px 0;
  }
`

export const Para = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: ${props => props.fontSize}px;
  text-align: center;
`
