import React from 'react';

import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';

const Footer = () => {

  // const CV = "https://drive.google.com/file/d/1WujWh1Is7Qpnja9KXH8CiYMmoxvXGqmq/view?usp=sharing"

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn> 
          <LinkTitle>email</LinkTitle>
          <LinkItem href='mailto:lucasgomidecv@gmail.com'>lucasgomidecv@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>phone</LinkTitle>
          <LinkItem href='https://contate.me/lucasgomide' about='blank_'>+55 16 99321-9101</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;

// Me chamo Lucas Gomide e sou Analista de TI em uma fintech. Aqui você verá um breve resumo de minha
// carreira profissional e os projetos que desenvolvi ao longo de minha atuação na área, tanto pessoais 
// quanto profissionais!
