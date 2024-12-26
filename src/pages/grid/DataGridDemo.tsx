import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, gridPageCountSelector, GridPagination, GridColDef, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { TablePaginationProps } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'unit',
        headerName: 'Unit',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, unit: 'A' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, unit: 'B' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, unit: 'B' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, unit: 'A' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, unit: 'C' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, unit: 'D' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, unit: 'E' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, unit: 'F' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, unit: 'G' },
];

function Pagination({
    page,
    onPageChange,
    className,
  }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <MuiPagination
        color="primary"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event as any, newPage - 1);
        }}
      />
    );
  }
  
  function CustomPagination(props: any) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
  }
    
export default function DataGridDemo() {
    // one column is select
    const [selectionModel, setSelectionModel] = React.useState([]);
    const handleSelectionChange = (newSelection) => {
        if (newSelection.length > 1) {
            const latestSelection = newSelection[newSelection.length - 1];
            setSelectionModel(latestSelection);
        } else {
            setSelectionModel(newSelection);
        }
        
        console.log('Selected rows:', newSelection);
    };
    
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={handleSelectionChange}
                rowSelectionModel={selectionModel}
                pagination
                slots={{
                    pagination: CustomPagination,
                  }}
            />
        </Box>
    );
}
