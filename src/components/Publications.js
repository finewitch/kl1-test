
import React from 'react'
import { Link } from 'gatsby';
import reactStringReplace from 'react-string-replace';
// import PropTypes from 'prop-types'

import {publications_getSortingLAbels, findMatch} from './helpers/helpers';

import SortingYears from './organisms/SortingYearsPub';
import SearchInPubs from './organisms/SearchInPubs';
import Publication from './atoms/PublicationListEl.js';
import PopupCitation from './atoms/PopupCitation.js';
import ChapterAnnouncement from './atoms/ChapterAnnouncement'

export default class Publications extends React.Component {
	

	constructor(props) {
		super(props);
		if(props.data === null || undefined){
			return;
		}
		//POPUP
		this.showPopup = false
		this.initialState = props.data

		// console.log('DATA>>', props.data);
		// this.dataToSearch
		this.PublicationsSetToBeModified = Array.from(props.data)// copy props to new array so that initial props reamain intact
		
		this.state={
			publications : this.initialState,
			citationData : null,
			activeTab : 0,
			searchingVal : null
		}
		this.currentYear = new Date().getFullYear();

		this.years = publications_getSortingLAbels(this.props.data);

		// console.log(this.props.dataResources[0].node.fields.slug, '<----res')
		this.resourcesHref = this.props.dataResources[0].node.fields.slug;

	}

  render(){
    return(
      <div className="section-5 publications hidden" id="publications">
		  
			<div className="section__wrapper">

				<h3 className="color-white">publications</h3>

				<div className="publications-title">

					<SortingYears years = {this.years} StateHandlerFunction={(year)=>this.onClickHandler(year)} activeTab={this.state.activeTab}/>

					<SearchInPubs StateHandlerFunction={ (e)=> this.onKeyUp(e) }/>

				</div>
				<div className="publications__wrapper">


					{this.state.publications.map( (el, index)=>{

						let pub = el.node.frontmatter,
						title, authors, journal;

						if(this.state.searchingVal){

							title = reactStringReplace(pub.title, this.state.searchingVal, (match, i) => (
								<span className="highlight">{match}</span>
								));

							authors = reactStringReplace(pub.authors, this.state.searchingVal, (match, i) => (
								<span className="highlight">{match}</span>
								));

							journal = reactStringReplace(pub.journal, this.state.searchingVal, (match, i) => (
								<span className="highlight">{match}</span>
								));	

							}else{

								title = pub.title
								authors = pub.authors
								journal = pub.journal

						}

						let props = {
							 'slug' : el.node.fields.slug,
							 'title' : title,
							 'authors' : authors,
							 'journal' : journal,
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
					<Link to={this.resourcesHref}>Looking for <span data-hover="RESOURCES">RESOURCES</span>? →</Link>
				</h4>


				</div>

			</div>

			<ChapterAnnouncement />

			{this.state.showPopup ? 

			<PopupCitation data={this.state.citationData} onClickClose={()=>this.onClickClosePopup()}/>

			: null}
			    
      </div>

    )
  }

	//EVENT HANDLERS

	onKeyUp = function(val){
		// var key = e.key
		var withoutSpecialChar =  val.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
		// console.log(val)
		var matchedPubs = findMatch(withoutSpecialChar, this.initialState);
		console.log(matchedPubs, '<---wynik');
		this.setState({
			publications : matchedPubs,
			searchingVal: withoutSpecialChar
		})


	}

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


