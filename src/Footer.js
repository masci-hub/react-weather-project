import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="text-center opacity-75 mt-5 mb-0">
        This project was coded by{" "}
        <a href="https://github.com/masci-hub" target="_blank" rel="noreferrer">
          Martina Scibilia
        </a>
        , versioned on{" "}
        <a
          href="https://github.com/masci-hub/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://masci-react-weather-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
