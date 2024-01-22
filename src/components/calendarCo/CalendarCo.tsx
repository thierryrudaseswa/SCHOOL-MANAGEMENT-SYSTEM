import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";

type Event = {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  allDay?: boolean;
};

type Props = {
  initialEvents: Event[];
};

const Header: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div>
    <Typography variant="h3">{title}</Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </div>
);// ... (imports)

const MyCalendar: React.FC<Props> = ({ initialEvents }) => {
//   const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
//   const colors = {
//     primary: theme.palette.primary,
//   };
  const [currentEvents, setCurrentEvents] = useState<Event[]>(initialEvents);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent: Event = {
        id: `${selected.start}-${title}`,
        title,
        start: new Date(selected.startStr),
        end: selected.endStr ? new Date(selected.endStr) : undefined,
        allDay: selected.allDay,
      };

      calendarApi.addEvent(newEvent);
      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)
    ) {
      selected.event.remove();
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== selected.event.id)
      );
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Box
      m="20px"
      width="1200px"
      height="800px"
      borderRadius="40px"
      bgcolor={isDarkMode ? "#000" : "#1A56DB"}
    >
      <Header title="Calendar" subtitle="Schedule your events comfortable" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          p="5px"
          borderRadius="4px"
          component="div"
          bgcolor={isDarkMode ? "#000" : "#1A56DB"}
        >
          <Typography variant="h5" color={isDarkMode ? "white" : "bl"}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px" bgcolor={isDarkMode ? "#000" : "#1A56DB"}>
          <FullCalendar
            height="74vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}
          />
        </Box>
      </Box>

      {/* Button to toggle dark mode */}
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </Box>
  );
};

export default MyCalendar;
