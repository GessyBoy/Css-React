import React from 'react';
import styled from 'styled-components';


const Test = styled.div`
  background: rgba(180,180,180,0.33);
`;


const Image = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  border: 10px solid ;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
`;

function App() {
  return (
    <Test>
      <h1>Styled Component!</h1>
      <p>This is an example of Styled Component</p>
      <Image src="https://picsum.photos/200" alt="Random image" />
      <Paragraph>This is a paragraph added using styled components for the style quest <br></br>
      👩‍🏫 Le CSS dans React : le niveau supérieur
      </Paragraph>
    </Test>
  );
}

export default App;