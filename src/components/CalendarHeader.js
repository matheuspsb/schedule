import React from "react";

export default function CalendarHeader() {
  return (
    <header className="px-4 py-2 mr-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendário</h1>
      <button className="border rounded p-2 px-4 mr-5">Today</button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
    </header>
  );
}
