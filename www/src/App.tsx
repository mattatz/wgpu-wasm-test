import React, { useEffect, useRef, useState } from "react";

import * as wasm from '../../wasm/pkg';
import { memory } from "../../wasm/pkg/index_bg.wasm";

const App = () => {
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parent.current;
    wasm.run(el!);
  }, [parent]);

  return (
    <div ref={parent}></div>
  );
};

export default App;