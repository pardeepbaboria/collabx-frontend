import { createContext, useState } from 'react';

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New task assigned',
      message: 'You have been assigned to "Update Dashboard UI"',
      time: '5 min ago',
      read: false
    },
    {
      id: 2,
      title: 'Meeting reminder',
      message: 'Team standup in 30 minutes',
      time: '25 min ago',
      read: false
    },
    {
      id: 3,
      title: 'Task completed',
      message: 'Sarah completed "API Integration"',
      time: '1 hour ago',
      read: true
    }
  ]);

  const addNotification = (notification) => {
    setNotifications(prev => [
      { id: Date.now(), ...notification, read: false },
      ...prev
    ]);
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationsContext.Provider value={{
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      deleteNotification
    }}>
      {children}
    </NotificationsContext.Provider>
  );
};