export default function Tool({ name, active = false, onClick = () => {} }) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-blue-500 border-blue-400" : "border-gray-700"
      } border  w-24 h-24 rounded-xl flex items-center justify-center`}>
      {name.split(" ").map((w) => w[0])}
    </div>
  );
}
