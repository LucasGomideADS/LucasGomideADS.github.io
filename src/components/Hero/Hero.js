import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Olá! Seja bem-vindo(a) ao meu portifólio!
      </SectionTitle>
      <SectionText>
        Me chamo Lucas Gomide e sou Analista de TI em uma fintech. Aqui você verá um breve resumo de minha
        carreira profissional e os projetos que desenvolvi ao longo de minha atuação na área, tanto pessoais 
        quanto profissionais!
      </SectionText>
      <Button onClick={() => window.location = 'https://contate.me/lucasgomide'}>Contato</Button>
    </LeftSection>
  </Section>
);

export default Hero; 