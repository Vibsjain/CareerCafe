import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import HomePage from "./Pages/HomePage";
import {
  Mentorship,
  MockInterview,
  NonTechJobs,
  NonEngineeringJobs,
  TechJobs,
} from "./Pages/Courses";
import InterviewExp from "./Pages/InterviewExp";

const FinalRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/course/mentorship" exact component={Mentorship} />
        <Route path="/course/mockinterview" exact component={MockInterview} />
        <Route path="/course/nontechjobs" exact component={NonTechJobs} />
        <Route
          path="/course/nonengineeringjobs"
          exact
          component={NonEngineeringJobs}
        />
        <Route path="/course/techjobs" exact component={TechJobs} />
        <Route path="/interview/experience" exact component={InterviewExp} />
      </Switch>
    </BrowserRouter>
  );
};

export default FinalRoutes;
