import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [blog,setBlog] = useState();

    useEffect(() =>
    {
       if(!router.isReady)return;

       fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
          return a.json()
       }).then((data)=>{
          setBlog(data);
       })
    },[router.isReady])

  return (
    <div className={styles.container}>
       <main className={styles.main}>
       <h1>Title of the page : {blog && blog.title}</h1>
       <hr/>
       <div>
          {blog && blog.content}
       </div>
       </main>
    </div>
  )
}

export default slug;