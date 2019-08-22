import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  authors,
  date,
  helmet,
  abstrakt
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content publication-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1">

          <Link to="/#publications" state={{ location: 'publications' , pageNum : 4}} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>

          <h4 className="date centered color-grey">{date}</h4>
                      
          <h1 className="title centered">
            {title}
          </h1>

          <h2 className="title centered">
            {authors}
          </h2>

          <PostContent content={abstrakt} />
          
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        authors={post.frontmatter.authors}
        date={post.frontmatter.date}
        abstrakt={post.frontmatter.abstrakt}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        authors
        tags
        abstrakt
      }
    }
  }
`
