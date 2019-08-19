import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const TeamPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {/* {helmet || ''} */}
      <div className="container content team-member section__wrapper">
        
        <div className="columns image__column">
            <img alt="team member picture" src={image}/>
        </div>

        <div className="columns text__content">

          <Link to="/#team" state={{ location: 'team' }} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>
          <h1 className="text__content-title">
            {title}
          </h1>

          <p className="text__content-content">
            {content}
          </p>

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
  
  const { markdownRemark: post } = data

  console.table(post)

  return (
    <Layout>
      <TeamPostTemplate
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }

        title = {post.frontmatter.title}

        content = {post.frontmatter.content}

        image = {post.frontmatter.image.publicURL}

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
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      title
      content
      image {
        publicURL
      }
    }
  }
}
`
