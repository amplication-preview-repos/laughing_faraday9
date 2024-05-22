import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FleetList } from "./fleet/FleetList";
import { FleetCreate } from "./fleet/FleetCreate";
import { FleetEdit } from "./fleet/FleetEdit";
import { FleetShow } from "./fleet/FleetShow";
import { SystemList } from "./system/SystemList";
import { SystemCreate } from "./system/SystemCreate";
import { SystemEdit } from "./system/SystemEdit";
import { SystemShow } from "./system/SystemShow";
import { SystemStatusList } from "./systemStatus/SystemStatusList";
import { SystemStatusCreate } from "./systemStatus/SystemStatusCreate";
import { SystemStatusEdit } from "./systemStatus/SystemStatusEdit";
import { SystemStatusShow } from "./systemStatus/SystemStatusShow";
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
        title={"Fleet Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Fleet"
          list={FleetList}
          edit={FleetEdit}
          create={FleetCreate}
          show={FleetShow}
        />
        <Resource
          name="System"
          list={SystemList}
          edit={SystemEdit}
          create={SystemCreate}
          show={SystemShow}
        />
        <Resource
          name="SystemStatus"
          list={SystemStatusList}
          edit={SystemStatusEdit}
          create={SystemStatusCreate}
          show={SystemStatusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
