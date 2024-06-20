import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import {
  createSchedule,
  deleteSchedule,
  updateSchedule,
} from "../service/schedule-service";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedColor, setSelectedColor] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const calendarEvent = {
      title,
      description,
      label: selectedColor,
      day: daySelected.valueOf(),
    };

    if (selectedEvent) {
      try {
        updateSchedule(selectedEvent["id"], calendarEvent);
        setShowEventModal(false);
      } catch (error) {
        console.error("ErrorContext):", error);
      }
    } else {
      try {
        createSchedule(JSON.stringify(calendarEvent));
      } catch (error) {
        console.error("Error saving events:", error);
      }
    }
    setShowEventModal(false);
  }

  async function handleDelete() {
    try {
      deleteSchedule(selectedEvent["id"]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <button
                onClick={() => {
                  handleDelete();
                  setShowEventModal(false);
                }}
              >
                <span className="material-icons-outlined text-gray-400 cursor-pointer">
                  delete
                </span>
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Descrição"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedColor(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedColor === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Salvar
          </button>
        </footer>
      </form>
    </div>
  );
}
