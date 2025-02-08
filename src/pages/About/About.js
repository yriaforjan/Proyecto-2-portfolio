import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
      <section class="about">
        <h3>About me</h3>
        ${Divider()}
        <p>Hello! I'm Yria, a web development student and a full-stack developer in training based in A Pobra do Caramiñal, a small town in the beautiful northwest of Spain. I've been diving into the world of coding for the past few months, and while I'm still studying and not yet working professionally in the field, I'm incredibly passionate about learning and building dynamic, user-friendly applications. My journey into web development started with a curiosity about how websites work and a desire to create digital experiences that people love to use.</p>
        <p>Before venturing into development, I studied a degree in physiotherapy and a master's in pediatric physiotherapy. I worked in the field since graduating, but about a year ago, I decided to change direction and pursue my passion for web development. It's been an exciting challenge, and I'm loving every step of the learning process.</p>
        <p>I'm especially interested in the balance between functionality and design, and I believe a well-designed app is key to a great user experience. That's why I focus on both the technical and creative aspects of my work, constantly striving to improve and expand my skill set.</p>
        <p>Currently, I'm focusing on both front-end and back-end development</span>, excited to grow and develop my skills every day. Although I'm still early in my career, I'm eager to contribute to the web development community and collaborate on interesting projects.</p>
        <p>While I'm not coding, you'll find me surfing, hitting the gym, spending time with my friends or enjoying moments with my family. I also used to compete professionally in athletics, specializing in long jump, where I won several Spanish national titles. Those experiences taught me the importance of discipline and perseverance, which I now apply to my work as a developer. Oh, and I can't live without music - I'm always listening to it, no matter what I'm doing!</p>
        <p>If you're interested in collaborating or simply want to chat about web development, feel free to reach out!</p>
        <img src="./public/images/memoji2.webp" alt="yria memoji">
      </section>`;
};