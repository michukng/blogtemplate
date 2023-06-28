import React, { useState } from 'react'

const Main = () => {

  const [postsData, setPostsData] = useState([
    {
      id: 1,
      title: `pierwsze`,
      body: `Body`
    },
    {
      id: 2,
      title: `pierwsze`,
      body: `Body`
    },
    {
      id: 3,
      title: `pierwsze`,
      body: `Body`
    },
    {
      id: 4,
      title: `pierwsze`,
      body: `Body`
    },
    {
      id: 5,
      title: `pierwsze`,
      body: `Body`
    },
    {
      id: 6,
      title: `drugie`,
      body: `Body`
    },
    {
      id: 7,
      title: `drugie`,
      body: `Body`
    },
    {
      id: 8,
      title: `drugie`,
      body: `Body`
    },
    {
      id: 9,
      title: `drugie`,
      body: `Body`
    },
    {
      id: 10,
      title: `drugie`,
      body: `Body`
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postsData.slice(firstPostIndex, lastPostIndex);

  let pages = [];
  for (let i = 1; i <= Math.ceil(postsData.length/postsPerPage); i++) {
    pages.push(i)
  }
  
  return (
    <main>
      <section id='main-header' className='main-header'>
        <p className='p-category'>
            Category
        </p>
        <h1 className='h1-category'>
            Entrepreneurship
        </h1>
        <p className='p-lorem'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sed ullam hic quam dolore tempora, velit inventore esse quae deleniti doloribus reiciendis, et nobis cum eum quaerat nam illum corrupti.
        </p>
        <ul>
          {currentPosts.map((post) => 
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>)}
        </ul>
        <p>
          {
            pages.map((page, index) => {
              return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })
          }
        </p>
      </section>
    </main>
  )
}

export default Main
