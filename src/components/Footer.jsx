import fbicon from "../assets/fbicon.png"
import twticon from "../assets/twittericon.png"
import instaicon from "../assets/instaicon.png"
import ghicon from "../assets/githubicon.png"
function Footer() {
    return (
      <footer>
        <a href="#">
            <img src={twticon} alt="twticon" />
        </a>
        <a href="#">
            <img src={fbicon} alt="fbicon" />
        </a>
        <a href="#">
            <img src={instaicon} alt="instaicon" />
        </a>
        <a href="#">
            <img src={ghicon} alt="ghicon" />
        </a>
      </footer>
    )
  }
  
  export default Footer
  