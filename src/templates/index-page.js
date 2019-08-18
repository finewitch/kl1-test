import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import About from '../components/About'
import Team from '../components/Team'
import Publications from '../components/Publications'
import ContactNews from '../components/ContactNews'
import { graphql } from 'gatsby'

import TableOfContent from '../components/TableOfContent'

let styles = {
  color1: '#c38d9d',
  color2: '#e27d5f',
  color3: '#e27d5f',
  color4: '#59b0d9',
  color5: '#4056a1',
}
export class IndexPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    console.log(props, '<-------PROPS')
    this.state = {
      page: styles.color1,
    }
    
    this.attatchScrollEvent = function (screenX){
      var _topGap = 600;
      if(screenX.matches){
        _topGap = 250;
      }

    // console.log(_topGap, 'gap')

    var bodyTag = document.querySelector('body');
    this.getDomEls(bodyTag, _topGap);

    window.addEventListener('scroll', function ( e ) {
      let Ypos = window.scrollY;

      if(Ypos < this.Top_2)                             { this.setState({ page: styles.color1 }) }
      else if(Ypos >= this.Top_2 && Ypos < this.Top_3)  { this.setState({ page: styles.color2 }) }
      else if(Ypos >= this.Top_3 && Ypos < this.Top_4)  { this.setState({ page: styles.color3 }) }
      else if(Ypos >= this.Top_4 && Ypos < this.Top_5)  { this.setState({ page: styles.color4 }) }
      else if(Ypos >= this.Top_5)                       { this.setState({ page: styles.color5 }) }

    }.bind(this))

  }
      this.getDomEls = function(body, gap){

        this.Top_5 = document.querySelector('.section-5').offsetTop - gap; //1300
        this.Top_4 = document.querySelector('.section-4').offsetTop - gap; //1300
        this.Top_3 = document.querySelector('.section-3').offsetTop - gap; //1300
        this.Top_2 = document.querySelector('.section-2').offsetTop - gap; //670
        this.Top_1 = document.querySelector('.section-1').offsetTop - gap; //0
  
    }

  }
  render(){
    return(
      <div 
      className="root-wrapper"
      style={{backgroundColor: this.state.page}}>
        

        <TableOfContent page={this.state.page}/>
        <Landing scrollText={this.props.subheading}/>
        <About/>
        <Team data={this.props.teamMembers}/>
        <Publications data={this.props.publications}/>
        <ContactNews/>

      </div>
    
    )}
    componentWillUnmount(){
      console.log('unmount')
    }
    componentDidMount(){
      
      var _gatsbyPage = document.getElementById('___gatsby');
      if (_gatsbyPage === null){
        return;
      }
      var screenResX = window.matchMedia("(max-width: 1440px)");
      // console.log(screenResX, '---screen')

      var bodyTag = document.querySelector('body');
      bodyTag.classList.add('body-overflow');

      setTimeout(
        ()=>{

          this.setState({ loading: false })
          this.attatchScrollEvent(screenResX);
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
  const { frontmatter } = data.markdownRemark
  const publications = data.publications.edges
  const teamMembers = data.team.edges
  console.log(teamMembers, '<----t')

  return (
    <Layout>
      <IndexPageTemplate
        // title={frontmatter.title}
        subheading={frontmatter.subheading}
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
          researchgate
          source
          preregistration
          data {
            publicURL
          }
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


