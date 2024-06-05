import * as React from 'react';
import { useQuery } from "react-query"
import { getUserList } from "../utils/api"
import BasicTableWithPagination, { Row } from "../components/BasicTableWithPagination"
import { GridColDef } from '@mui/x-data-grid';

export function UserList() {
    const {
        data: users, 
        error, 
        isLoading 
    } = useQuery('getUserList', getUserList )

    console.log({users})

    const formattedTableData: Row[] = React.useMemo(()=>{
        if (!users?.data) return []
        return users.data
    },[users])  

    const columns: GridColDef[] = [
        { field: 'first_name', headerName: 'First name', width: 130 },
        { field: 'last_name', headerName: 'Last name', width: 130 },
        {
          field: 'avatar',
          headerName: 'Avatar',
          sortable: false,
          width: 90,
        },
        {
          field: 'email',
          headerName: 'Email',
          description: 'This column has a value getter and is not sortable.',
          width: 160
        }
    ]

    if (isLoading) return <div> Fetching Users </div>
    if (error) {
    console.log({error})
    return <div> An error occured </div>
    }
    return (
    <>
        <h1>
        Line-up User Profiles
        </h1>
    <BasicTableWithPagination columns={columns} rows={formattedTableData} />
    </>

    )
}

export default UserList
