import { Bar } from "@nivo/bar";
import { PilytixFactorsCreasingWin } from "../interfaces";
import { useScreenSize } from "../hooks/useScreenSize";
type BarChartsProps = {
  factors: PilytixFactorsCreasingWin[];
};
export const BarChart = ({ factors }: BarChartsProps) => {
  const { isLargeScreen } = useScreenSize();
  const data =
    factors?.map((factor: PilytixFactorsCreasingWin) => {
      const id: string = factor.name.split(" ")[0];

      return {
        id,
        value: factor.weight.value,
        name: factor.name,
        message: factor.message,
        descWeight: factor.weight.description
      };
    }) || [];

  return (
    <Bar
      data={data}
      keys={["value"]}
      indexBy="id"
      padding={0.2}
      labelTextColor="inherit:darker(1.4)"
      labelSkipWidth={16}
      labelSkipHeight={16}
      label={(d) => `${d.data.id}`}
      tooltipLabel={(d) => `${d.data.message}`}
      margin={{ left: 50, bottom: 50, top: 20 }}
      width={isLargeScreen ? 600 : 300}
      height={200}
      animate={true}
      colors={["#7184da"]}
    />
  );
};
