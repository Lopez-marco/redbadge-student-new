import React from "react";
import PropsExample from "./Component/PropsExample.jsx";
import PropsMappingExample from "./Component/PropsMapping.jsx"

function App() {
  const vistedPlaces = ["US", "Korea", "Ireland", "Germany", "Kentucky"];

  return (<div>
    <PropsExample name="Tom" business="MySpace" />
    <PropsMappingExample visited={vistedPlaces} name="Countries Visited" />
  </div>

  );
}

export default App;
