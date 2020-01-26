import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const ResourcesPageTemplate = ({ resources }) => {
  const contentData = resources.markdownRemark.frontmatter.Link_group;
  // console.log(contentData.Link_group, ':)))')


  return (
    <section className="section resources__section">
      <div className="container content news-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1 section__wrapper-content">

          <Link to="/#publications" state={{ location: 'news', pageNum : 4}} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>

          <h1 className="title centered">
            Resources
          </h1>

          <div className="section__wrapper-content-post">
            <ul>
            {contentData.map((el, i)=>{
              return (
                <li key={i}>
                  <div dangerouslySetInnerHTML={{ __html: el.content }}></div>
                </li>
              )
            })}
            </ul>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

// ResourcesPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

const ResourcesPage = ({ data }) => {
  return (
    <Layout>
      <ResourcesPageTemplate
        resources={data}
      />
    </Layout>
  )
}

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResourcesPage

export const ResourcesPageQuery = graphql`
query ResourcesPageQuery {
  markdownRemark(fields: {slug: {regex: "\\resources/resources-2/"}}) {
    html
    frontmatter {
      Link_group {
        content
      }
    }
    fields {
      slug
    }
    internal {
      type
    }
  }
}
`
