import "../styles/global.scss";
import { Navbar } from "./navbar";

const App = ({ children, ...rest }) => {
  const Page = children;

  return (
    <div>
      <Navbar />
      <Page {...rest} />;
    </div>
  );
};

export default App;
