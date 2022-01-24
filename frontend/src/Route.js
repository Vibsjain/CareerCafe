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
import InternshipInterviewExp from "./Pages/InterviewExperience/InternshipInterviewExp";
import PlacementInterviewExp from "./Pages/InterviewExperience/PlacementInterviewExp";
import InterviewExp from "./Pages/InterviewExperience/InterviewExp";
import OncampusInterviewExp from "./Pages/InterviewExperience/OncampusInterviewExp";
import OffcampusInterviewExp from "./Pages/InterviewExperience/OffcampusInterviewExp";

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
        <Route
          path="/interview/experience/category/placement"
          exact
          component={PlacementInterviewExp}
        />
        <Route
          path="/interview/experience/category/internship"
          exact
          component={InternshipInterviewExp}
        />
        <Route
          path="/interview/experience/category/oncampus"
          exact
          component={OncampusInterviewExp}
        />
        <Route
          path="/interview/experience/category/offcampus"
          exact
          component={OffcampusInterviewExp}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default FinalRoutes;
