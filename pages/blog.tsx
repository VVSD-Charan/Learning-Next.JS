import React from 'react'
import styles from '../styles/Blog.module.css'
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className={styles.blogItemh3}>
            <Link href={'/blogpost/learn-javascript'}>
              <h3>How to learn c++ in 2024 ?</h3>
            </Link>
            <p>C++ is a object oriented language</p>
          </div>
          <div className={styles.blogItemh3}>
            <h3>How to learn c++ in 2024 ?</h3>
            <p>C++ is a object oriented language</p>
          </div>
          <div className={styles.blogItemh3}>
            <h3>How to learn c++ in 2024 ?</h3>
            <p>C++ is a object oriented language</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog