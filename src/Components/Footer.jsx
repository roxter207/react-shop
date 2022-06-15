import { Facebook, GolfCourse, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display:flex;
    background-color: black;
    color: white;
`
const Left = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;
`
const ScocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`   
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom : 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex:1;
    padding: 20px;

`
const ContactItem = styled.div`
    margin-bottom:20px ;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (

    <Container>
        <Left>
            <Logo>Krevor.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                , autem! Possimus, animi?
            </Desc>
            <SocialContainer>
                <ScocialIcon color="3B5999">
                    <Facebook/>
                </ScocialIcon>

                <ScocialIcon color="E4405F">
                    <Instagram/>
                </ScocialIcon>

                <ScocialIcon color="55ACEE">
                    <Pinterest />
                </ScocialIcon>

                <ScocialIcon color="E60023">
                    <Twitter />
                </ScocialIcon>

            </SocialContainer>
        </Left>

        <Center>
            <Title> Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Womens Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marignRight:"10px"}}/>623, Mumbai, Maharashtra. INDIA. </ContactItem>
            <ContactItem> <Phone style={{marignRight:"10px"}}/>+1 2346 3829 </ContactItem>
            <ContactItem> <MailOutline style={{marignRight:"10px"}}/>contact@krevor.com </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>

    )
};

export default Footer;
