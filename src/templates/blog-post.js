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
  helmet,
  data

}) => {
  const PostContent = contentComponent || Content


  return (
    <section className="section">
      {helmet || ''}
      <div className="container content publication-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1 section__wrapper-content">

          <Link to="/#publications" state={{ location: 'publications'}} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>

          <h4 className="date centered color-grey">{data.content.date}</h4>
                      
          <h1 className="title centered font-white">
            {data.content.title}
          </h1>

          <h2 className="title centered">
            {data.content.authors}
          </h2>
          <div className="section__wrapper-content-post font-white">

            <PostContent content={data.content.abstrakt} />

            <div className="links">

              {data.links.source ? <a rel="noopener noreferrer" href = { data.links.source } target="_blank">source</a> : null}
              {data.links.citation ? <a rel="noopener noreferrer" href = { data.links.citation } target="_blank">citation</a> : null}
              {data.links.researchgate ? <a rel="noopener noreferrer" href = { data.links.researchgate } target="_blank">researchgate</a> : null}
              {data.links.preregistration ? <a rel="noopener noreferrer" href = { data.links.preregistration } target="_blank">preregistration</a> : null}
              {data.links.pdf ? <a rel="noopener noreferrer" href = { data.links.pdf.publicURL } target="_blank">pdf</a> : null}
              {data.links.data ? <a rel="noopener noreferrer" href = { data.links.data.publicURL } target="_blank">data</a> : null}
              
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


  let props= {
      content:{
        'tags' : post.frontmatter.tags,
        'title' : post.frontmatter.title,
        'authors' : post.frontmatter.authors,
        'date' : post.frontmatter.date,
        'abstrakt' : post.frontmatter.abstrakt
      },
      links :{
        'source' : post.frontmatter.source || null,
        'researchgate' : post.frontmatter.researchgate || null,
        'preregistration' : post.frontmatter.preregistration || null,
        'pdf' : post.frontmatter.pdf || null,
        'data' : post.frontmatter.data || null
      }
  }

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

        data={props}

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
      citation {
            apa
            iso690
            mla
          }
    }
  }
}
`
