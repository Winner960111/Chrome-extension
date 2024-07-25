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
      <div className="flex flex-wrap  flex-col border-solid border-[2px] border-gray-300 rounded-lg">
        <div className="flex items-center w-full h-[100px] bg-blue-600 justify-center p-4 rounded-md">
          <div className="w-full bg-cover h-full py-2 flex justify-center items-center  ">
            <img src={logo} alt="logo" className=" h-full " />
          </div>
        </div>
        <div className="flex flex-col py-5 px-4">
          <p className="text-green-600 text-[18px] font-medium leading-8">
            {cashback}
          </p>
        </div>
      </div>
    </>
  );
};
export default Service;
