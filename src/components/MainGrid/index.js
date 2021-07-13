
import styled from 'styled-components'


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const MainGrid = styled.main`

  display: grid;
  grid-gap: 10px;
  padding: 16px;
  .profileArea {
    display:none;
    @media(min-width: 860px){
      display:block;
    }
  }

  @media(min-width: 860px){
    grid-template-areas: 
    "profileArea WelcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
}
`

export default MainGrid;
