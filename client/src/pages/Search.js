import React from 'react';

let select = document.getElementById("stateCodes")
const stateCodes = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

   for (var i = 0; i <stateCodes.length; i++){
   let code = stateCodes[i]
   let element = document.createElement("option")
   element.textContent = code;
   element.value = code;
   select.appendChild(element)
}

const Search = () => {
  return (
    <div>
         <p>What state is the park in?</p>
            <select id="stateCodes">    
            </select>
          <button id="stateSearch">Search</button>
    </div>
  )
};

export default Search;