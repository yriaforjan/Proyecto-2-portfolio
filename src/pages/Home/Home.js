import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <p>Hey, I'm</p>
      <div>
        <h1>Yria Forján</h1>
        <p>I'm a passionate web development student and a full-stack developer in the making. I love crafting dynamic, user-friendly applications where functionality meets great design. Right now, I'm diving deeper into front-end and back-end development to build seamless, visually engaging digital experiences that make an impact.</p>
      </div>
      <a href="mailto:yriaforjan.oliveira@gmail.com">Say hi →</a>
    </section>`;
};