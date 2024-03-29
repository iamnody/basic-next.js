import Link from 'next/link'
import Meta from '../../components/Meta'
import { server } from '../../config'

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()
//   const paths = articles.map(({ id }) => ({
//     params: { id: id.toString() },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article
