export default function Datatble({
  rows = [],
  columns = Object.keys(rows[0]),
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
