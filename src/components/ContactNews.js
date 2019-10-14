
import React from 'react'
// import PropTypes from 'prop-types'

export default class ContactNews extends React.Component {

  render(){
    return(
      <div className="section-6 contact hidden" id="contact">

        <div className="section__wrapper">
            <div className="contact-title">
              <h3 className="color-grey contact-title-hor">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>u</span>
                <span>s</span>
              </h3>
              <h3 className="color-grey contact-title-vert">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                {/* <span>&nbsp;</span> */}
                <span className="innerspace">u</span>
                <span>s</span>
                </h3>
            </div>

            <div className="contact__wrapper-contact">

                <div className="contact__wrapper-contact-title">

                  <div>
                    <h4 className="second">Direct contact</h4>
                    <p>clinicalresearchspace@gmail.com</p>
                  </div>

                  <div>
                    <h4>Our office</h4>
                    <p>Wóycickiego 1/3, building 14
                    <br/>
                    01-938 Warsaw, Poland
                    </p>
                  </div>

                </div>

                <h4 className="third">— or fill a form</h4>

                  <form className="contact__wrapper-contact-form" name="contact" method="POST" data-netlify="true" action="/contact/thanks/">

                    <input type="hidden" name="form-name" value="contact" />

                      <div className="form-row">

                          <div className="form-field">
                            <input type="text" name="name" id="full-name" placeholder="Name" required />
                          </div>
                          <div className="form-field">
                            <input type="email" name="email" id="email-input" placeholder="example@domain.com" required />
                          </div>

                      </div>

                      <div className="form-field fullrow">
                        <textarea name="message" placeholder="Your message goes here"></textarea>
                      </div>

                    <button type="submit">Send</button>

                  </form>

              </div>
        </div>
      </div>
            
    )
  }
}