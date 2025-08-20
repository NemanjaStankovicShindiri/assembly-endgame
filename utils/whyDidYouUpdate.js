import React from "react";
export default function useWhyDidYouUpdate(name, props) {
  const previousProps = React.useRef(props);

  React.useEffect(() => {
    const allKeys = Object.keys({ ...previousProps.current, ...props });
    const changesObj = {};

    allKeys.forEach((key) => {
      if (previousProps.current[key] !== props[key]) {
        changesObj[key] = {
          from: previousProps.current[key],
          to: props[key],
        };
      }
    });

    if (Object.keys(changesObj).length > 0) {
      console.log(`[why-did-you-update] ${name}`, changesObj);
    }

    previousProps.current = props;
  });
}
