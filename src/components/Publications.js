
import React from 'react'
// import PropTypes from 'prop-types'
import LinkIco from './atoms/LinkIco'

// import PublicationsPageTemplate from '../templates/publications-page'

export default class Publications extends React.Component {

	constructor(props) {
		super(props);
		console.log(props, '<-------PROPS at page publications')
	}

  render(){
    return(
      <div className="section-3 publications">
			<div className="section__wrapper">
				<div className="publications-title">

					<h3 className="color-white">publications</h3>

					<h4>
						<a href="/#nowhere">2019 </a>&nbsp;/&nbsp;<a href="/#nowhere">2020</a>
						<LinkIco/>
					</h4>

				</div>
				<div className="publications__wrapper">

					{this.props.data.map( (el)=>{
						return (
							<div className="publications__wrapper-box">

								<div className="publications__wrapper-box-year">{el.node.frontmatter.year}</div>

								<div className="publications__wrapper-box-title">
								{el.node.frontmatter.title}
								</div>

								<div className="publications__wrapper-box-author">
								{el.node.frontmatter.authors}
								</div>

								<div className="publications__wrapper-box-read">
								<a href={el.node.fields.slug}>READ MORE</a>
								</div>

								<div className="publications__wrapper-box-btns">
								<a href="/#nowhere">SOURCE</a>
								<a href="/#nowhere">SOURCE</a>
								<a href="/#nowhere">SOURCE</a>
								</div>

							</div>
						)
					})}

				</div>

				

				<div className="publications-title title-bottom space-between-removed">
				
				<h4 className="color-grey">
				{/* <LinkIco/> */}
				<a href="/#needtofill">Looking for <span data-hover="RESOURCES">RESOURCES</span>? →</a></h4>


				</div>

			</div>
            
      </div>

    )
  }
}

