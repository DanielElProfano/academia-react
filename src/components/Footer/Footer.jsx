import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitSquare } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer class="b-footer">
      <div class="b-footer_container">
        <div className="b-footer__links">
            <div className="b-footer__description">
                <span>Front</span>
                <a href="https://github.com/DanielElProfano/academia-react">
                    <img className="b-footer__icon" src="/images/icons/github.png" target="_blank" alt="github icon"></img>
                </a>
            </div>
       
            <div className="b-footer__description">
                Back
                <a href="https://github.com/DanielElProfano/Academia-json">
                    <img className="b-footer__icon" src="/images/icons/github.png" target="_blank" alt="github icon"></img>
                </a>
            </div>
            <div className="b-footer__description">
                Linkedin
                <a href="www.linkedin.com/in/daniel-gonzalez-guijarro">
                    <img className="b-footer__icon" src="/images/icons/linkedin.png" target="_blank" alt="github icon"></img>
                </a>
            </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
