import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import useAppContext from "./context/AppContext";
import Home from "./pages/Home";
import ResourceManagement from "./pages/ResourceManagement";
import SubjectDetails from "./pages/SubjectDetails";

const App = () => {
  const { subjects } = useAppContext();
  console.log(subjects);
  // !Routes
  const routes = (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/resource-management" element={<ResourceManagement />} />
      <Route path="/subject/:subjectId" element={<SubjectDetails />} />
    </Routes>
  );
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-120px)] overflow-y-scroll">{routes}</div>
      <Footer />
    </>
  );
};

export default App;
