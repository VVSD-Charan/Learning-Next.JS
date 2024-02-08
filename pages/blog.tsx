import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    console.log("Use effect is running")
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((data) => {
      console.log(data)
      setBlogs(data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="blogs">
          <h2>Popular blogs</h2>
          {
            blogs.length > 0 ? blogs.map((blogItem,index) => (
              <div className={styles.blogItemh3} key={index}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                </Link>
                <p className={styles.blogItempara}>{blogItem.content}</p>
              </div>
            )) : null
          }
        </div>
      </main>
    </div>
  )
}

export default Blog