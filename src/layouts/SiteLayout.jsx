import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { SiteFooter } from "../components/SiteFooter.jsx";

export function SiteLayout() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Header />
      <Outlet />
      <SiteFooter />
    </>
  );
}
