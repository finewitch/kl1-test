
export function publications_getSortingLAbels(responseData){
    // console.log('exported function', responseData)
    let _allYears = [];
    let years;

    	//put the incoming years into array
		responseData.map( (el)=>{
			let data = el.node.frontmatter.date;
			if(data != null){
				_allYears.push(parseInt(data));
			}
		})
		//remove duplicates
		years = _allYears.reduce(function (accu, curr) {

			if(accu.indexOf(curr) == -1) accu.push(curr)
			return accu;

        }, [])
        
		//sort from the highest
        years = years.sort(function (a, b) {  return  b - a;  });

        return years;
        

}