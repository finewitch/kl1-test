
import React from 'react'
// import PropTypes from 'prop-types'
import LinkIco from './atoms/LinkIco'
import { ELOOP } from 'constants';

import {publications_getSortingLAbels} from './helpers/helpers';

// import PublicationsPageTemplate from '../templates/publications-page'

export default class Publications extends React.Component {

	constructor(props) {
		super(props);
		
		this.state={
			publications : props.data
		}

		this.years = publications_getSortingLAbels(this.props.data);

		// console.log(this.years, 'years')

	}
	//EVENT HANDLERS
	onClickHandler = function(){
		console.log('RESPONSE--->', this.props.data)


		var yolo = this.props.data.sort(function(a,b){
			console.log(a)
			var c = new Date(a.node.frontmatter.date);
			var d = new Date(b.node.frontmatter.date);

			console.log(c,d)
			return c-d;
			});

			console.log(yolo, '<<<------SORTED')
			// TOOOO BEEE MADE


		this.setState({
			publications : yolo
		})

		console.log(this.state)
	}


  render(){
    return(
      <div className="section-3 publications">
			<div className="section__wrapper">
				<div className="publications-title">

					<h3 className="color-white">publications</h3>

					<h4>
						{this.years.map((el, index, arr)=>{
							 if(arr.length -1 === index){

								 return(
									<div key = {index}>
									<button onClick={()=> this.onClickHandler()}>{el}</button>
									<span></span>
									</div>
								 )

							 }else{
								 
								 return (
									 <div key = {index}>
									 <button onClick={()=> this.onClickHandler()}>{el}</button>
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
						let year = new Date(data.date).getFullYear();

						return (
							<div className="publications__wrapper-box" key = {index}>

								<div className="publications__wrapper-box-year">{year}</div>

								<div className="publications__wrapper-box-title">{data.title}</div>

								<div className="publications__wrapper-box-author">{data.date}{data.authors}</div>

								<div className="publications__wrapper-box-read">
									<a href={data.slug}>READ MORE</a>
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


