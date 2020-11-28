import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import GlobalContext from '../utils/global-context'

export default function Home() {
  const global = useContext(GlobalContext)

  function handleClick() {
    global.update({
      count: global.count + 1
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>{global.count}</p>
        <button onClick={handleClick}>Submit</button>
      </main>
    </div>
  )
}
