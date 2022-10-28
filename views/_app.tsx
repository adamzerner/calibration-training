import "../styles/global.scss";
import Navbar from "./navbar";
import Footer from "./footer";

const App = ({ children, ...rest }) => {
  const Page = children;

  return (
    <div>
      <Navbar />
      <Page {...rest} />
      <Footer />
    </div>
  );
};

export default App;
