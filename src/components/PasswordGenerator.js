import React from "react";
import Display from "./Display";
import Strength from "./Strength";

function PasswordGenerator() {
  return (
    <main>
      <Display password={""} copy={() => {}} generatePassword={() => {}} />
      <Strength password={""} />
    </main>
  );
}

export default PasswordGenerator;
