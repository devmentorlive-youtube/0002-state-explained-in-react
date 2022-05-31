export default function TextField({ value, placeholder, onChange = () => {} }) {
  return (
    <div className="w-full">
      <input
        className=" p-2 font-thin text-black w-full rounded bg-gray-600"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
