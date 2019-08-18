import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TeamPostTemplate = ({
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
        <Link to="/#publications" state={{ location: 'publications' }} className="goback">      </Link>
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1">
            <h4 className="date centered color-grey">{date}</h4>
                      


              <h1 className="title centered">
              {title}
            </h1>
            <h2 className="title centered">
              {authors}
            </h2>
            {/* <p>{description}</p> */}
            <PostContent content={abstrakt} />
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </section>
  )
}

// BlogPostTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// }

const TeamPost = ({ data }) => {
  console.log(data, '<--team post')
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeamPostTemplate
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

TeamPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TeamPost


export const pageQuery = graphql`
  query TeamMemberByID($id: String!) {
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
