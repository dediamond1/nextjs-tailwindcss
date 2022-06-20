import { AiFillPieChart, AiOutlineArrowUp } from "react-icons/ai";
export const Cards = ({ items }) => {
  const { title, description, smallIcon, bigIcon, amount } = items || {};
  return (
    <div className="flex p-5 bg-gray-100 rounded items-center justify-around">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-xl">{title}</h1>
        <h3 className="text-xl md:text-2xl">{amount}</h3>
        <div className="flex items-center space-x-2 text-green-600 ">
          <span></span>
          {smallIcon}
          <p>{description}</p>
        </div>
      </div>
      <div>
        {" "}
        <span className="text-9xl">{bigIcon}</span>
      </div>
    </div>
  );
};
