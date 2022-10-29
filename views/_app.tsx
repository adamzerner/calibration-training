import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";

const App = ({ children, ...rest }) => {
  const Page = children;

  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Page {...rest} />
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default App;
