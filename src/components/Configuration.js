import React from "react";
import Length from "./Length";

function Configuration({ settings, updateSettings, copy }) {
  return (
    <section className="configuration-container">
      <h2 className="configuration-header">Settings</h2>
      <div className="configuration-options-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <Length length={50} updateSettings={updateSettings} />
        </form>
      </div>
    </section>
  );
}

export default Configuration;
