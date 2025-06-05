import AreaChartCurved from "./AreaChartCurved";
import AreaChartLinear from "./AreaChartLinear";

const AreaCharts = () => {
  return (
    <>
    <div className="flex flex-row justify-start ">
      <h2 className="font-bold mb-4">Area Charts - Charts we ca Implement in CANVAS </h2>
    </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        <AreaChartCurved />
        <AreaChartLinear />
      </div>
    </>
  );
};

export default AreaCharts;
