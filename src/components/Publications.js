
import React from 'react'
// import PropTypes from 'prop-types'
import LinkIco from './atoms/LinkIco'
import { ELOOP } from 'constants';

// import PublicationsPageTemplate from '../templates/publications-page'

export default class Publications extends React.Component {

	constructor(props) {
		super(props);
		this._allYears = [];
		
		this.state={
			publications : props.data
		}

		//put the incoming years into array
		this.props.data.map( (el)=>{
			let data = el.node.frontmatter.year;
			if(data != null){
				this._allYears.push(parseInt(data));
			}
		})
		//remove duplicates
		this.years = this._allYears.reduce(function (accu, curr) {

			if(accu.indexOf(curr) == -1) accu.push(curr)
			return accu;

		}, [])
		//sort from the highest
		this.years = this.years.sort(function (a, b) {  return  b - a;  });


	}
	//EVENT HANDLERS
	onClickHandler = function(){
		console.log('yey', this.props.data)
		var yolo = this.props.data.sort(function(a,b){
			var c = new Date(a.date);
			var d = new Date(b.date);
			return c-d;
			});

			// console.log(yolo)
			// TOOOO BEEE MADE


		this.setState({
			// publications : 'yolo'
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
						return (
							<div className="publications__wrapper-box" key = {index}>

								<div className="publications__wrapper-box-year">{data.year}</div>

								<div className="publications__wrapper-box-title">
								{data.title}
								</div>

								<div className="publications__wrapper-box-author">
								{data.authors}
								</div>

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

