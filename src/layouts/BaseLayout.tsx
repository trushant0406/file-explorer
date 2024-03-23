import React from "react";
import { BaseLayoutProps } from "./base-layout.type";
import Header from "../pages/Header";
import NavBar from "../pages/Navbar";

const BaseLayout = ({ children }: BaseLayoutProps) => {

  return (
    <div className="flex flex-col">
      <div>
        <Header />
        <NavBar />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
