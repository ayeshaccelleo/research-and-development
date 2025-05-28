import BarChartBasic from "./BarChartBasic"

const BarCharts = () => {
  return (
    <>
    <div className="flex flex-row justify-start  ">
      <h2 className="font-bold mb-4 mt-4">Bar Charts</h2>
    </div>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
      <BarChartBasic />
      </div>
    </>
  )
}

export default BarCharts