import Title from "../../components/title";

type Props = {
  user: {
    name: string;
  };
};

export default ({ user }: Props) => {
  return (
    <>
      <Title>Calibration Training | Profile</Title>
      <p>Profile</p>
      <p>Name: {user.name}</p>
    </>
  );
};
