import React, {useState} from 'react'
import axios from "axios";



const SearchBar = () => {
const [searchInput, setSearchInput] = useState([]);
 
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
// if (searchInput.length > 0) {
//     news.filter(() => {
//     return item.title.name.match(searchInput);
// });
// }

if (searchInput.length > 0) {
  const setNews = useState([])
  const searchNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=${searchInput}&from=2022-02-09&sortBy=popularity&apiKey=API_KEY"
    );
    setNews(response.data.articles);
    
  };
  searchNews();
}
return <div>
<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
{/* <table>
  <tr>
    <th>Country</th>
    <th>Continent</th>  
  </tr>
{countries.map((country, index) => {
<div>
  <tr>
    <td>{country.name}</td>
    <td>{country.continent}</td>
  </tr>
</div>
})}
</table> */}
 </div>
};
export default SearchBar;