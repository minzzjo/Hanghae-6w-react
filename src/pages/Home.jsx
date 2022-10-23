import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import List from "../components/List";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <List />
      <Footer />
    </Layout>
  );
};

export default Home;