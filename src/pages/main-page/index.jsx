import react from "react";
import Calendar from "../../components/calendar";
import NavBar from "../../components/nav-bar";
import Tasks from "../../components/tasks";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Tasks />
        <Calendar />
      </div>
    </div>
  );
};

export default MainPage;
