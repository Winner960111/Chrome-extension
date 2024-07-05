import { AiOutlineExclamationCircle } from "react-icons/ai";

const Extract = () => {
  return (
    <>
      <div className="w-full flex mt-6 border-solid border-l-[4px] border-green-600 items-center justify-between">
        <div className="flex ml-5 flex-col">
          <p className="text-[20px] font-bold">R$ 43,18</p>
          <p className="text-[16px] font-bold">Magazine Luiza</p>
          <p className="text-[20px]">25/05/24</p>
        </div>
        <AiOutlineExclamationCircle style={{ fontSize: "20px" }} />
      </div>
    </>
  );
};
export default Extract;
