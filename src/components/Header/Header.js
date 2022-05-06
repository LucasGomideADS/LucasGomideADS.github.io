import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFile } from 'react-icons/ai'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'> 
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <AiFillFile size="3rem" /> <Span>lucas gomide</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#knowledges">
          <NavLink>knowledges</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/LucasGomideADS' target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/lucas-gomide-5b98611bb/' target='_blank'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
