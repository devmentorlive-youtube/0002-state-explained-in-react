import { useState, createContext, useContext } from "react";
import Tool from "./tool";

export const ToolbarContext = createContext({});

export function ToolbarProvider({ children }) {
  const [open, setOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState("top left");

  return (
    <ToolbarContext.Provider
      value={{ open, setOpen, selectedTool, setSelectedTool }}>
      {children}
    </ToolbarContext.Provider>
  );
}

export default function Toolbar({}) {
  const { open, setOpen, selectedTool, setSelectedTool } =
    useContext(ToolbarContext);

  return (
    <div
      className="fixed left-0 top-0 bottom-0 bg-gray-900 text-gray-50 h-screen z-40"
      style={{ width: open ? 250 : 50 }}>
      <div className="w-full flex flex-row-reverse h-4">
        <div
          className="rounded-full w-4 h-4 bg-gray-800 m-4 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      {open ? (
        <div className="w-full h-screen flex flex-col items-center gap-12 p-8">
          <div className="uppercase font-black text-xl mt-24 px-8 w-full">
            Toolbar
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["top left", "top right", "bottom left", "bottom right"].map(
              (name) => (
                <Tool
                  name={name}
                  active={selectedTool === name}
                  onClick={() => setSelectedTool(name)}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className="p-2 flex flex-col gap-2 mt-8">
          {["top left", "top right", "bottom left", "bottom right"].map(
            (name) => (
              <Tool
                small
                name={name}
                active={selectedTool === name}
                onClick={() => setSelectedTool(name)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
