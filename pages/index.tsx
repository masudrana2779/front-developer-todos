import type { NextPage } from "next";
import HomePageComponent from "../components/Home/HomePage.Component";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="User List">
      <HomePageComponent />
    </Layout>
  );
};

export default Home;
