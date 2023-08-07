import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <main>
      This page should not be visible because an error is thrown in
      getServerSideProps
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  throw new Error("Server Error");
  return {
    props: {},
  };
};
