import { Head } from "@react-ssr/express";

type Props = {
  children: string;
};

export default ({ children }: Props) => (
  <Head>
    <title>{children}</title>
  </Head>
);
