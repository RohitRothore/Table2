import React, { useState } from "react";

const Header = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead className='FixedHeader '>
            <tr className="table-head ">
                <th>#</th>
                {headers.map(({ name, field, visible = true, sortable = true }) => (
                    visible && (<th style={{ cursor: "pointer" }}
                        key={name}
                        // onClick={() =>
                        //     sortable ? onSortingChange(field) : null
                        // }
                        onClick={() =>
                            sortable ? onSortingChange(field): null
                        }
                    >
                        {name} &nbsp;

                        {sortingField && sortingField === field && (
                            sortingOrder === "asc"
                                ? <i className="fas fa-long-arrow-alt-up"></i>
                                : <i className="fas fa-long-arrow-alt-down"></i>
                        )}
                    </th>)
                ))}
            </tr>
        </thead>
    );
};

export default Header;
