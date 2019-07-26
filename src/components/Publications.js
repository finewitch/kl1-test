
import React from 'react'
// import PropTypes from 'prop-types'

import {publications_getSortingLAbels} from './helpers/helpers';

// import PublicationsPageTemplate from '../templates/publications-page'

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

		this.years = publications_getSortingLAbels(this.props.data);

		console.log(this.years, '<----YEARS')

	}
	//EVENT HANDLERS
	onClickHandler = function(year){
		console.log('RESPONSE--->', this.props.data, 'CHOICE-->', year)

		if(year === 0 ){

			this.setState({
				publications : this.initialState
			})

			return;

		}
		else {

			var orderedPublicationsSet = []
			this.PublicationsSetToBeModified.forEach(el => {

				var _year = new Date(el.node.frontmatter.date).getFullYear();
				if(year === 'pre-2019'){
					if(_year < 2019){

						orderedPublicationsSet.push(el);

					}

				}else if(_year === year) {
					orderedPublicationsSet.push(el);
				}

			});

			this.setState({
				publications : orderedPublicationsSet
			})
	
		}
	}


  render(){
    return(
      <div className="section-3 publications" id="#publications">
			<div className="section__wrapper">
				<div className="publications-title">

					<h3 className="color-white">publications</h3>

					<h4>
						<div className="publications-title-yearsort">
							<button onClick={()=> this.onClickHandler(0)}>all</button>
							<span>/</span>
						</div>

					{this.years.map((el, index, arr)=>{
							if(arr.length -1 === index){

								return(
								<div key = {index} className="publications-title-yearsort">
									<button onClick={()=> this.onClickHandler(el)}>{el}</button>
									<span></span>
								</div>
								)

							}else{
								 
								return (
									<div key = {index} className="publications-title-yearsort">
										<button onClick={()=> this.onClickHandler(el)}>{el}</button>
										<span>/</span>
									</div>
								)

							}

					})}
					</h4>

				</div>
				<div className="publications__wrapper">

					{this.state.publications.map( (el, index)=>{

						let data = el.node.frontmatter;
						let slug = el.node.fields.slug;
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


