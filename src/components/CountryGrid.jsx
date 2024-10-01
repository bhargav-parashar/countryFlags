import react,{useState,useEffect} from 'react';

const CountryCard = ({flag,name,abbr})=>{
    
    return(
        <div
        style={{
            display:'flex',
            flexDirection: 'column',
            height:'200px',
            width: '200px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            border: '1px solid gray',
            padding: '10px',
            margin:'10px'
        }}
        >
            <img 
            src={flag}
            alt={`Flag of ${abbr}`}
            style={{ height:'100px',
            width: '100px'}}
            />
            <h3>{name}</h3>
        </div>
    )
  
};
const Countries = ()=>{
    const apiUrl = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchCountries = async ()=>{
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setCountries(data);
            }catch(err){
                console.log(`Error fetching data: ${err}`);
            }
        };
        fetchCountries();
    },[]);
    console.log(countries);
    return(
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
            countries.map(({name,flag,abbr})=>
                <CountryCard name={name} flag={flag} abbr={abbr} key={abbr}/>
            )
        }
        </div>
        
    )
}

export default Countries;