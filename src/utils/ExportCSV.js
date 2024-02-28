export function exportToCSV(items, columnsData) {
    const separator = ',';
    const header = columnsData.map(column => column.name).join(separator) + '\n';
    const csv = header
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'table_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}