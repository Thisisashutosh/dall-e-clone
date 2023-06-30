import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center justify-between bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-medium bg-[#4f54ed] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
