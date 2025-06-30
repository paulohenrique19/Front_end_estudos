import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import Form from "./components/Form";


function App() {

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Separator>
          <Form />
        </Separator>
      </MainContainer>
    </>
  )
}

export default App



const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 60rem;
  height: 40rem;

  border: 1px solid black;
`
const Separator = styled.div`
  margin: 2rem;
  border: 1px solid black;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }
`;