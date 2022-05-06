import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        hello there, welcome to my portfolio!
      </SectionTitle>
      <SectionText>
        my name is Lucas Gomide and I'm an IT Analyst at a fintech in Franca, São Paulo - Brazil. here 
        you will see a brief summary of my professional career and the projects that I developed throughout
        my work in the area, personal and professionals!
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1WujWh1Is7Qpnja9KXH8CiYMmoxvXGqmq/view?usp=sharing'}>download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero; 