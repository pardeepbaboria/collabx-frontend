import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import { ModalProvider } from './ModalContext';
import { SidebarProvider } from './SidebarContext';
import { NotificationsProvider } from './NotificationsContext';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <SidebarProvider>
          <ModalProvider>
            <NotificationsProvider>
              {children}
            </NotificationsProvider>
          </ModalProvider>
        </SidebarProvider>
      </UserProvider>
    </ThemeProvider>
  );
};