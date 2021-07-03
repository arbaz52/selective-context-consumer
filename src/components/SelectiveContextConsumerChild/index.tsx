import React from "react";

import { ISelectiveContextConsumerChildProps } from "./types";

function SelectiveContextConsumerChild<Value>({
  name,
  value,
  children,
}: ISelectiveContextConsumerChildProps<Value>) {
  if (name)
    console.debug(`${name}: StateConsumerChild.render, value: ${typeof value}`);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: StateConsumerChild.children changed`);
  }, [children, name]);

  React.useEffect(() => {
    if (!name) return;
    console.debug(`${name}: StateConsumerChild.children changed`);
  }, [children, name]);

  return <>{children(value)}</>;
}

export const MemoizedSelectiveContextConsumerChild = React.memo(
  SelectiveContextConsumerChild,
  (pvProps, nxtProps) => {
    if (pvProps.name) console.debug(pvProps, nxtProps);
    switch (typeof pvProps.value) {
      case "object":
        for (let key in pvProps.value) {
          //@ts-ignore
          if (pvProps.value[key] !== nxtProps.value[key]) return false;
        }
        break;
      default:
        if (pvProps.value !== nxtProps.value) return false;
    }
    if (pvProps.children !== nxtProps.children) return false;
    return true;
  }
) as typeof SelectiveContextConsumerChild;

export default SelectiveContextConsumerChild;
