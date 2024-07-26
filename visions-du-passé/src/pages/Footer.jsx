import "../styles/Footer.css";
import logoX from "../assets/twitter_x_new_logo_x_icon_256077.svg";
import logoInsta from "../assets/instagram_insta_logo_icon_250828.svg";
import logoYt from "../assets/youtube_logo_icon_206627.svg";
import logoLin from "../assets/linkedinlogokey_99649.svg";

function Footer() {
  return (
    <>
      <div className="AllOfThings">
        <div className="copyright">
          <p>© Copyright Wild Code School 2024</p>
        </div>
        <div className="pictures">
          <img className="logoX" src={logoX} alt="logoX" />
          <img className="logoInsta" src={logoInsta} alt="logoInsta" />
          <img className="logoYt" src={logoYt} alt="logoYt" />
          <img className="logoLin" src={logoLin} alt="logoLin" />
        </div>
      </div>
    </>
  );
}

export default Footer;
