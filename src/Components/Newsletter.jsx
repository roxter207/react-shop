import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    background-color: lightpink;

`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 10px;
`
const Description = styled.p`
    font-size: 25px;
    margin-bottom: 20px;
    font-weight:300;

`
const InputContianer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
    
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return  (
      <Container>
          <Title>Newsletter</Title>
          <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Exercitationem eligendi ex sit.
        </Description>
          <InputContianer>
          <Input placeholder='Your email!'/>
          <Button>
              <Send/>
          </Button>
          </InputContianer>
      </Container>

  )
};

export default Newsletter;
