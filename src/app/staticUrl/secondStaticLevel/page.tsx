"use client";

import { useState } from "react";

export default function SecondStaticUrl() {
  const [orkSwitcher, setOrkSwitcher] = useState(false);

  return (
    <>
      <h1>static address level 2</h1>
      <button onClick={() => setOrkSwitcher(!orkSwitcher)}>Switch</button>
      <br />
      {orkSwitcher ? "WAAAAGH" : "for the Emperor"}
    </>
  );
}
