import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3306",
});

async function createSchedule(payload) {
  try {
    const response = await api.post("/datas", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating schedule:", error);
    throw error;
  }
}

async function getSchedule() {
  try {
    const response = await api.get("/datas", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error creating schedule:", error);
    throw error;
  }
}

async function deleteSchedule(id) {
  try {
    const response = await api.delete(`/datas/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting schedule:", error);
  }
}

async function updateSchedule(id, payload) {
  try {
    const response = await api.patch(`/datas/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting schedule:", error);
  }
}

export { createSchedule, getSchedule, deleteSchedule, updateSchedule };
