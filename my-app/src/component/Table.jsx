import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const Table = ({ data, handleEdit, handleDelete }) => {
  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex gap-2 justify-center space-x-[8px]">
            <button
              onClick={() => handleEdit(row.index)}
              className="bg-[#262626] cursor-pointer text-[12px] text-[#FCFCD8] rounded-[4px] py-[0.3rem] px-[1rem]"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(row.index)}
              className="bg-[#262626] cursor-pointer text-[12px] text-[#FCFCD8] rounded-[4px] py-[0.3rem] px-[1rem]"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [handleEdit, handleDelete]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 2 },
    },
    usePagination
  );

  return (
    <div className="!mt-16">
      <table {...getTableProps()} className="w-full border border-gray-300">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="p-2 border">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-center">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 border">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="text-center mt-[1rem]">
        <span>
          Page <strong>{pageIndex + 1}</strong> of {pageOptions.length}
        </span>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-[16px]">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-[#262626] cursor-pointer mt-[2rem] w-[100px] text-[14px] text-[#FCFCD8] rounded-[8px] py-[0.5rem] px-[1rem]"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-[#262626] cursor-pointer mt-[2rem] w-[100px] text-[14px] text-[#FCFCD8] rounded-[8px] py-[0.5rem] px-[2rem]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
