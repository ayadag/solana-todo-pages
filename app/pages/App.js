import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MeetProvider } from "../jitsi/MeetContext";
import MeetPage from "../jitsi/MeetPage";
import StartupPage from "../jitsi/StartupPage";
import ThankYou from "../jitsi/ThankYouPage";

import "../jitsi/custom.css";

const App = () => {
  return (
    <MeetProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={StartupPage} exact />
          <Route path="/meet/:id" component={MeetPage} exact />
          <Route path="/thank-you" component={ThankYou} />
        </Switch>
      </BrowserRouter>
    </MeetProvider>
  );
};

export default App;
