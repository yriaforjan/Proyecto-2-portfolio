import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h3>Contact</h3>
<div>
    ${Button("/icons/github.png", "GitHub", "https://github.com/yriaforjan")}
    ${Button("/icons/linkedin.png", "LinkedIn", "https://www.linkedin.com/in/yria-forj%C3%A1n-oliveira/")}
    ${Button("/icons/email.png", "Email", "mailto:yriaforjan.oliveira@gmail.com")}
    ${Button("/icons/telegram.png", "Telegram", "https://t.me/yriaforjan")}
</div>
`;