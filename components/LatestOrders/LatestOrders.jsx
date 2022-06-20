import { tabelHeader, tableBody } from "../../utils/latestOrder";

export const LatestOrders = () => {
  return (
    <div className="">
      <div className="py-6">
        <h1 className="text-2xl font-medium">Latest orders</h1>
      </div>
      <table className="w-full">
        <thead className="bg-gray-600 bg-opacity-20 rounded">
          <tr>
            {tabelHeader.map(({ title }, index) => (
              <th key={index} className="p-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map(({ orderNumber, quantity, status, title }, index) => (
            <tr key={index}>
              <td className="text-center py-2 text-blue-300">#{orderNumber}</td>
              <td className="text-center ">{title}</td>
              <td className="text-center ">{quantity}</td>
              <td className="text-center ">
                <span
                  className={`${
                    status === "Delivered"
                      ? "bg-green-400"
                      : status === "Shipped"
                      ? "bg-orange-400"
                      : status === "Canceled" && "bg-gray-400"
                  } py-2 px-4 rounded-full mb-2 bg-opacity-30`}
                >
                  {" "}
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
