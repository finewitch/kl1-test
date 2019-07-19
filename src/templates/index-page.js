import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Goals from '../components/Goals'
import Publications from '../components/Publications'
import ContactNews from '../components/ContactNews'

import TableOfContent from '../components/TableOfContent'

  export class IndexPageTemplate extends React.Component {

  constructor(props) {
    super(props);
    console.log(props, '<-------PROPS')
    this.state = {
      page: '01',
    }
    
    this.attatchScrollEvent = function (screenX){
      var _topGap = 600;
    if(screenX.matches){
      _topGap = 250;
    }

    console.log(_topGap, 'gap')

    var bodyTag = document.querySelector('body');
    this.getDomEls(bodyTag, _topGap);
    
    var rooter = document.querySelector('.root-wrapper');
    var menu = document.querySelector('.menu');

    window.addEventListener('scroll', function ( e ) {
      let Ypos = window.scrollY;

      if(Ypos < this.Top_2){

        this.setState({
          page: '01',
        })
        rooter.classList.remove('bg-section-1')
        rooter.classList.remove('bg-section-2')
        rooter.classList.remove('bg-section-3')

        menu.classList.remove('second-menu-bg')

      }else if(Ypos >= this.Top_2 && Ypos < this.Top_3){

        this.setState({
          page: '02',
        })

        rooter.classList.add('bg-section-2')
        menu.classList.add('second-menu-bg')
        rooter.classList.remove('bg-section-3')

      }else if(Ypos >= this.Top_3 && Ypos < this.Top_4){
        this.setState({
          page: '03',
        })
        rooter.classList.add('bg-section-3')
        rooter.classList.remove('bg-section-4')

      }else if(Ypos >= this.Top_4){

        this.setState({
          page: '04',
        })
        rooter.classList.add('bg-section-4')
      }

    }.bind(this))

  }
      this.getDomEls = function(body, gap){

        this.Top_4 = document.querySelector('.section-4').offsetTop - gap; //1300
        this.Top_3 = document.querySelector('.section-3').offsetTop - gap; //1300
        this.Top_2 = document.querySelector('.section-2').offsetTop - gap; //670
        this.Top_1 = document.querySelector('.section-1').offsetTop - gap; //0
  
    }

  }
  render(){
    return(
  <div className="root-wrapper">
    <TableOfContent page={this.state.page}/>
    <Landing title={this.props.title}/>
    <Goals/>
    <Publications/>
    <ContactNews/>
    {/* <h1 className="title">{this.props.title}</h1> */}

    {/* <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
    
    )}
    componentDidMount(){
      
      var _gatsbyPage = document.getElementById('__gatsby');
      if (_gatsbyPage === null){
        return;
      }
      var screenResX = window.matchMedia("(max-width: 1440px)");
      // console.log(screenResX, '---screen')

      var bodyTag = document.querySelector('body');
      bodyTag.classList.add('body-overflow');

      setTimeout(
        ()=>{
          console.log('mount')
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        publications={frontmatter.publications}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        publications {
          title
          ownurl
          year
          authors
        }
      }
    }
  }
`
