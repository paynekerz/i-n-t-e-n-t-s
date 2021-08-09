// import env from "idfC"

function ApiSearch(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const apiKey = "GroytYoKuOqto9uNxoXneOKBhJFjI2dHMjrz1ZLC"

    let stCode; //user input


    useEffect(async () => {
        const result = await axios(
            `https://developer.nps.gov/api/v1/parks?stateCode=${stCode}&api_key=${apiKey}`,
        );
        setData (result.data);
    });
}

export default ApiSearch;