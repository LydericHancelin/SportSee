import "../assets/scss/home.scss";

import React, { useContext, useState } from "react";

import { FetchContext } from "../utils/context/fetchContext";
import { Link } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";

function Home() {
  const { fetch, toggleFetch } = useContext(FetchContext);

  const context = fetch === "api" ? "données api" : "données mockées";
  return (
    <section id="home">
      <div className="frame">
        <Link className="choose-user" to={`dashboard/12`} userid="12">
          12
        </Link>
        <Link className="choose-user" to={`dashboard/18`} userid="18">
          18
        </Link>
        <div className="context">
          <p>Quelles données voulez-vous utiliser ?</p>
          <ToggleButton
            label={context}
            toggled={true}
            onClick={() => toggleFetch()}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
