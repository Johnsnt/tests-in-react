import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import imagem from "../assets/img/hopdark.png";

const About = () => <h1>About page</h1>;

const Home = () => <h1>Home page</h1>

const Room = () => {
  const {title} = useParams()
  return (
    <>
    <h1>{title}</h1>
    <img src={imagem} alt="Shadow_Hoppou_Image"/>
    </>
  )
}

const Contact = () => {
  const { name } = useParams();
  return <h1 data-testid="contact-name">{name}</h1>;
};

const TestRouter = () => {
  const name = "MS-08B-3 GOUF";
  const title = "Dark corner"
  return (
    <Router>
      <>
        <nav data-testid="navbar">
          <Link style={{ color: "red" }} data-testid="home-link" to="/">
            Home
          </Link>
          <Link style={{ color: "blue" }} data-testid="about-link" to="/about">
            About
          </Link>
          <Link style={{ color: "green" }} data-testid="contact-link" to={`/contact/${name}`}>
            Contact
          </Link>
          <Link style={{ color: "black" }} data-testid="room-link" to={`/room/${title}`}>
            Room
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name" element={<Contact />} />
          <Route path="/room/:title" element={<Room/>}/>
        </Routes>
      </>
    </Router>
  );
};

export default TestRouter;