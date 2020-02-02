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
import TypeIt from 'typeit';


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
    // console.log(props, '<-------PROPS')
    this.state = {
      page: styles.color1,
      pubsInViewport : false,
    }
    // this.inViewPort = false;
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


        window.onscroll = function() {

          var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

          menuLinks.forEach(el=>{
            el.classList.remove('active');
          })
      
          for (i in sections) {
            if (scrollPosition  >= sections['about']/1.2){
              // console.log('here we go');
              secondSec.querySelectorAll('.n-visible').forEach(el=>{
                el.classList.add('is-visible')
              })
              secondSec.querySelectorAll('.border-t-none').forEach(el=>{
                el.classList.add('border-t-visible')
              })
              secondSec.querySelectorAll('.border-b-none').forEach(el=>{
                el.classList.add('border-b-visible')
              })

            }

            // MAKE CHANGE IN PUBLICATIONS COMPONENT PROPS TO TRIGER THE TYPEIN PLUGIN
            if (scrollPosition  >= ( sections['team']* 1.2) ){
              window.myTypeItInstance.go()
            }

            if (sections[i] <= scrollPosition) {

              menu.querySelector('.active').classList.remove('active')
              menu.querySelector('.menu-' + i ).classList.add('active');

            }
            }}
          }
  }
  render(){
    return(
      <div>
      <div className="root-wrapper">
      
        <Landing scrollText={this.props.subheading}/>
        <About/>
        <News data={this.props.news}/>
        <Team data={this.props.teamMembers}/>

        <Publications data={this.props.publications} dataResources={this.props.resources} inViewport={this.state.pubsInViewport}/>

        <ContactNews onScroll={this.handleScroll}/>

      </div>
        <Partners/>
        </div>
    
    )}
    componentWillUnmount() {
      this._isMounted = false;
    }
    componentDidMount(){

      window.myTypeItInstance = new TypeIt('#typeit-header', {
        speed: 420,
        startDelay: 900,
        afterComplete: (instance) => {

          setTimeout(()=>{
            var cursor = document.querySelector('.ti-cursor');
            if(cursor){
              document.querySelector('.ti-cursor').classList.add('hide-cursor');
            }
          },3000)

       },
      })
      .type('Publicatios')
      .pause(250)
      .delete(2)
      .type('ons')
      .type(`<span class="blackdot">.</span>`)
      .pause(300)

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
          image{
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
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

