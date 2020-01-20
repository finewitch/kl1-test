import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ArrowIcon from '../components/atoms/ArrowIcon'

export const ResourcesPageTemplate = ({ resources }) => {
  // const PageContent = contentComponent || Content


  return (
    <section className="section resources__section">
      <div className="container content news-page">
        <div className="columns section__wrapper">
          <div className="column is-10 is-offset-1 section__wrapper-content">

          <Link to="/#publications" state={{ location: 'news', pageNum : 4}} className="goback back-arrow">      
            <ArrowIcon/>
          </Link>

          {/* <h4 className="date centered color-grey">{data.content.date}</h4> */}
                      
          <h1 className="title centered">
            Resources
          </h1>

          <div className="section__wrapper-content-post">
            <ul>
            {/* {resources.map((el, i)=>{
              return (
                <li key={i}>
                  <a href={el.link} target="_blank" rel="noopener noreferrer">{el.link_label}</a>
                </li>
              )
            })} */}
            </ul>

            {/* <PostContent content={data.content.content} /> */}



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
  // const { markdownRemark: post } = data
// console.log(data, '<--')

  return (
    <Layout>
      <ResourcesPageTemplate
        resources={data.markdownRemark.frontmatter.Link_group}
      />
    </Layout>
  )
}

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResourcesPage

export const ResourcesPageQuery = graphql`
 query ResourcesPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
    }
  }
}
`
