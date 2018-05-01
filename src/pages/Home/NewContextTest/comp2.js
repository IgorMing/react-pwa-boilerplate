import React from 'react';

import { AppContext } from '.';

const Comp1 = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          <button onClick={context.dec}>Decrement</button>
          <div>This is the comp 2. Value: {context.valueTest}</div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Comp1;
