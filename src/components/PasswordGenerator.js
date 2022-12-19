import React from "react";
import Display from "./Display";

function PasswordGenerator() {
  return (
    <main>
      <Display password={""} copy={() => {}} generatePassword={() => {}} />
    </main>
  );
}

export default PasswordGenerator;
