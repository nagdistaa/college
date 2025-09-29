import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [subjects, setSubjects] = useState([]);
  // Fetch
  const fetchData = async () => {
    const { data } = await axios(backend_url + "/subjects");
    setSubjects(data.subjects);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // !Value
  const value = {
    subjects,
  };
  // !Return
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
const useAppContext = () => useContext(AppContext);

export default useAppContext;
