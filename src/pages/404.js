import React from 'react'
import Layout from '../components/Layout'

function handle404Page(){
 
  setTimeout(() => {
    window.location='/'
  }, 2500);
}
const NotFoundPage = () => (
  <Layout>
    <div className="404 resources__section news-page">
    <h1 className="title centered">The page you're looking for doesn't exist</h1>
    <h2 className="title centered">You're going to be redirected to home page</h2>
    {handle404Page()}
    </div>
  </Layout>
)

export default NotFoundPage
