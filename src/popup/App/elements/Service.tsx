import React from "react";

interface Service {
  logo: string;
  cashback: string;
  name: string;
}

const Service: React.FC<Service> = (props) => {
  const { logo, cashback, name } = props;

  return (
    <>
      <div className="flex flex-wrap w-[25%] flex-col border-solid border-[2px] border-gray-300 rounded-lg">
        <div className="flex items-center w-full h-[100px] bg-blue-600 justify-center p-1 rounded-md">
          <div className="w-full h-full flex justify-center items-center  ">
            <img src={logo} alt="logo" className="w-[150px] h-[100px]" />
          </div>
        </div>
        <div className="flex flex-col py-5 px-4">
          <p className="text-green-600 text-[18px] font-medium leading-3">
            {cashback}
          </p>
          <p className="text-[18x]">de cashback</p>
        </div>
      </div>
    </>
  );
};
export default Service;
