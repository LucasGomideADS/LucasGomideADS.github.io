import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='knowledges'>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>knowledges</SectionTitle>
    <SectionText>
    I have been working with IT since 2021, and here are some of my knowledge.
    I have professional experience with JavaScript and React being used for web development,
    IT infrastructure and technical support.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>programming languages</ListTitle>
          <ListParagraph>
            JavaScript, HTML5, CSS3 and Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>main frameworks</ListTitle>
          <ListParagraph>
            Reactjs, 
            Nodejs,
            GraphQL,
            Nextjs,
            Socket.io and
            Spring Boot.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>databases</ListTitle>
          <ListParagraph>
            SQL Server, MySQL and Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>infrastructure</ListTitle>
          <ListParagraph>
            Advanced Computing,
            Networks (TCP/IP),
            Windows Server,
            GPO and
            Hardware.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>support</ListTitle>
          <ListParagraph>
          support in hardware and systems, helping the user/client and
          searching for the best solution efficiently and quickly.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
