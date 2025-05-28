import GridLayout from "react-grid-layout";
import AreaChartLinear from "../common-charts/area-charts/AreaChartLinear";
import { useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ChartTemplates = () => {
  const [layout, setLayout] = useState(() => {
    const savedLayout = localStorage.getItem("dashboardLayout");
    return savedLayout
      ? JSON.parse(savedLayout)
      : [
          {
            i: "a",
            x: 0,
            y: 0,
            w: 4,
            h: 6,
            minW: 2,
            maxW: 6,
            minH: 3,
            maxH: 8,
          },
          {
            i: "b",
            x: 1,
            y: 0,
            w: 5,
            h: 6.3,
            minW: 2,
            maxW: 6,
            minH: 3,
            maxH: 8,
          },
          {
            i: "c",
            x: 1,
            y: 0,
            w: 3,
            h: 6,
            minW: 2,
            maxW: 6,
            minH: 3,
            maxH: 8,
          },
          {
            i: "d",
            x: 0,
            y: 0,
            w: 6,
            h: 7,
            minW: 2,
            maxW: 6,
            minH: 3,
            maxH: 8,
          },
          {
            i: "e",
            x: 1,
            y: 0,
            w: 3,
            h: 5,
            minW: 2,
            maxW: 6,
            minH: 3,
            maxH: 8,
          },
        ];
  });
  const [isResizable, setIsResizable] = useState<boolean>(false);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);

  /**
   * handleLayoutChange trigger when user changes the layout
   */
  const handleLayoutChange = (newLayout: any) => {
    setLayout(newLayout);
    localStorage.setItem("dashboardLayout", JSON.stringify(newLayout));
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <div>
            <Switch id="resize" checked={isResizable} onCheckedChange={setIsResizable} />
            <Label htmlFor="resize">Resize</Label>
        </div>
        <div>
            <Switch id="drag" checked={isDraggable} onCheckedChange={setIsDraggable} />
            <Label htmlFor="drag">Customize Positions</Label>
        </div>
      </div>
      <div style={{ padding: 0, margin: 0, position: "relative" }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={60}
          width={1280}
          useCSSTransforms={true}
          onLayoutChange={handleLayoutChange}
          isResizable={isResizable}
          isDraggable={isDraggable}
        >
          <div
            key="a"
            className="p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <AreaChartLinear />
          </div>
          <div
            key="b"
            className="p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <AreaChartLinear />
          </div>
          <div
            key="c"
            className="p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <AreaChartLinear />
          </div>
          <div
            key="d"
            className="p-3"
            style={{ width: "100%", height: "100%" }}
          >
            <AreaChartLinear />
          </div>
          <div key="e" className="p-3">
            <AreaChartLinear />
          </div>
        </GridLayout>
      </div>
    </>
  );
};

export default ChartTemplates;
