import AreaChartCurved from "./AreaChartCurved";
import AreaChartLinear from "./AreaChartLinear";

const AreaCharts = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        <AreaChartCurved />
        <AreaChartLinear />
      </div>
    </>
  );
};

export default AreaCharts;
