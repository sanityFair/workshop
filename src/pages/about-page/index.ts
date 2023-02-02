import React from "react";

export const AboutPage = React.lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => res(import("./about-page") as any), 2000);
    })
);
