import React from "react";
import styled from "styled-components";
import placeholder from "../assets/placeholder.gif";

const Hero = () => {
  const Parent = styled.div`
    width: 100vw;
    /* height: 200px; */
  `;
  const Container = styled.div`
    color: white;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Overline = styled.div`
    text-transform: uppercase;
    margin-bottom: 30px;
    color: #00df9a;
    text-align: center;
    font-weight: 500;
  `;

  const Header = styled.div`
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
    font-size: 4rem;
  `;

  const Description = styled.div`
    font-weight: 900;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 30px;
  `;
  const Span = styled.span`
    font-size: 3rem;
    font-weight: 900;
  `;

  const Random = styled.div`
    color: #e4b400;
  `;
  const Button = styled.button`
    background-color: #00df9a;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 1.2rem;
    border: #00df9a;
    cursor: pointer;
    border: 2px solid white;
    transition: opacity 0.5s;
    &:hover {
      opacity: 0.7;
    }
  `;

  const Container2 = styled.div`
    color: white;
    padding: 120px 0px;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(180deg, #050505, #141a20 90%);
    /* border: 2px solid white; */

  `;

  const Wrapper2 = styled.div`
    background-image: url(${placeholder});
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;
    height: 500px;
    border-radius: 20px 20px 0 0;
    border-bottom: 1px #0f0f0f;
    /* border: 2px solid white; */
  `;

  return (
    <Parent>
      <Container>
        <Wrapper>
          <Overline>For Projects which made you a Developer</Overline>
          <Header>
            Flex your Projects, <br />
            <Span>Without gimmicks</Span>
          </Header>
          <Description>
            {" "}
            Why go to a place where its all cluttered? We care. Just for what
            you've made.
            <br />
            <Random>& We'll get you job if they are incredible</Random>
          </Description>
          <Button>Get Started</Button>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper2></Wrapper2>
      </Container2>
    </Parent>
  );
};

export default Hero;
