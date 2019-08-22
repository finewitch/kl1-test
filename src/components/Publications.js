
import React from 'react'
// import PropTypes from 'prop-types'

import {publications_getSortingLAbels} from './helpers/helpers';

import SortingYears from './organisms/SortingYearsPub';
import Publication from './atoms/PublicationListEl.js';
import PopupCitation from './atoms/PopupCitation.js';

export default class Publications extends React.Component {

	constructor(props) {
		super(props);
		if(props.data === null || undefined){
			return;
		}
		//POPUP
		this.showPopup = false
		this.initialState = props.data
		this.PublicationsSetToBeModified = Array.from(props.data)// copy props to new array so that initial props reamain intact
		
		this.state={
			publications : this.initialState,
			citationData : null,
			activeTab : 0
		}
		this.currentYear = new Date().getFullYear();

		this.years = publications_getSortingLAbels(this.props.data);

		// console.log(this.years, '<----YEARS')

	}

  render(){
    return(
      <div className="section-4 publications" id="publications">
		  
			<div className="section__wrapper">
				<div className="publications-title">

					<h3 className="color-white">publications</h3>

					<SortingYears years = {this.years} StateHandlerFunction={(year)=>this.onClickHandler(year)} activeTab={this.state.activeTab}/>

				</div>
				<div className="publications__wrapper">

					{this.state.publications.map( (el, index)=>{
						let pub = el.node.frontmatter

						let props = {
							 'slug' : el.node.fields.slug,
							 'title' : pub.title,
							 'authors' : pub.authors,
							 'year' : new Date(pub.date).getFullYear(),
							 'citation' : pub.citation,
							 'popupHandler' : ()=>this.onClickPopup(props.citation),

							 btns :{
								 'source' : pub.source || null,
								 'researchgate' : pub.researchgate || null,
								 'preregistration' : pub.preregistration || null,
								 'pdf' : pub.pdf || null,
								 'data' : pub.data || null
							 }
						}

						return (
							<Publication key = {index} {... props} />
						)
					})}

				</div>

				

				<div className="publications-title title-bottom space-between-removed">
				
				<h4 className="color-grey">
				{/* <LinkIco/> */}
				<a href="/#needtofill">Looking for <span data-hover="RESOURCES">RESOURCES</span>? →</a></h4>


				</div>

			</div>

			{this.state.showPopup ? 

			<PopupCitation data={this.state.citationData} onClickClose={()=>this.onClickClosePopup()}/>

			: null}
			    
      </div>

    )
  }

  	//EVENT HANDLERS
	onClickHandler = function(year){
		this.setState({
			activeTab : year.toString()
		})

		console.log(this.state.activeTab)
		// console.log('RESPONSE--->', this.initialState, 'CHOICE-->', year)

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
	onClickPopup = function (data){

		console.log(data, '<---DATA')
		this.setState({
			citationData : data,
			showPopup: true
		})
	}

	onClickClosePopup = function (){

		this.setState({
			showPopup : false,
			citationData : null
		})
	}
}


