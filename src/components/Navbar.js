import React from 'react'
import styled from 'styled-components'



const Navbar = () => {
    const Container = styled.div`
    height: 160px;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #050505;
    `
    const Wrapper = styled.div`
     height: 50px;
     width: 100%;
     display: flex;
     justify-content: space-between;
     padding: 0px 30px;
    `
    const NavHeader = styled.div`
     height: 100%;
     display: flex;
     align-items: center;
     font-weight: 900;
     font-size: 1.5rem;
    color: #fff;
    flex: 1;
    `

    const NavMenu = styled.div`
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     height: 100%;
     flex: 1;
     padding-left: 20px;
     padding-right: 20px;
    `

    const NavItems = styled.div`
    color: #fff;
    transition: opacity .2s;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    &:hover{
        opacity: .6;
        cursor: pointer;
    }
    `

    const Button = styled.button`
    background-color: #00df9a;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    flex: 1;
    font-weight: 500;
    border-radius:4px;
    padding: 20px;
    font-size: 1.2rem;
    border: #00df9a;
    cursor: pointer;
    `

    
  return (
    <div>
        <Container>
            <Wrapper>
                <NavHeader>DEVJECTS</NavHeader>
                <NavMenu>
                    <NavItems>About</NavItems>
                    <NavItems>Templates</NavItems>
                    <NavItems>Help</NavItems>
                    <NavItems>Login</NavItems>
                    <NavItems><Button>Get Started</Button></NavItems>
                </NavMenu>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar