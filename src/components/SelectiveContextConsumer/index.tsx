import React from "react";

import { MemoizedSelectiveContextConsumerChild } from "components/SelectiveContextConsumerChild";

import { ISelectiveContextConsumerProps } from "./types";

function SelectiveContextConsumer<Context, Value>({
  name,
  context,
  selector,
  children,
}: ISelectiveContextConsumerProps<Context, Value>) {
  const contextObj = React.useContext(context);

  const selection = React.useMemo(
    () => selector(contextObj),
    [selector, contextObj]
  );

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: selector changed`);
  }, [selector, name]);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: context changed`);
  }, [context, name]);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: selection changed`);
  }, [selection, name]);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: contextObj changed`);
  }, [contextObj, name]);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: StateConsumer.children changed`);
  }, [children, name]);

  return (
    <MemoizedSelectiveContextConsumerChild
      name={name}
      value={selection}
      children={children}
    />
  );
}

export default SelectiveContextConsumer;
