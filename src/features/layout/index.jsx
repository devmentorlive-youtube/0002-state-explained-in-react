import Account from "./account";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-row-reverse w-full fixed top-2 right-2 z-40">
        <Account />
        <div className="uppercase text-3xl font-black mx-8 my-2">
          bottom left
        </div>
      </div>
      {children}
    </div>
  );
}
