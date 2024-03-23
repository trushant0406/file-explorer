import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

function Base() {
  return (
    <>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </>
  );
}

export default Base;
