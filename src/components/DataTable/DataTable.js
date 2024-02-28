import React, { useState, useMemo } from "react";
import Header from './Header'
import Search from './Search'
import Pagination from './Pagination'

const DataTable = (props) => {
  const { columns, rows } = props
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  
  // Setting Page Size
  const [pageSize, setPageSize] = useState(10); 
  const ITEMS_PER_PAGE = pageSize;

  const commentsData = useMemo(() => {
    let computedComments = rows;
    if (search) {
      try {
        computedComments = computedComments.filter((item) => {
          let keys = Object.keys(item);
          for (let key of keys) {
            if (
              // type removed
              // typeof item[key] === 'string' &&
              item[key].toString().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
              return true;
            }
          }
          return false;
        });
      } catch (error) {
        console.log(error)
      }
    }

    setTotalItems(computedComments.length);

    //Sorting data
    if (sorting.field) {
      try {
        const reversed = sorting.order === "asc" ? 1 : -1;
        computedComments = computedComments.sort((a, b) => {
          if (typeof a[sorting.field] === 'string') {
            return reversed * a[sorting.field].localeCompare(b[sorting.field]);
          }
          // number sorting enabled
          if (typeof a[sorting.field] === 'number') {
            return reversed * (a[sorting.field] - b[sorting.field]);
          }
          return 0;
        });
      } catch (error) {
        console.log(error);
      }
    }
    
    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [rows, currentPage, search, sorting, ITEMS_PER_PAGE]); // Call on ITEMS_PER_PAGE changes

  const tdData = () => {
    return commentsData.map((item, index) =>
      <tr key={index}>
        <td>{rows.indexOf(item) + 1}</td>
          {columns.map((col, idx) =>
            (col.visible === true || col.visible === undefined) && <td key={idx}>{item[col.field]}</td>
          )
        }
      </tr>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex flex-row-reverse mb-1">
          <Search
            onSearch={value => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-12" style={{minHeight:450, maxWidth:1200}}>
          <div className="table-responsive" style={{ minHeight: "250px", maxHeight: "450px", overflowY: "auto", whiteSpace: "nowrap" }}>
            <table className="table table-striped" >
              <Header
                headers={columns}
                onSorting={(field, order) =>
                  setSorting({ field, order })
                }
              />
              <tbody>
                {
                  (Object.keys(commentsData).length) > 0 ? tdData() : <tr><th colSpan={Object.keys(columns).length + 1}><h6 className="text-center pt-5 pb-5">There is no data...</h6></th></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex flex-row-reverse">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalItems} // totalItems Instead of rows.length
            pageSize={ITEMS_PER_PAGE}
            onPageChange={page => setCurrentPage(page)}
            
            // Page Size Handler
            onPageSizeChange={size => {
              setPageSize(size);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
