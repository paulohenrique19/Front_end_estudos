import Post from './components/Post.tsx'
import Header from './components/Header.tsx'

import styles from './App.module.css'
import './global.css'
import Sidebar from './components/Sidebar.tsx'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Paulo',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Teste content' },
      { type: 'paragraph', content: 'Teste content' },
      { type: 'paragraph', content: 'Teste content' },
      { type: 'link', content: 'Link 1 here'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'User 2',
      role: 'Dev Back-End'
    },
    content: [
      { type: 'paragraph', content: 'Teste content' },
      { type: 'link', content: 'Refresh'}
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },

]




function App() {
  return (
    <>

      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (<Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
