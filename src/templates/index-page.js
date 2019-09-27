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
    }
    this.updateStateWithPageLocation = function(){

      const menu = document.querySelector('.menu');
      const menuLinks = document.querySelectorAll('.menu-links');
      const secondSec = document.querySelector('.about')
  
      var section = document.querySelectorAll(".hidden");
      var sections = {};
      var i = 0;
    
      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
      });
      console.log(sections)

        window.onscroll = function() {
          var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
          // console.log(scrollPosition)

          // console.log(scrollPosition, 'pos')
          menuLinks.forEach(el=>{
            el.classList.remove('active');
          })
      
          for (i in sections) {
            if (scrollPosition  >= sections['about']/1.2){
              // console.log('here we go');
              secondSec.querySelectorAll('.n-visible').forEach(el=>{
                el.classList.add('is-visible')
              })

            }
            if (sections[i] <= scrollPosition) {

              // var target = menu.querySelector('.active');
              // // console.log(menu)
              // if (target === null){
              //   return;
              // }
              menu.querySelector('.active').classList.remove('active')
              menu.querySelector('.menu-' + i ).classList.add('active');

            }
            }
          }
        };
      

    
  }
  render(){
    return(
      <div 
      className="root-wrapper"
      >
      
        <Landing scrollText={this.props.subheading}/>
        <About/>
        <News data={this.props.news}/>
        <Team data={this.props.teamMembers}/>
        <Publications data={this.props.publications} dataResources={this.props.resources}/>
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

        },1500)


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
  const resources = data.resources.edges

  return (
    <Layout>
      <IndexPageTemplate
        news={news}
        publications={publications}
        resources={resources}
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
  resources: allMarkdownRemark(filter: {fields: {slug: {regex: "\\/resources/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
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
          journal
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
        id
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
          rg
          gs
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


