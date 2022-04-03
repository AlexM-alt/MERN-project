
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage.js";
import {Logo} from "../components"
import {Link} from "react-router-dom"
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
      {/* info */}
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, temporibus ipsum, voluptatibus aut, eveniet eligendi ex saepe in voluptas quod mollitia doloribus cupiditate vel et a veniam aspernatur quasi aliquam tenetur nisi. Quidem aspernatur quae autem dolorem recusandae similique adipisci?
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt"  className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
