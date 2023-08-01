/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Row from "../components/Row";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
  };

  return (
    <>
      <Navbar handleSubmit={handleSubmit} />
      <Row />
    </>
  );
};

export default Home;
