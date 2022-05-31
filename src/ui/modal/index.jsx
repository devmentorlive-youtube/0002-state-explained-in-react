export default function Modal({ children, close = () => {} }) {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black" />
      <div className="fixed inset-0 bg-gray-900 z-50 h-screen w-1/2 mx-auto p-32">
        <div className="flex items-center h-screen w-full ">
          <div className="w-full ">
            <div className="flex flex-row-reverse">
              <div className="text-xl cursor-pointer" onClick={close}>
                x
              </div>
            </div>
            <div className="w-full h-screen">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
