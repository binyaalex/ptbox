import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../App.css';

const columns = [
  { field: 'asset', minWidth: 90, flex: 1, headerName: 'Asset', },
  { field: 'ipAddress', minWidth: 90, flex: 1, headerName: 'IP Address', width: 300 }
];

export default function DataTable({domains}) {
  console.log(domains)
  const rows = []

  domains.map((el, i) => {
    const colonI = el.indexOf(':')
    let subDomain
    let ip = ''
    if (colonI > 0) {             
      subDomain = el.substring(0,colonI)
      ip = el.substring(colonI+1)
    } else {  
      subDomain = el
    }
    rows.push({id: i, asset: subDomain, ipAddress: ip})
    return 'must be return'
  })

  return (
    <div style={{ height: 443, width: '90%', maxWidth: 850 }}>
      <DataGrid
        rows={rows}
        rowHeight={33}
        rowbottomBorder={'black'}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'black',
          '& .MuiDataGrid-cell:hover': {
            color: 'black',
          }
        }}
      />
    </div>
  );
}
