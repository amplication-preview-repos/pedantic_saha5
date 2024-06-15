import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebPageList } from "./webPage/WebPageList";
import { WebPageCreate } from "./webPage/WebPageCreate";
import { WebPageEdit } from "./webPage/WebPageEdit";
import { WebPageShow } from "./webPage/WebPageShow";
import { PageContentList } from "./pageContent/PageContentList";
import { PageContentCreate } from "./pageContent/PageContentCreate";
import { PageContentEdit } from "./pageContent/PageContentEdit";
import { PageContentShow } from "./pageContent/PageContentShow";
import { CrawlConfigList } from "./crawlConfig/CrawlConfigList";
import { CrawlConfigCreate } from "./crawlConfig/CrawlConfigCreate";
import { CrawlConfigEdit } from "./crawlConfig/CrawlConfigEdit";
import { CrawlConfigShow } from "./crawlConfig/CrawlConfigShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
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
        title={"WebCrawlerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WebPage"
          list={WebPageList}
          edit={WebPageEdit}
          create={WebPageCreate}
          show={WebPageShow}
        />
        <Resource
          name="PageContent"
          list={PageContentList}
          edit={PageContentEdit}
          create={PageContentCreate}
          show={PageContentShow}
        />
        <Resource
          name="CrawlConfig"
          list={CrawlConfigList}
          edit={CrawlConfigEdit}
          create={CrawlConfigCreate}
          show={CrawlConfigShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
      </Admin>
    </div>
  );
};

export default App;
