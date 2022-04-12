import React from "react";
import styled from "styled-components";

const Middle = () => {
  const Container = styled.div`
    padding: 7em 0px;
    background-color: #0f0f0f;
    display: flex;
    justify-content: center;
    color: white;
  `;

  const Header = styled.div`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  `;

  const Tagline = styled.p`
    text-align: center;
    font-weight: 500;
    margin-bottom: 4em;
  `;

  const Wrapper = styled.div``;

  const Panel = styled.div`
    background-color: #040504;
    width: 80vw;
    height: 420px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
  `;

    // const PanelHeading = styled.h2`
    // `

  const PanelSide = styled.div`
    width: 60%;
    padding: 3em 4em 3em ;
    display: flex;
    height: 70%;
    gap: 20px;
    justify-content: space-around;
    flex-direction: column;
  `;
const PanelPart = styled.div``
  const PanelContent = styled.div``;
  const PanelCard = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 50%;
  background-color: #0F0F0F;
  `

  return (
    <Container>
      <Wrapper>
        <Header>Showcasing your project couldn't be easier</Header>
        <Tagline>
          Put your projects in Devjects with just three easy steps
        </Tagline>
        <Panel>
          <PanelSide>
              <PanelPart>
            <PanelContent>1) Get the url of your project</PanelContent>
            <PanelContent>2) Paste it in your Devject Dashboard</PanelContent>
            <PanelContent>3) Thats all, one link to show all your projects</PanelContent>
              </PanelPart>
              <PanelPart>

              </PanelPart>
          </PanelSide>
          <PanelSide>
            <PanelCard></PanelCard>
            <PanelCard></PanelCard>
            <PanelCard></PanelCard>
          </PanelSide>
        </Panel>
      </Wrapper>
    </Container>
  );
};

export default Middle;

// 1) Get the url of your project
// 2) Paste it in your Devject Dashboard
// 3) Thats all, one link to host all your project
