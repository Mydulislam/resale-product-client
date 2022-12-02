import { useEffect, useState } from "react"

const useSeller = (email)=>{
    const [isSeller, setSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://server-site-silk-ten.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setSeller(data.isSeller);
                setSellerLoading(false)
            })
        }
    },[email]);

    return [isSeller, sellerLoading]
}

export default useSeller;