import { useState } from "react";
const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'

export async function getStaticProps() {
    const res = await fetch(votingEndpoint);
    const data = await res.json();
    const updatedData = data.voting;
    const userScore = updatedData.score;
    // const [votingScore, setVotingScore] = useState([]);
    //     setVotingScore(result.score);
    
    return {
        props: { updatedData }
    }
}
function Voting({ updatedData }) {
 
    let tmp = [];
    for (let i = 0; i < updatedData.length; i += 1) {
        tmp[i] = updatedData[i].score;
    }
    const [competitors, setCompetitors] = useState(tmp);

 
    function subScore(i){
        const tmpChange = competitors[i] - 1;
        let tmpArray = []
        for (let i = 0; i < competitors.length; i += 1) {
            tmpArray[i] = competitors[i];
        }
        tmpArray[i] = tmpChange
        setCompetitors(tmpArray)
        }

    //ran for loop again because if I were to set the temp array equal to the exact same competitors array react
    function addScore(i){
        const tmpChange = competitors[i] + 1;
        let tmpArray = []
        for (let i = 0; i < competitors.length; i += 1) {
            tmpArray[i] = competitors[i];
        }

        tmpArray[i] = tmpChange
        setCompetitors(tmpArray)
        }
    
    return(
        <>
        {updatedData.map(result => { 
            const i = updatedData.indexOf(result);
        return ( 
            <>
            <div>
                <div key={result.name}>
                    {result.name}
                    {competitors[i]}

                    <button onClick={() => addScore(i)}> + </button>
                
                    <button onClick={() => subScore(i)}> - </button>
                   
                    <img src={result.image}></img>
                </div>
            </div>
            </>
            )
        },)}
        </>
    );
}

export default Voting;

