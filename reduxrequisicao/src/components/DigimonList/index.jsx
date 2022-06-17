import { useSelector } from "react-redux";

const DigimonList = () =>{
    const {digimons} = useSelector(store => store);
    
    return (
        <>
        <h2>Digimons</h2>
        <ul>
        {digimons.map((digimon, index) =>{
                return <li key={index}>{digimon.name}</li>
        })}                
        </ul>
        </>
    )
}
export default DigimonList;