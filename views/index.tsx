import { useState } from "react";
import { Head } from "@react-ssr/express";

interface IndexProps {
  user: any;
}

export default (props: IndexProps) => {
  const [message, setMessage] = useState("waiting...");

  const onClick = () => setMessage("This is a react-ssr!");

  return (
    <>
      <Head>
        <title>An example of @react-ssr/express</title>
      </Head>
      <p>Hello {props.user.name}!</p>
      <button onClick={onClick}>Click Me</button>
      <p>Message from state: {message}</p>
    </>
  );
};
