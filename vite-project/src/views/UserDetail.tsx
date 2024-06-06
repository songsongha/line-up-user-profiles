
import { useQuery } from "react-query"
import { getUserDetail } from '../utils/api';

export function UserDetail() {
    // TO DO: Get userId from url routing

    const {
        data: userDetail, 
        error, 
        isLoading 
    } = useQuery('getUserDetail', ()=> getUserDetail('1') )

    console.log({userDetail})

    if (isLoading) return <div> Fetching userDetail </div>
    if (error) {
    console.log({error})
    return <div> An error occurred </div>
    }
    return (
    <>
        <h1>
        User Details
        </h1>
    </>

    )
}

export default UserDetail
