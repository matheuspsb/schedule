import React, { useEffect, useMemo, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { getSchedule } from "../service/schedule-service";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push": {
      return [...state, payload];
    }
    case "update": {
      return state.map((evt) => {
        if (evt.id === payload.id) {
          return payload;
        }
        return evt;
      });
    }
    case "delete": {
      return state.filter((evt) => evt.id !== payload.id);
    }
    case "set": {
      return payload;
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);

  const [savedEvents, dispatchEvent] = useReducer(
    savedEventsReducer,
    [],
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  // GET
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await getSchedule();
        dispatchEvent({ type: "set", payload: response.data.message });
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, [showEventModal]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
