import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>vvsdc's blogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next.js,next , blogs ,blog , vvsdc'c blogs , vvsdc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1>VvSdC's blogs</h1>
        </div>

        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogItem">
            <h3>How to learn c++ in 2024 ?</h3>
            <p>C++ is a object oriented language</p>
          </div>
          <div className="blogItem">
            <h3>How to learn c++ in 2024 ?</h3>
            <p>C++ is a object oriented language</p>
          </div>
          <div className="blogItem">
            <h3>How to learn c++ in 2024 ?</h3>
            <p>C++ is a object oriented language</p>
          </div>
        </div>
      </main>
    </>
  );
}
