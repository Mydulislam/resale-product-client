import { useEffect, useState } from "react"

const useAdmin = (email)=>{
    const [isAdmin, setAdmin] = useState(false);
    const [adminLoadin, setAdminLoadin] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://server-site-silk-ten.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setAdmin(data.isAdmin);
                setAdminLoadin(false)
            })
        }
    },[email]);

    return [isAdmin, adminLoadin]
}

export default useAdmin;