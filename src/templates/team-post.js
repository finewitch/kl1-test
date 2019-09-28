import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ArrowIcon from '../components/atoms/ArrowIcon'
import rgIconBl from '../img/social/rgblack.svg'
import gsIconBl from '../img/social/gsblack.svg'

export const TeamPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  image,
  rg,
  gs
}) => {

  return (
    <section className="section">
      {/* {helmet || ''} */}
      <div className="container content team-member section__wrapper">
        
        <div className="columns image__column">
            <img alt="team member" src={image}/>
        </div>

        <div className="columns text__content">

          <Link to="/#team" state={{ location: 'team', pageNum : 3 }} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>
          <h1 className="text__content-title">
            {title}
          </h1>

          <p className="text__content-content">
            {content}
          </p>
          <a href={rg} target="_blank" rel="noopener noreferrer" className="text__content-ico"><img alt="external links icons" src={rgIconBl}/>
            <span>research Gate</span>
          </a>
          <a href={gs} target="_blank" rel="noopener noreferrer" className="text__content-ico"><img alt="external links icons" src={gsIconBl}/>
            <span>google Scholar</span>
          </a>

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

  console.log(data)
  
  const { markdownRemark: post } = data

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

        rg = {post.frontmatter.rg}

        gs = {post.frontmatter.gs}

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
      rg
      gs
    }
  }
}
`
