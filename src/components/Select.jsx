export default function Select({MakeFilterFilm,FilterList}){
    return(
        <select onChange={MakeFilterFilm} className="form-select w-auto mx-auto mt-3" aria-label="Default select example">
            <option value="null">Open this select menu</option>
            {FilterList.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
        </select>
    )
}