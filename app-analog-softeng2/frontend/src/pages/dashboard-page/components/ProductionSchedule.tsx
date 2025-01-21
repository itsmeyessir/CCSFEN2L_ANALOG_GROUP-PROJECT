import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/ProductionSchedule.css";

interface Reminder {
  date: string; // Date in YYYY-MM-DD format
  title: string;
}

const ProductionSchedule: React.FC = () => {
  const [value, setValue] = useState(new Date()); // Current selected date
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showReminderInput, setShowReminderInput] = useState(false);
  const [reminderTitle, setReminderTitle] = useState("");

  const addReminder = () => {
    const formattedDate = value.toISOString().split("T")[0];
    if (reminderTitle.trim() === "") {
      alert("Reminder title cannot be empty.");
      return;
    }

    setReminders([...reminders, { date: formattedDate, title: reminderTitle }]);
    setReminderTitle("");
    setShowReminderInput(false);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const reminderForDate = reminders.find(
        (reminder) => reminder.date === formattedDate
      );
      if (reminderForDate) {
        return (
          <span
            style={{ color: "red", fontWeight: "bold", fontSize: "0.9rem" }}
          >
            ●
          </span>
        );
      }
    }
    return null;
  };

  const handleDayHover = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const reminderForDate = reminders.find(
      (reminder) => reminder.date === formattedDate
    );
    return reminderForDate ? reminderForDate.title : null;
  };

  return (
    <div className="calendar-dashboard">
      <h2>Production Schedule</h2>
      <Calendar
        className={"calendar"}
        onChange={(date) => setValue(date as Date)}
        value={value}
        tileContent={tileContent}
        tileClassName={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          const hasReminder = reminders.some(
            (reminder) => reminder.date === formattedDate
          );
          return hasReminder ? "reminder-day" : null;
        }}
      />
      <div className="add-reminder">
        <button onClick={() => setShowReminderInput(!showReminderInput)}>
          {showReminderInput ? "Cancel" : "Add Reminder"}
        </button>
      </div>
      {showReminderInput && (
        <div className="reminder-input">
          <input
            type="text"
            placeholder="Reminder Title"
            value={reminderTitle}
            onChange={(e) => setReminderTitle(e.target.value)}
          />
          <button onClick={addReminder}>Save</button>
        </div>
      )}
      <div className="selected-date-info">
        <strong>Selected Date:</strong> {value.toDateString()}
        <br />
        <strong>Reminder:</strong> {handleDayHover(value) || "No reminder"}
      </div>
    </div>
  );
};

export default ProductionSchedule;
