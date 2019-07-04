
import React from 'react'
import PropTypes from 'prop-types'

export default class ContactNews extends React.Component {

  render(){
    return(
      <div className="section-4 publications contact">
        <div className="section__wrapper">

        <div className="publications-title">

            <h3 className="color-grey">drop
            us<br/> a line
            </h3>

          <h3>news</h3>

        </div>
        <div className="contact__wrapper">
          <div className="contact__wrapper-contact">
			  <div className="contact__wrapper-contact-title">
				<div>
					<h4 className="second">Direct contact</h4>
					<p>
					mojmail@google.com<br/>
					mojmail@google.com
					</p>
				</div>
				<div>
					<h4>Our office</h4>
					<p>
					Chłodna 20<br/>
					00-999 Warszawa
					</p>
				</div>

			</div>
			<h4 className="third">— or fill a form</h4>
            <div className="contact__wrapper-contact-form">
              <form method="post" action="/" id="form" className="validate">
                  <div className="form-field">
                    <label htmlFor="full-name">Name</label>
                    <input type="text" name="full-name" id="full-name" placeholder="Name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email-input">Email</label>
                    <input type="email" name="email-input" id="email-input" placeholder="example@domain.com" required />
                  </div>
                  <div className="form-field">
                    <textarea placeholder="Your message goes here"></textarea>
                  </div>
                    <button type="submit">Send</button>
              </form>

            </div>
          </div>

          <div className="contact__wrapper-news">
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
          </div>

        </div>


        </div>
            
      </div>

    )
  }
}