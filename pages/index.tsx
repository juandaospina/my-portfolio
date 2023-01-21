import Head from "next/head";

import { 
  Header, 
  Knowledges, 
  AboutMe, 
  PersonalProjects, 
  InitialContent 
} from "../src/components";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="Portfolio Juan David Saldarriaga Ospina" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <InitialContent />
          <AboutMe />
          <PersonalProjects />
          <Knowledges />
        </main>

        <footer className={styles.footer}>
          <span>Juan David Saldarriaga Ospina</span>
          <span>juan.ospinal@outlook.com</span>
          <span>+573193188631</span>
        </footer>
      </div>
    </>
  )
}
