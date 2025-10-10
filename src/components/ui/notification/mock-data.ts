import { Notification } from "./notification-popup";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "Jan Mayer",
    message: "Jan Mayer invited you to interview with Nomad",
    status: {
      label: "New",
      color: "yellow",
    },
    timestamp: "12 mins ago",
  },
  {
    id: "2",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    name: "Jana Alicia",
    message: "Jana Alicia from Udacity updated your job applications status",
    status: {
      label: "Shortlisted",
      color: "green",
    },
    timestamp: "3 days ago",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Ally Wales",
    message: "Ally Wales from Digital Ocean sent you an interview invitation",
    timestamp: "14 July 2021 • 3:26 PM",
    interviewDetails: {
      title: "Interview - Jake Gyll",
      role: "Social Media Manager Role",
      date: "Mon, 20 July 2021",
      time: "12 PM - 12:30 PM",
      contactPerson: {
        name: "Jake Gyll",
        email: "jakegyll@email.com",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
      timestamp: "14 July 2021 • 3:26 PM",
    },
  },
];
