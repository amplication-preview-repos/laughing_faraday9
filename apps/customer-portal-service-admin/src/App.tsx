import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectStatusList } from "./projectStatus/ProjectStatusList";
import { ProjectStatusCreate } from "./projectStatus/ProjectStatusCreate";
import { ProjectStatusEdit } from "./projectStatus/ProjectStatusEdit";
import { ProjectStatusShow } from "./projectStatus/ProjectStatusShow";
import { EnergyDataList } from "./energyData/EnergyDataList";
import { EnergyDataCreate } from "./energyData/EnergyDataCreate";
import { EnergyDataEdit } from "./energyData/EnergyDataEdit";
import { EnergyDataShow } from "./energyData/EnergyDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Customer Portal Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProjectStatus"
          list={ProjectStatusList}
          edit={ProjectStatusEdit}
          create={ProjectStatusCreate}
          show={ProjectStatusShow}
        />
        <Resource
          name="EnergyData"
          list={EnergyDataList}
          edit={EnergyDataEdit}
          create={EnergyDataCreate}
          show={EnergyDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
