import "../assets/scss/dashboard.scss";

import React, { useContext, useEffect, useState } from "react";

import { Client } from "../infrastructure/client";
import DatasShowed from "../components/DatasShowed";
import { FetchContext } from "../utils/context/fetchContext";
import Header from "../components/Header";
import LineChartComponent from "../components/LineChartComponent";
import { Navigate } from "react-router-dom";
import RadarChartComponent from "../components/RadarChartComponent";
import RadialBarChartComponent from "../components/RadialBarChartComponent";
import Sidebar from "../components/Sidebar";
import SimpleBarChartComponent from "../components/SimpleBarChartComponent";
import { urlApi } from "../utils/const/urlApi";
import { urlDataMock } from "../utils/const/urlDataMock";

const DashboardPage = ({ userId }) => {
  const { fetch } = useContext(FetchContext);
  const url = fetch === "api" ? urlApi : urlDataMock;
  const client = new Client(fetch);
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState(false);
  const [performances, setPerformances] = useState(false);
  const [activity, setActivity] = useState(false);
  const [userScore, setUserScore] = useState(false);

  const presentPerformancesData = (perf) =>
    perf.data.map((data) => ({ ...data, kind: perf.kind[data.kind] }));
  useEffect(() => {
    async function getUserInfos() {
      try {
        const [userInfos, perf, averageSessions, activityInfos] =
          await Promise.all([
            client.get(url.userMainData(userId)),
            client.get(url.userPerformances(userId)),
            client.get(url.userSessions(userId)),
            client.get(url.userActivity(userId)),
          ]);
        setUser(userInfos);
        setSessions(averageSessions);
        setPerformances(presentPerformancesData(perf));
        setActivity(activityInfos.sessions);
        setUserScore([
          {
            todayScore: 100,
            name: "",
            fill: "transparent",
          },
          {
            todayScore: userInfos.todayScore * 100,
            name: "score utilisateur",
            fill: "#ff0000",
          },
        ]);
      } catch (err) {
        return <Navigate to="/*" />;
      }
    }

    if (!user) {
      getUserInfos();
    }
  });
  if (user === undefined) {
    return <Navigate to="/*" />;
  }
  if (!activity || !sessions || !performances || !user) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <Header />
      <div className="dashboard-page">
        <Sidebar />
        <div className="dashboard">
          <h1 className="title">
            Bonjour
            <span>{user?.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className="layout">
            {activity && sessions && performances && userScore && (
              <div className="grid-layout">
                <SimpleBarChartComponent
                  data={activity}
                  index="day"
                  dataKey={["kilogram", "calories"]}
                  type="barchart"
                  gridArea="barchart"
                />
                <LineChartComponent
                  data={sessions.sessions}
                  index="day"
                  dataKey="sessionLength"
                  type="linechart"
                  gridArea="linechart"
                />
                <RadarChartComponent
                  data={performances}
                  index="kind"
                  dataKey="value"
                  type="radarchart"
                  gridArea="radarchart"
                />
                <RadialBarChartComponent
                  data={userScore}
                  dataKey="todayScore"
                  type="radialchart"
                  gridArea="radialchart"
                />
              </div>
            )}
            <div className="data-showed">
              <DatasShowed
                dataToShow={user?.keyData?.calorieCount}
                nameToShow={"Calories"}
                urlPicture={"/pictures/calories-icon.svg"}
              />
              <DatasShowed
                dataToShow={user?.keyData?.proteinCount}
                nameToShow={"Proteines"}
                urlPicture={"/pictures/protein-icon.svg"}
              />
              <DatasShowed
                dataToShow={user?.keyData?.carbohydrateCount}
                nameToShow={"Glucides"}
                urlPicture={"/pictures/carbs-icon.svg"}
              />
              <DatasShowed
                dataToShow={user?.keyData?.lipidCount}
                nameToShow={"Lipides"}
                urlPicture={"/pictures/fat-icon.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
