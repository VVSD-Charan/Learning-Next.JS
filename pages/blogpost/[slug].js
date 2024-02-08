import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div className={styles.container}>
       <main className={styles.main}>
       <h1>Title of the page : {slug}</h1>
       <hr/>
       <div>
          {slug} is an amazing technology. Read the page to get to know entire working and advantages and drawbacks of {slug}
       </div>
       </main>
    </div>
  )
}

export default slug;