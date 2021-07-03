import React from "react";

import SelectiveContextConsumer from "components/SelectiveContextConsumer";

import StateContext from "contexts/StateContext";

const Beer: React.FC = () => {
  console.debug("Beer.render");

  return (
    <SelectiveContextConsumer
      context={StateContext}
      selector={({ beer, addBeer }) => ({
        beer,
        addBeer,
      })}
      name="beer"
    >
      {(value: any) => {
        console.debug("beer.render");
        return <button onClick={value.addBeer}>{`beer: ${value.beer}`}</button>;
      }}
    </SelectiveContextConsumer>
  );
};

export default Beer;
