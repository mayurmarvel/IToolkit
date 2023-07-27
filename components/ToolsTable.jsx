"use client"

import React, { useMemo , useEffect, useState} from 'react';
import { MaterialReactTable } from 'material-react-table';
import data from '@/tools/toolslist.json';

//nested data is ok, see accessorKeys in ColumnDef below

  const costList = [
    { text: 'free', value: 'free' },
    { text: 'freemium', value: 'freemium' },
    { text: 'paid', value: 'paid' },
    { text: 'self hosted', value: 'self hosted' },

  ]


const ToolsTable = () => {

    const [tagsList, setTagsList] = useState([]);

    useEffect(() => {
      const newTagsList = [];
      data.forEach(item => {
        const tagsArray = item.tags.split(',').map(tag => tag.trim());
        tagsArray.forEach(tag => {
          if (!newTagsList.includes(tag)) {
            newTagsList.push(tag);
          }
        });
      });
      setTagsList(newTagsList);
    }, []);

    
  
  const columns = useMemo(
    () => [
      {
        accessorKey: 'siteName', 
        header: 'Site Name',
        size: 150,
        enableColumnActions: false,
        Cell: ({ renderedCellValue  }) => (
            <p className=' font-y text-[20px]' style={{ textDecoration: 'none', color: 'inherit' }} href={renderedCellValue }>{renderedCellValue }</p>
          ),
      },
      {
        accessorKey: 'link',
        header: 'Link',
        size: 150,
        Cell: ({ renderedCellValue  }) => (
          <a className=' font-y text-[20px]' target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} href={renderedCellValue }>{renderedCellValue }</a>
        ),
        enableColumnActions: false,
        enableSorting : false,
      },
      {
        accessorKey: 'description', 
        header: 'Description',
        size: 200,
        enableColumnActions: false,
        enableSorting : false,
        Cell: ({ renderedCellValue  }) => (
            <p className=' font-y text-[20px]' style={{ textDecoration: 'none', color: 'inherit' }} href={renderedCellValue }>{renderedCellValue }</p>
          ),
      },
      {
        accessorKey: 'cost',
        header: 'Cost',
        size: 150,
        enableSorting : false,
        enableHiding: true,
        enableGlobalFilter: false,
        filterVariant: 'multi-select',
        filterSelectOptions : costList,
        Cell: ({ renderedCellValue  }) => (
            <p className=' font-y text-[20px]' style={{ textDecoration: 'none', color: 'inherit' }} href={renderedCellValue }>{renderedCellValue }</p>
          ),
      },
      {
        accessorKey: 'tags',
        header: 'tags',
        size: 150,
        enableSorting : false,
        filterVariant: 'multi-select',
        filterSelectOptions : tagsList,
        Cell: ({ renderedCellValue  }) => (
            <p className=' font-y text-[20px]' style={{ textDecoration: 'none', color: 'inherit' }} href={renderedCellValue }>{renderedCellValue }</p>
          ),
      },
    ],
    [tagsList],
  );

  return <MaterialReactTable
  columns={columns}
  data={data}
  enableFullScreenToggle={false}
//   enableFacetedValues='true'

  muiTopToolbarProps={{
    sx: {
      fontSize: '14px',
      backgroundColor: 'rgba(0, 0, 0,0.4)',
      color: 'white',
    },
  }}

  muiTableHeadCellProps={{
    className: ' font-y text-[22px] '    

}}

  
/>;
};

export default ToolsTable;
