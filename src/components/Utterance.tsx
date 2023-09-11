"use client";

import React from "react";

const Utterances: React.FC = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement("script");
        scriptElem.src = "https://utteranc.es/client.js";
        scriptElem.async = true;
        scriptElem.setAttribute("repo", "sstipdev/LK-Blog");
        scriptElem.setAttribute("issue-term", "title");
        scriptElem.setAttribute("theme", "github-light");
        scriptElem.setAttribute("label", "blog-comment");
        scriptElem.crossOrigin = "anonymous";
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Utterances;
