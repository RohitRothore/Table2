const primaryCSVData = (content) => {
    const rows = content.split('\n').map(row => {
        const processedRow = [];
        let currentCell = '';
        let withinQuotes = false;
        for (const char of row.trim()) {
            if (char === '"') {
                withinQuotes = !withinQuotes;
            } else if (char === ',' && withinQuotes) {
                currentCell += ',';
            } else if (char === ',' && !withinQuotes) {
                processedRow.push(currentCell.trim());
                currentCell = '';
            } else {
                currentCell += char;
            }
        }
        processedRow.push(currentCell.trim());
        return processedRow;
    }).filter(row => row !== null);

    return rows;
};


const handleDataLoaded = (data, columnsData, setItems) => {
    const headers = data[0];
    const mismatchedFields = columnsData.filter((column, index) =>
        column.field !== headers[index]
    );

    if (mismatchedFields.length > 0) {
        alert("Invalid Format");
    } else {
        const importedItems = [];
        const uniqueItems = new Map();

        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const item = headers.reduce((acc, header, index) => {
                const type = columnsData.find(column => column.field === header).type;
                const value = row[index];
                const formatDate = (dateString) => {
                    const date = new Date(dateString);
                    if (!isNaN(date.getTime())) {
                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const year = date.getFullYear().toString();
                        return `${day}-${month}-${year}`;
                    }
                    return dateString; // return original value if date is invalid
                };
                if (type === "Number") {
                    acc[header] = value?.replace(/[^0-9.]/g, "");
                } else if (type === "Date") {
                    acc[header] = formatDate(value);
                } else {
                    acc[header] = value;
                }
                return acc;
            }, {});

            const primaryKeyColumns = columnsData.filter(column => column.primary).map(column => column.field);
            const primaryKeyValues = primaryKeyColumns.map(column => item[column]).join('_');

            if (uniqueItems.has(primaryKeyValues)) {
                alert(`This item  ${primaryKeyValues} is removed to avoid duplication.`);
            } else {
                importedItems.push(item);
                uniqueItems.set(primaryKeyValues, true);
            }
        }

        setItems(importedItems);
    }
};


export const handleOnclick = (event, columnsData, setItems, file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        const content = e.target.result;
        console.log(content)
        const rows = primaryCSVData(content, columnsData);
        handleDataLoaded(rows, columnsData, setItems);
    };
    reader.readAsText(file);
};

