import { useTheme } from "../context/ThemeProvider.jsx";
import "./styles/styles.css";

import lightlogo from "../assets/icons8-sun-50.png";
import darklogo from "../assets/icons8-dark-60.png";

const Themebar = () => {
   const { theme, setTheme, isLight } = useTheme();


    return (
        <div className="themebar">
            <div className={`themebar-light ${isLight ? "active-scale" : ""}`} onClick={() => setTheme('light')}>
                <img src={lightlogo} alt="light-mode" />
            </div>
            <div className={`themebar-dark ${!isLight ? "active-scale" : ""}`} onClick={() => setTheme('dark')}>
                <img src={darklogo} alt="dark-mode" />
            </div>
        </div>
    );
};

export default Themebar;