import React from "react";
import Display from "./Display";
import Strength from "./Strength";
import Configuration from "./Configuration";

function PasswordGenerator() {
  return (
    <main>
      <Display password={""} copy={() => {}} generatePassword={() => {}} />
      <Strength password={""} />
      <Configuration settings={""} updateSettings={() => {}} />
    </main>
  );
}

export default PasswordGenerator;
