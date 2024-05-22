import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OwnershipFirmList } from "./ownershipFirm/OwnershipFirmList";
import { OwnershipFirmCreate } from "./ownershipFirm/OwnershipFirmCreate";
import { OwnershipFirmEdit } from "./ownershipFirm/OwnershipFirmEdit";
import { OwnershipFirmShow } from "./ownershipFirm/OwnershipFirmShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { FinanceList } from "./finance/FinanceList";
import { FinanceCreate } from "./finance/FinanceCreate";
import { FinanceEdit } from "./finance/FinanceEdit";
import { FinanceShow } from "./finance/FinanceShow";
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
        title={"Finance & Ownership Integration Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OwnershipFirm"
          list={OwnershipFirmList}
          edit={OwnershipFirmEdit}
          create={OwnershipFirmCreate}
          show={OwnershipFirmShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="Finance"
          list={FinanceList}
          edit={FinanceEdit}
          create={FinanceCreate}
          show={FinanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
