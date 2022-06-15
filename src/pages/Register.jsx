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
  width: 40%;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 18px;
`;

const Register = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Creat an Account</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the{" "}
              <b style={{ textDecoration: "underline", cursor: "pointer" }}>
                PRIVACY POLICY
              </b>
            </Agreement>
            <Button>Register</Button>
          </Form>
        </Wrapper>
        {/* <Circle>X</Circle> */}
      </Container>
    </>
  );
};

export default Register;
