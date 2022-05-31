export default function Datatable({
  rows = [],
  columns = [],
  renderRow = () => {},
}) {
  return (
    <table width="100%">
      <tr>
        {columns.map((column) => (
          <th className="p-3 text-left bg-gray-400 text-black border-b border-gray-500">
            {column}
          </th>
        ))}
      </tr>

      {rows.map((row) => renderRow(row))}
    </table>
  );
}
