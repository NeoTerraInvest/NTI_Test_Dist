import { Routes, Route, useNavigate } from "react-router-dom";
import Test from "./components/dev/Test";
import Home from "./page/Home";
import Error from "./utils/Error";
import { useEffect } from "react";

const testQuery = import.meta.env.VITE_TEST_QUERY;

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (testQuery) {
      navigate(`/test?${testQuery}`); // ✅ .env 값으로 자동 이동
    }
  }, []);
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  );
};

export default App;
