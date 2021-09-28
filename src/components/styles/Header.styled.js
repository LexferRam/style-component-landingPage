import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding:40px 0;

    /* dando estilos a ele html anidados */
    /* h1{
        color:red;
    } */

    /* hover, active, focus */
    /* &:hover{
        background-color: black;
    } */

    /* Forma de acceder a los props que se pasan */
    /* background-color: ${({bg}) => bg}; */
`;

export const Nav =styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    @media(max-width: ${({ theme }) => theme.mobile}){
       margin-bottom: 30px;
    }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
