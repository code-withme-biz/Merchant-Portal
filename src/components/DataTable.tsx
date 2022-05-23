import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useTable, useSortBy, Column, PluginHook, Row } from 'react-table';

export interface DataTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  plugins?: PluginHook<T>[];
  onRowClick?: (row: Row<T>) => void;
}

export const DataTable = <T extends object>({
  columns,
  data,
  plugins = [],
  onRowClick
}: DataTableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy,
    ...plugins
  );

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key -- It's obtained from header group props
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key -- It's obtained from header props
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>

      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            // TODO: Add onHover Effect.
            // eslint-disable-next-line react/jsx-key -- It's obtained from row props
            <Tr {...row.getRowProps()} onClick={() => onRowClick && onRowClick(row)}>
              {row.cells.map((cell) => (
                // eslint-disable-next-line react/jsx-key -- It's obtained from cell props
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
