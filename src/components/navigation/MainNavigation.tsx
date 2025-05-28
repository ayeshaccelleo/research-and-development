import { ArrowBigRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const navigate = useNavigate();
  const handleGoToTemplate = () => {
    navigate("/chart-templates");
  };

  const handleGoToCommonCharts = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-2">
        <Button
          onClick={handleGoToCommonCharts}
          className="hover:cursor-pointer"
        >
          {" "}
          <ArrowBigRight /> Go to Charts
        </Button>
        <Button onClick={handleGoToTemplate} className="hover:cursor-pointer">
          {" "}
          <ArrowBigRight /> Go to templates
        </Button>
      </div>
    </>
  );
};

export default MainNavigation;
