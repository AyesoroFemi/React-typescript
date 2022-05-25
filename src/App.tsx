import React, { useEffect, useState } from "react";
import "./App.css";
import Reminder from "./models/reminders";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminders";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };


  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title)
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div>
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
