import React from "react";

interface ServiceListProps {
  logo: string;
  cashback: string;
  name: string;
}
const ServiceList: React.FC<ServiceListProps> = (props) => {
  const { logo, cashback, name } = props;
  return (
    <>
      <div className="flex w-full justify-between cursor-pointer items-center py-5">
        <div className="flex items-center gap-2 w-full">
          <div className="flex w-fit h-full bg-sky-600 justify-center p-2 items-center rounded-md">
            <img src={logo} alt="logo" className="w-[150px]" />
          </div>
          <p className="text-[#464646] text-[16px] font-bold w-full">{name}</p>
        </div>
        <p className="text-green-600 text-[18px] text-nowrap font-medium leading-3 w-fit">
          {cashback}
        </p>
      </div>
    </>
  );
};

export default ServiceList;
