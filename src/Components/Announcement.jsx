import React from 'react';
import styled from "styled-components";



const Container = styled.div`
    height: 30px;
    background-color: beige;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
`

const Announcement = () => {
  return (
      <Container>
          Super Deal ! Get free shipping on purchase over 1000.
      </Container>
  )
};

export default Announcement;
