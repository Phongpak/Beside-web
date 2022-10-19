import "./App.css";
import BooknowPage from "./pages/BooknowPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className=" max-w-[1280px] mx-auto border">
      <RegisterPage />
      <HomePage />
      <BooknowPage />
    </div>
  );
}

export default App;
