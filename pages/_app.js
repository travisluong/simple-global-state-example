import '../styles/globals.css';
import { useState } from 'react';
import GlobalContext from '../utils/global-context';

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    count: 0,
    update
  })

  function update(data) {
    setState(Object.assign({}, state, data));
  }

  return (
    <GlobalContext.Provider value={state}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
