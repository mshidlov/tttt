import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BlaBlaList } from "./blaBla/BlaBlaList";
import { BlaBlaCreate } from "./blaBla/BlaBlaCreate";
import { BlaBlaEdit } from "./blaBla/BlaBlaEdit";
import { BlaBlaShow } from "./blaBla/BlaBlaShow";
import { TataList } from "./tata/TataList";
import { TataCreate } from "./tata/TataCreate";
import { TataEdit } from "./tata/TataEdit";
import { TataShow } from "./tata/TataShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

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
        title={"My app-1"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BlaBla"
          list={BlaBlaList}
          edit={BlaBlaEdit}
          create={BlaBlaCreate}
          show={BlaBlaShow}
        />
        <Resource
          name="Tata"
          list={TataList}
          edit={TataEdit}
          create={TataCreate}
          show={TataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
