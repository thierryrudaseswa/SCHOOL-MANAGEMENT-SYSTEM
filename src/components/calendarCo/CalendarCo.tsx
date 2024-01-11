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

// Define the type for the calendar events
type Event = {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  allDay?: boolean;
};

// Define the type for the calendar props
type Props = {
  initialEvents: Event[];
};

// Basic Header component
const Header: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div>
    <Typography variant="h3">{title}</Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </div>
);

const MyCalendar: React.FC<Props> = ({ initialEvents }) => {
  const theme = useTheme();
  const colors = {
    primary: theme.palette.primary,
    // greenAccent: theme.palette.greenAccent,
  };
  const [currentEvents, setCurrentEvents] = useState<Event[]>(initialEvents);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent: Event = {
        id: `${selected.start}-${title}`, // Use selected.start directly
        title,
        start: new Date(selected.startStr), // Convert start string to Date
        end: selected.endStr ? new Date(selected.endStr) : undefined, // Convert end string to Date if present
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

  return (
    <Box m="20px" width="1200px" height="700px" borderRadius="20px"> 
      {/* Use Header component */}
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          // backgroundColor={colors.primary[400]}
          p="5px"
          borderRadius="4px"
          component="div" // Add the 'component' prop
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  // backgroundColor: colors.greenAccent[500],
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
        <Box flex="1 1 100%" ml="15px" bgcolor="#fff">
          <FullCalendar
            height="74vh"
            // style={{width:""}}
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
    </Box>
  );
};

export default MyCalendar;