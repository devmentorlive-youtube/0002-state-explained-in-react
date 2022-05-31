export default function Tool({
  name,
  small = false,
  active = false,
  onClick = () => {},
}) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-blue-500 border-blue-400" : "border-gray-700"
      } border   rounded-xl flex items-center justify-center ${
        small ? "w-8 h-8" : "w-24 h-24"
      }`}>
      {name.split(" ").map((w) => w[0])}
    </div>
  );
}
