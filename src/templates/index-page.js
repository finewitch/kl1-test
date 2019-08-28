import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import About from '../components/About'
import News from '../components/News'
import Team from '../components/Team'
import Publications from '../components/Publications'
import ContactNews from '../components/ContactNews'
import Partners from '../components/Partners'
import { graphql } from 'gatsby'

import TableOfContent from '../components/TableOfContent'

let styles = {
  color1: '#f7fbfe',
  color2: '#e6f2ff',
  color3: '#aaa8b3',
  color4: '#839fb4',
  color5: '#0f1039',
}
export class IndexPageTemplate extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    console.log(props, '<-------PROPS')
    this.state = {
      page: styles.color1,
      // publications:{
      //   filter: 'all'
      // }
    }
    this.updateStateWithPageLocation = function(){
      // console.log(this.props.location.pageNum)
      if(this.props.location){

        var pageNum = 'color' + this.props.location.pageNum;
        this.setState({
          page: styles[pageNum]
        })

      }
      console.log('update state here couse of props!!');

    }
  }
  render(){
    return(
      <div 
      className="root-wrapper"
      >
        

        <TableOfContent page={this.state.page}/>
        <Landing scrollText={this.props.subheading}/>
        <About/>
        <News data={this.props.news}/>
        <Team data={this.props.teamMembers}/>
        <Publications data={this.props.publications}/>
        <ContactNews/>
        <Partners/>

      </div>
    
    )}
    componentWillUnmount() {
      this._isMounted = false;
    }
    componentDidMount(){
      this._isMounted = true;
      this.updateStateWithPageLocation();

      var bodyTag = document.querySelector('body');
      bodyTag.classList.add('body-overflow');

      setTimeout(
        ()=>{
          bodyTag.classList.remove('body-overflow');

        },500)


    }
  }


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data , location}) => {
  console.log(data, 'data here>>>')
  const news = data.news.edges
  const publications = data.publications.edges
  const teamMembers = data.team.edges

  return (
    <Layout>
      <IndexPageTemplate
        news={news}
        publications={publications}
        teamMembers={teamMembers}
        location={location.state}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  news: allMarkdownRemark(filter: {fields: {slug: {regex: "\\/news/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          content
          image {
            publicURL
          }
        }
      }
    }
  }
  publications: allMarkdownRemark(filter: {fields: {slug: {regex: "\\/publications/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          authors
          citation
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
        }
      }
    }
  }
  team: allMarkdownRemark(filter: {fields: {slug: {regex: "\\/team/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          image {
            publicURL
          }
        }
      }
    }
  }
  markdownRemark {
    frontmatter {
      title
    }
  }
}
`


