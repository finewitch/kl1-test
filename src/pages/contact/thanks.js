import React from 'react'
import Layout from '../../components/Layout'
import ArrowIcon from '../../components/atoms/ArrowIcon'
import { Link } from 'gatsby'

export default class Thanks extends React.Component {
  render(){
    return(

  <Layout>
    
    <section className="section">
      <div className="container thanks section__wrapper">
        <Link to="/#contact" state={{ location: 'contact'}} className="goback back-arrow">      
              <ArrowIcon/>
        </Link>
        <div className="content">
          <h1>Thank you!</h1>
          <h2>Your message will be delivered soon</h2>
          <h4>In 3 seconds you'll be redirected back to main page</h4>
        </div>
      </div>
    </section>
  </Layout>

)}
  componentDidMount(){
    // console.log('redirection')
    setTimeout(()=>{
      window.location = '/';
    }, 3000)
  }
  }
