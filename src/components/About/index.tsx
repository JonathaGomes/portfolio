import { AboutContainer, AboutContent, Title, TextRed } from "./styles";

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <div>
          <img src="/react.svg" />
        </div>
        <div>
          <Title>
            <h1>QUEM SOU EU?</h1>
          </Title>
          <p>Hello, meu nome é Jonatha Gomes</p>
          <p>
            Sou um <TextRed>Desenvolvedor Fullstack Javascript</TextRed>
          </p>
          <p>
            Em geral, gosto de gerar novas soluções para problemas.
            <br />
            Sou esforçado, motivado e adoro desafios.
            <br />
            Estou focado na <TextRed>Ecossistema Javascript</TextRed>, porém
            quero
            <br />
            focar em <TextRed>NodeJS, ReactJS e React Native</TextRed>.
          </p>
          <a
            href="https://drive.google.com/file/d/10KTUkm_wYfaJuNuG-U74c8k0s0xkjoO8/view?usp=sharing"
            target="_blank"
          >
            VER MEU CURRÍCULO
          </a>
        </div>
      </AboutContent>
    </AboutContainer>
  );
}
