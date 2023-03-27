import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import Navbar from "./components/navbar/navbar";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Brand from "./components/brand/Brand";
import Article from "./components/article/Article";
import Blog from "./components/container/blog/Blog";
import ChatGpt from "./components/container/chatgpt3/Gpt";
import Features from "./components/container/features/Features";
import Header from "./components/container/header/Header";
import Footer from "./components/container/footer/Footer";
import Possibality from "./components/container/possibility/Possible";

function App() {
  return (
    <div className="">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <ChatGpt />
      <Features />
      <Feature />
      <Possibality />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
