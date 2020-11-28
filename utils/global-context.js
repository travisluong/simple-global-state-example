import React from 'react';

const GlobalContext = React.createContext({
  count: 0,
  update: (data) => {}
})

export default GlobalContext