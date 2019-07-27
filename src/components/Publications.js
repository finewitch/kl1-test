
import React from 'react'
// import PropTypes from 'prop-types'

import {publications_getSortingLAbels} from './helpers/helpers';

import SortingYears from './organisms/SortingYearsPub';

export default class Publications extends React.Component {

	constructor(props) {
		super(props);
		if(props.data === null || undefined){
			return;
		}
		this.initialState = props.data
		this.PublicationsSetToBeModified = Array.from(props.data)// copy props to new array so that initial props reamain intact
		this.state={
			publications : this.initialState
		}
		this.currentYear = new Date().getFullYear();

		this.years = publications_getSortingLAbels(this.props.data);

		console.log(this.years, '<----YEARS')

	}

  render(){
    return(
      <div className="section-3 publications" id="#publications">
			<div className="section__wrapper">
				<div className="publications-title">

					<h3 className="color-white">publications</h3>

					<SortingYears years = {this.years} StateHandlerFunction={(year)=>this.onClickHandler(year)}/>

				</div>
				<div className="publications__wrapper">

					{this.state.publications.map( (el, index)=>{

						let data = el.node.frontmatter;
						let slug = el.node.fields.slug;
						let files = el.node.frontmatter.files || [];
						let year = new Date(data.date).getFullYear();

						return (
							<div className="publications__wrapper-box" key = {index}>

								<div className="publications__wrapper-box-year">{year}</div>

								<a href={slug} className="publications__wrapper-box-title"><div>{data.title}</div></a>

								<div className="publications__wrapper-box-author">{data.date}{data.authors}</div>

								<div className="publications__wrapper-box-read">
									<a href={slug}>READ MORE</a>
								</div>

								<div className="publications__wrapper-box-btns">
								<a href="/#nowhere">source</a>
									{files.map((el) =>{
										let _file = el.file;
										console.log(el)
										return <a href={_file.publicURL}>{_file.extension}</a>
										
									})}
									{/* <a href="/#nowhere">SOURCE</a>
									<a href="/#nowhere">SOURCE</a> */}
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

  	//EVENT HANDLERS
	onClickHandler = function(year){
		console.log('RESPONSE--->', this.initialState, 'CHOICE-->', year)

		if(year === 0 ){

			this.setState({ publications : this.initialState })
			return;

		}
		else {

			var orderedPublicationsSet = []
			this.PublicationsSetToBeModified.forEach(el => {

				var _year = new Date(el.node.frontmatter.date).getFullYear()

				if(year === 'pre-2019'){

					if(_year < this.currentYear){ orderedPublicationsSet.push(el) }

				}else if(year === "In press"){

					if(_year > this.currentYear){ orderedPublicationsSet.push(el) }

				}else if(_year === year) { orderedPublicationsSet.push(el) }

			});

			this.setState({
				publications : orderedPublicationsSet
			})
	
		}
	}
}


