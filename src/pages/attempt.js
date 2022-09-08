import { useEffect, useState } from "react";

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



export default function Home({ updatedData }) {
    // const { results = [] } = updatedData;
    // const name1 = updatedData[0].name
    // const [name1, setCompetitor1Score] = useState(updatedData[0].score);
    // console.log(competitor1Score);


    const [competitor1Score, setCompetitor1Score] = useState(updatedData[0].score);
    console.log(competitor1Score);
    const[comp1Status, setComp1Status] = useState(0)

   
    let tmp = [];
    // let competitors = [];
    for (let i = 0; i < updatedData.length; i += 1) {
        tmp[i] = updatedData[i].score;
    }
    const [competitors, setCompetitors] = useState(tmp);

    console.log(competitors);

    // const tmpChange = competitors[i] + 1;
    // let tmpArray = competitors




    // console.log(competitors)

    // const [scores, setScores] = useState()
    // useEffect(() => {
    //     setCompetitors(tmp); 
    // });
    


    return(
        <>
        
        {updatedData.map(result => { 
        return ( 
            <>
            <div>
                <div key={result.score}>
                    { competitors[0] }
                    {result.name} 
                    {/* {result.score} */}
                    <button onClick={() => setCompetitors(competitors[0] + 1)}> + </button>
                    <button onClick={() => setCompetitors(competitors[0] - 1)}> - </button>
                    {/* <div>
                        {updatedData.map(vals=> {
                            return <button> duh {vals.score} </button>
                        })}
                    </div> */}
                    <img src={result.image}></img>
                </div>
            </div>
            </>
            )
        })}
        </>
    );
}
