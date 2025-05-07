import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import Switch from '@mui/material/Switch';
import { useState,useEffect } from "react";

function App() {
  const [checked, setChecked] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const handleChange = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    setChecked(!checked);

  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (

    <div className="bg-[url(/img/Header-Light.png)] dark:bg-[#2C2C2C] dark:bg-[url(/img/Header-Dark.png)] bg-no-repeat bg-cover  m-0 p-0">
      <div className="flex justify-end lg:px-26"> 
      <Switch
      checked={checked}
      onChange={handleChange}/>
      </div>
      <Header />
      <Experience />
      <Projects />
     

    
    </div>
  );
}

export default App;
