import { Cards } from "../components/cards/Card";
import { LatestOrders } from "../components/LatestOrders/LatestOrders";
import { weeklyData } from "../utils/weeklyData";

export default function HomePage() {
  return (
    <div className="p-5 max-w-7xl mx-auto ">
      <div>
        <div className="py-5">
          <h1 className="text-3xl">Weekly Overview</h1>
        </div>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 ">
          {weeklyData.map((data, index) => (
            <Cards key={index} items={data} />
          ))}
        </div>
      </div>
      <LatestOrders />
    </div>
  );
}
