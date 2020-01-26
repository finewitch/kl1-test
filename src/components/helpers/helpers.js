import React from 'react'

export function publications_getSortingLAbels(responseData){
    // const borderYear = 2019;
    const currentYear = new Date().getFullYear();
    let _allYears = [];
    let years;

    	//put the incoming years into array
		responseData.map( (el)=>{
            let data = el.node.frontmatter.date;
			if(data != null){
                var dateYear = new Date(data).getFullYear();
                if(dateYear < currentYear){

                    _allYears.push('pre-2019');

                }else if(dateYear > currentYear){
                    _allYears.push('In press');
                }else{
                    
                    _allYears.push(parseInt(data));

                }
            }
            return _allYears;
        })
        
		//remove duplicates
		years = _allYears.reduce(function (accu, curr) {

			if(accu.indexOf(curr) === -1) accu.push(curr)
			return accu;

        }, [])
        
		//sort from the highest
        years = years.sort(function (a, b) {  return  b - a;  });

        return years;
        

}


export function findMatch(word, list){
    // console.log(word, 'before')
    // var withoutSpecialChar =  word.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    // console.log(word, 'after')
    return list.filter(pub=>{
        const regex = new RegExp(word, 'gi');

        if(!pub.node.frontmatter.journal){

            return pub.node.frontmatter.title.match(regex) || pub.node.frontmatter.authors.match(regex);

        }else{
            return pub.node.frontmatter.title.match(regex) || pub.node.frontmatter.authors.match(regex) || pub.node.frontmatter.journal.match(regex);
        }
        // console.log(pub.node.frontmatter.journal, '<--')

        
	});

}