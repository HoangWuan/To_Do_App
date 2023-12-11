import { Task } from "../data/Task";

export const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    // Adjust the format as needed, for example: 'MM/DD/YYYY hh:mm A'
    const formattedDate: string = date.toLocaleString();
    return formattedDate;
  };

  export const formatDateAgo = (timestamp: number): string => {
    const now = Date.now();
    const diff = Math.abs(now - timestamp);
  
    if (diff < 1000 * 60) { // Less than a minute
      return "Just now";
    } else if (diff < 1000 * 60 * 60) { // Less than an hour
      const minutes = Math.floor(diff / (1000 * 60));
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diff < 1000 * 60 * 60 * 24) { // Less than a day
      const hours = Math.floor(diff / (1000 * 60 * 60));
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else { // More than a day
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

export const sortByDate = (tasks: Task[]) => {
  tasks.sort((a, b) => b.timeCreate - a.timeCreate);
}