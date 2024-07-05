const Service = () => {
  return (
    <>
      <div className="flex w-[25%] flex-col border-solid border-[2px] border-gray-300 rounded-lg">
        <div className="flex w-full bg-blue-600 justify-center py-10 rounded-md">
          <img src="/assets/servicelogo.png" alt="logo" className="" />
        </div>
        <div className="flex flex-col py-5 px-4">
          <p className="text-green-600 text-[18px] font-medium leading-3">
            16%
          </p>
          <p className="text-[18x]">de cashback</p>
        </div>
      </div>
    </>
  );
};
export default Service;
