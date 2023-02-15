import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const AboutUsPage = () => {
    return (
        <PageContainer>
            <Title>About Us</Title>
            <Paragraph>Welcome to our BOOKing website! We are a team of passionate travel enthusiasts who want to make your travel experience as smooth and comfortable as possible.</Paragraph>
            <Paragraph>Our mission is to provide you with the best hotel and accommodation deals, no matter where you're headed. We work with a variety of partners to bring you a wide range of options, from budget-friendly hostels to luxury hotels and everything in between.</Paragraph>
            <Paragraph>Our team is committed to providing you with excellent customer service and support. If you have any questions or concerns, please don't hesitate to reach out to us.</Paragraph>
            <Paragraph>Thank you for choosing our room booking website for your travel needs. We hope you have a great trip!</Paragraph>
        </PageContainer>
    );
};

export default AboutUsPage;
