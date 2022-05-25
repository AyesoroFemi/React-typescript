import React from "react";
import Reminder from "../models/reminders";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items , onRemoveReminder}: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => onRemoveReminder(item.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
