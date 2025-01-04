// const { Header, Content, Footer } = Layout;

import AppRoutes from "./components/routes";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
