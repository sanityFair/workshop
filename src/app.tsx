import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Counter } from "./components/counter";
import { AboutPage } from "./pages/about-page";
import { ProfilePage } from "./pages/profile-page";
import { useTheme } from "./theme/useTheme";
import { classes } from "./helpers/classes";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classes({ cls: "app", mods: { dark: theme === "dark" } })}>
      <Counter />
      <button onClick={toggleTheme}>dark\light</button>
      <Link to="/about">about</Link>
      <Link to="/profile">profile</Link>
      <Suspense fallback={<div>.....</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
