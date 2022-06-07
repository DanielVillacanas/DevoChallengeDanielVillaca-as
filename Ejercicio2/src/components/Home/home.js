import { useEffect } from "react";
import { retrieveGraphData1, retrieveGraphData2 } from "../../common/graphData";
import { generateCircularGraph, generateLineGraph } from "../../common/graphGenerator";
import retrieveData from "../../services/retrieveData";

export default function Home() {
  /**
   * Main function to create the requested graphs
   */
  const loadData = async () => {
    let data = {};
    data = await retrieveData(1, data);
    data = await retrieveData(2, data);
    data = await retrieveData(3, data);

    const graph1 = retrieveGraphData1(data);

    const graph2 = retrieveGraphData2(data);

    generateLineGraph(graph1);
    generateCircularGraph(graph2);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div style={{ margin: "auto", width: "90%", marginTop: "5%" }}>
          <div id="grafica1"></div>
        </div>
        <div style={{ margin: "auto", width: "90%", marginTop: "5%" }}>
          <div id="grafica2"></div>
        </div>
      </div>
    </>
  );
}
