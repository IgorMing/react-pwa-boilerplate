import React from 'react';

import { AppContext } from '.';

const Comp1 = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <button onClick={context.inc}>Increment</button>
          <div>This is the comp 1. Value: {context.valueTest}</div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Comp1;
