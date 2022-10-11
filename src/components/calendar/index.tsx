// @ts-nocheck
import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentForm,
  AppointmentTooltip,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { classes, StyledDiv, StyledLinearProgress } from "./styles";

const Calendar = () => {
  const getCurrentDate = (): string => {
    return new Date().toLocaleDateString();
  };
  return (
    <div style={{ flex: 1 }}>
      <Paper>
        <Scheduler height={"100%"}>
          <ViewState
            currentDate={getCurrentDate()}
            // currentViewName={currentViewName}
            // onCurrentViewNameChange={setCurrentViewName}
            // onCurrentDateChange={setCurrentDate}
          />
          <DayView startDayHour={7.5} endDayHour={17.5} />
          <Appointments />
          <Toolbar
          // {...(loading ? { rootComponent: ToolbarWithLoading } : null)}
          />
          <DateNavigator />
          <TodayButton />
          <AppointmentTooltip showOpenButton showCloseButton />
          <AppointmentForm readOnly />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Calendar;
