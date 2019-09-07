
import React from 'react'
// import PropTypes from 'prop-types'

export default class ContactNews extends React.Component {

  render(){
    return(
      <div className="section-6 publications contact hidden" id="contact">
        <div className="section__wrapper">


            <h3 className="color-grey centered">Contact us
            </h3>


        <div className="contact__wrapper">
          <div className="contact__wrapper-contact">

			  <div className="contact__wrapper-contact-title">
          <div>
            <h4 className="second">Direct contact</h4>
            <p>
            clinicalresearchspace@gmail.com
            </p>
          </div>
          <div>
            <h4>Our office</h4>
            <p>
            Wóycickiego 1/3, building 14
            <br/>
            01-938 Warsaw, Poland
            </p>
          </div>

        </div>
        <h4 className="third">— or fill a form</h4>
        <div className="contact__wrapper-contact-form">
          <form method="post" action="/" id="form">

            <div className="form-row">

                <div className="form-field">
                  <input type="text" name="full-name" id="full-name" placeholder="Name" required />
                </div>
                <div className="form-field">
                  <input type="email" name="email-input" id="email-input" placeholder="example@domain.com" required />
                </div>

            </div>

              <div className="form-field fullrow">
                <textarea placeholder="Your message goes here"></textarea>
              </div>
                <button type="submit">Send</button>
          </form>

        </div>
      </div>

      {/* <div className="contact__wrapper-news">
        <h3>news</h3>
            <ul>
              <li>
                <span className="date">12/06/2019</span>
                <span>CSPACE na konferencji w Krakowie
                </span>
              </li>
              <li>Zdobyliśmy kolejny grant</li>
              <li>Nowe wyniki badań</li>
              <li>Update do działu resources</li>
            </ul>

      </div> */}

  </div>


        </div>
            
      </div>

    )
  }
}