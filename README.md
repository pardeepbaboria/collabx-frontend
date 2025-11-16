# CollabX Frontend

A collaboration and task management application built with React and Vite.

### Features
- **Task Management**: Create, organize, and track tasks with priorities, statuses, and due dates
- **Pinned Tasks**: Pin important tasks for quick access
- **Team Collaboration**: Manage team members and assign tasks
- **Dark Mode**: light/dark theme switching with system preference detection
- **Responsive Design**: Responsive UI that works on desktop and mobile
- **Real-time Notifications**: In-app notifications
- **Modal System**: Clean modal interface for task creation and management
- **Collapsible Sidebar**: Adaptive navigation with mobile-friendly overlay

## Architecture
#### Context-Based State Management
The application uses React Context API for global state management:
- **ThemeContext**: Manages light/dark theme preferences
- **UserContext**: Handles user authentication and profile data
- **ModalContext**: Controls modal visibility and state
- **SidebarContext**: Manages sidebar open/close state
- **NotificationsContext**: Handles notification system
#### Custom Hooks
Encapsulated business logic through custom hooks:
- `useTheme()` - Theme switching and persistence
- `useUser()` - User data and authentication
- `useModal()` - Modal state management
- `useSidebar()` - Sidebar toggle functionality
- `useNotifications()` - Notification management
#### Component Architecture
- **Atomic Design**: Components are organized by complexity and reusability
- **Composition Pattern**: Complex UIs built from smaller, focused components
- **Props-based Configuration**: Flexible and reusable component interfaces

## Tech Stack
- ReactJS
- Vite
- Rect Router DOM
- Lucid React
- Tailwind CSS
- pnmp

## Roadmap
- Backend API integration
- Real-time collaboration features

**Note**: This is a frontend application. For full functionality, it requires a backend API (coming soon).
