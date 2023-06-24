import { GetServerSideProps } from "next";

type Props = {
  id: number;
};

const Page = ({ id }: Props) => {
  return `${id}: Hello world!`;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  console.log("getServerSideProps", process.pid);
  return { props: { id: process.pid } };
};

export default Page;
