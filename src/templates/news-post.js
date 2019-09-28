import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const NewsPostTemplate = ({
  contentComponent,
  helmet,
  data

}) => {
  const PostContent = contentComponent || Content
  console.log(data, 'data');
  


  return (
    <section className="section">
      {helmet || ''}
      <div className="container content news-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1 section__wrapper-content">

          <Link to="/#news" state={{ location: 'news', pageNum : 4}} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>

          <h4 className="date centered color-grey">{data.content.date}</h4>
                      
          <h1 className="title centered">
            {data.content.title}
          </h1>

          <div className="section__wrapper-content-post">

            <PostContent content={data.content.content} />



          </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data

  let props= {
      content:{
        'date' : post.frontmatter.date,
        'title': post.frontmatter.title,
        'content' : post.frontmatter.content,
      },
  }

  return (
    <Layout>

      <NewsPostTemplate

        content={post.html}
        contentComponent={HTMLContent}
        
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }

        data={props}

      />

    </Layout>
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsPost

export const pageQuery = graphql`
query NewsPostByID($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      content
    }
  }
}
`
