import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tecnologias'>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Conhecimentos</SectionTitle>
    <SectionText>
      Atuo na área de TI desde 2021, e aqui estão alguns de meus conhecimentos.
      Tenho experiência profissional com JavaScript e React 
      sendo utilizados para desenvolvimento web, Infraestrutura de TI e Suporte técnico.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Linguagens</ListTitle>
          <ListParagraph>
            JavaScript, HTML5, CSS3, e Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Principais frameworks</ListTitle>
          <ListParagraph>
            Reactjs, 
            Nodejs,
            GraphQL,
            Nextjs,
            Spring Boot e
            Socket.io.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Banco de dados</ListTitle>
          <ListParagraph>
            SQL Server, MySQL e Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Infraestrutura</ListTitle>
          <ListParagraph>
            Informática avançada,
            Redes (TCP/IP),
            Windows Server,
            GPO e
            Hardware.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Suporte Técnico</ListTitle>
          <ListParagraph>
            Suporte em hardware e sistemas, auxiliando o usuário/cliente e
            buscando a melhor solução de maneira eficiente e rápida.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
