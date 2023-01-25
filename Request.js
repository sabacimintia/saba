
import axios from "axios";
import  { useEffect, useState } from "react";



function Request(){
const [res, setRes] = useState([])
const getRes=() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response)=> {
        console.log(response);
        const data = response.data;
        setRes(data);
    });
};
useEffect(() => getRes(), [])

    return(
        <div className='data'>
            {res.map((i) => {
                <img src={avatar.id}></img>
            })}


        </div>
        

    )

}
export default Request;