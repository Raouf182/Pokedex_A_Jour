import React from 'react';
import { useParams } from 'react-router-dom';
import Generations from '../Services/Generations';
import { useState, useEffect } from 'react';


const PokemonByGen = () => { 
    
    
    const [gen, setGen] = useState ([]);

const fetchGenByName = async () => {
    try{ 
        const response = await Generations.getGen()
        // setGen(response.data.results)
         console.log(response)
    }catch (e){
        console.log(e)
    }

}
useEffect (() => {
    fetchGenByName()
},[])
    
    return ( 
        <div>{gen}</div>
     );
}
 
export default PokemonByGen;