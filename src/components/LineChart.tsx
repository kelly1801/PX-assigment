import { Line } from "@nivo/line";
import { Opportunity, ProbabilityHistory } from "../interfaces";
import { useScreenSize } from "../hooks/useScreenSize";

export const LineChart = ({ probabilityHistory }: Opportunity) => {
  const { isLargeScreen } = useScreenSize();

  const pxProbability = probabilityHistory?.map((prob: ProbabilityHistory) => ({
    x: prob.daysAgo,
    y: prob.pilytixProb
  }));
  const repProbability = probabilityHistory?.map(
    (prob: ProbabilityHistory) => ({ x: prob.daysAgo, y: prob.repProb })
  );

  return (
    <Line
      curve="monotoneX"
      margin={{ left: 55, bottom: 40 }}
      data={[
        {
          id: "Px probability",
          data: pxProbability || []
        },
        {
          id: "Rep probability",
          data: repProbability || []
        }
      ]}
      axisLeft={{
        legendOffset: 10,
        legend: "Days Ago"
      }}
      useMesh={true}
      enableSlices={false}
      axisBottom={{
        legend: "Probability",
        legendOffset: -10
      }}
      width={isLargeScreen ? 550 : 300}
      height={200}
      colors={["#7184da", "#060047"]}
    />
  );
};
