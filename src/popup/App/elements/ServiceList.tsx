const ServiceList = () => {
  return (
    <>
      <div className="flex w-full justify-between cursor-pointer items-center py-5">
        <div className="flex items-center gap-2">
          <div className="flex w-full h-full bg-blue-600 justify-center p-2 items-center rounded-md">
            <img src="/assets/servicelogo.png" alt="logo" className="" />
          </div>
          <p className="text-[#464646] text-[16px] font-bold">Magalu</p>
        </div>
        <p className="text-green-600 text-[18px] font-medium leading-3">
          8% de cashback
        </p>
      </div>
    </>
  );
};

export default ServiceList;
