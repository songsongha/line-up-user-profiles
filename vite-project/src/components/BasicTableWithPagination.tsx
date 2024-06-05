import { DataGrid, GridColDef } from '@mui/x-data-grid';

export type Row = {
  id: number,
  [col: string]: string | number
}

export default function BasicTableWithPagination({columns,rows}: {columns: GridColDef[], rows: Row[]}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}