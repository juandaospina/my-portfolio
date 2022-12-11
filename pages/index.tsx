import Head from "next/head";
import Image from "next/image";
import { DiJsBadge, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsFacebook, BsDiscord } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";

import { Header } from "../src/components/Header";
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
          <h1 className={styles.title}>
            Hola! Soy Juan David Ospina 
            <br></br>
            Frontend Developer
          </h1>

          <p className={styles.description}>
            Tecnólogo en desarrollo de software, con experiencia en desarrollo Frontend usando tecnologías
            y lenguajes como, HTML5, CSS3, JavaScript, TypeScript, React JS, Redux Toolkit, React Hook form, Next JS 
          </p>

          <button className={styles.btn}>
            <FaLinkedinIn />
            <a href="https://www.linkedin.com/in/juan-david-saldarriaga-ospina-268224197/">Linkedin</a>
          </button>

          <div className={styles.containerImg}>
            <Image 
              src="/code.png"
              alt="image code"
              width={1100}
              height={480}
              quality={100}
              priority
              style={{
                borderRadius: "8px"
              }}
            />

          <div>
              <span>
                <DiHtml5 color="#db4925"/>
                <DiCss3 color="#0069b2"/>
                <DiJsBadge color="#ffdf00"/>
              </span>
            </div>


            <div>
              <span>
                <DiReact color="#09cff4" />
                React Js
              </span>
            </div>

            <div>
              <span>
                <SiTypescript color="#2f72be"/>
                TypeScript
              </span>
            </div>
          </div>

          <section id="about-me" className={styles.aboutMe}>
            <h1 className={styles.title}>
              Acerca de mí 
            </h1>

            <p className={styles.description}>
              Soy tecnólogo de sistemas, orientado hacia el cumplimiento de resultados y con excelentes habilidades 
              comunicativas. Creativo, enfocado en la resolución de problemas y en el buen relacionamiento interpersonal.
            </p>

            <div className={styles.cardAboutMe}>
              <Image 
                src="/photo.png"
                alt="photo Juan David"
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgb(0 0 0 / 20%)"
                }}
              />
              <div>
                <h2>Juan David</h2>
                <p>Frontend Developer</p>
                <div className={styles.cardSocial}>
                  <a>
                    <BsLinkedin />
                  </a>
                  <a>
                    <BsTwitter />
                  </a>
                  <a>
                    <BsFacebook />
                  </a>
                  <a>
                    <BsDiscord />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.grid}>
            <h1 className={styles.title}>
                Proyectos
              </h1>

              <p className={styles.description}>
                Soy tecnólogo de sistemas, orientado hacia el cumplimiento de resultados y con excelentes habilidades 
              </p>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}
