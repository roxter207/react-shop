import React from "react";
import styled from "styled-components";

// const Circle = styled.div`
//     width: 25px;
//     height: 25px ;
//     background-color:teal ;
//     border-radius: 50% ;
//     position: absolute ;
//     top:29%;
//     right:29% ;
//     text-align: center;
//     padding-top:1px;
//     font-weight: bold ;
// `;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative ;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  width: 30%;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column ;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  margin-top:10px;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin-bottom:10px;
`;
const Link = styled.a`
    margin:5px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer ;
`

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="username or email" />
            <Input placeholder="Password" />
            <Button>Login</Button>
            <Link>Don't remember your passowrd?</Link>
            <Link>New? Create an Account.</Link>
          </Form>
        </Wrapper>
        {/* <Circle>X</Circle> */}
      </Container>
    </>
  );
};

export default Login;
