import { useEffect, useState } from "react"

const useBuyer = (email)=>{
    const [isBuyer, setBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/buyers/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setBuyer(data.isBuyer);
                setBuyerLoading(false)
            })
        }
    },[email]);

    return [isBuyer, buyerLoading]
}

export default useBuyer;