import react from "react";
import Calendar from "../../components/calendar";
import NavBar from "../../components/nav-bar";
import Tasks from "../../components/tasks";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          marginLeft: window.innerWidth > 1000 ? "90px" : "0px",
          marginTop: "90px",
        }}
      >
        {window.innerWidth > 900 && <Tasks />}
        <Calendar />
      </div>
    </div>
  );
};

export default MainPage;
