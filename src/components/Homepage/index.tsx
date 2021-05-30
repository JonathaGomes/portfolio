import {
 HomepageContainer,
 HomepageContent,
 Title
} from "./styles";

export default function Homepage() {
 return (
  <HomepageContainer>
    <HomepageContent>
      <div>
      <Title>
        <h1>JOHNNY</h1>
        <span id="dev">DEV</span>
      </Title>
      <h2>FULLSTACK DEVELOPER</h2>
      <p>Desenvolvendo aplicações sensacionais
      com<br/>tecnologias incríveis.</p>
      <a href="#"></a>
      </div>
      <div></div> 
    </HomepageContent>
  </HomepageContainer>
 );
}