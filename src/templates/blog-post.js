import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const BlogPostTemplate = ({
  contentComponent,
  title,
  authors,
  date,
  helmet,
  abstrakt,
  pdf,
  data,
  researchgate,
  source,
  preregistration,

}) => {
  const PostContent = contentComponent || Content
  console.log(researchgate, 'researchgate')

  let links ={
    'source' : source || null,
    'researchgate' : researchgate || null,
    'preregistration' : preregistration || null,
    'pdf' : pdf || null,
    'data' : data || null
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content publication-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1 section__wrapper-content">

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
          <div className="section__wrapper-content-post">

            <PostContent content={abstrakt} />

            <div className="links">
              {links.source ? <a rel="noopener noreferrer" href = { links.source } target="_blank">source</a> : null}
              {links.citation ? <a rel="noopener noreferrer" href = { links.citation } target="_blank">citation</a> : null}
              {links.researchgate ? <a rel="noopener noreferrer" href = { links.researchgate } target="_blank">researchgate</a> : null}
              {links.preregistration ? <a rel="noopener noreferrer" href = { links.preregistration } target="_blank">preregistration</a> : null}
              {links.pdf.publicURL ? <a rel="noopener noreferrer" href = { links.pdf.publicURL } target="_blank">pdf</a> : null}
              {links.data.publicURL ? <a rel="noopener noreferrer" href = { links.data.publicURL } target="_blank">data</a> : null}
            </div>

          </div>
          
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

  console.log(data)

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
        researchgate={post.frontmatter.researchgate}
        source={post.frontmatter.source}
        pdf={post.frontmatter.pdf}
        data={post.frontmatter.data}
        preregistration={post.frontmatter.preregistration}
        citation={post.frontmatter.citation}
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
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      authors
      tags
      abstrakt
      pdf {
        publicURL
      }
      data {
        publicURL
      }
      researchgate
      source
      preregistration
      citation
    }
  }
}
`
