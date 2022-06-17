import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

const Search = () =>{
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () =>{
       setError(false)
        dispatch(addDigimonsThunk(input, error));
        setInput('');
    }

    return(
        <div>
            <h2> Pesquise um Digimon</h2>
            <div>
                <input value={input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder="Procure um digimon" />
                <button onClick={handleSearch}>Pesquisar</button>
              
            </div>
        </div>
    )
}
export default Search;