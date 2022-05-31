export default function Toolbar({}) {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[260px] bg-gray-900 text-gray-50 h-screen">
      <div className="w-full h-screen flex flex-col items-center gap-12">
        <div className="uppercase font-black text-xl mt-24 px-8 w-full">
          Toolbar
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["top left", "top right", "bottom left", "bottom right"].map(
            (name) => (
              <Tool name={name} active={name === "bottom left"} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Tool({ name, active = false, onClick = () => {} }) {
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
