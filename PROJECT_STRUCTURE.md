# MindLab Project Structure

## Overview
This is a React-based frontend application for the MindLab Learning Management System, built with Material UI and React Router.

## Directory Structure

```
MindLab/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header/        # Top navigation bar
│   │   ├── Sidebar/       # Left navigation sidebar
│   │   └── EmptyState/     # Empty state illustrations
│   ├── contexts/          # React Context providers
│   │   └── AuthContext.jsx # Authentication context
│   ├── layouts/           # Layout components
│   │   └── DashboardLayout.jsx # Main dashboard layout
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── CoursesPage.jsx
│   │   ├── GroupsPage.jsx
│   │   └── UsersPage.jsx
│   ├── theme/             # Material UI theme configuration
│   │   └── theme.js
│   ├── utils/             # Utility functions and constants
│   │   └── constants.js
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # Application entry point
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Features Implemented

### 1. Dashboard Layout
- **Header**: Contains MindLab logo, Create button, notifications, and user profile
- **Sidebar**: Collapsible navigation with Home, Courses, Groups, and Users (admin only)
- **Main Content Area**: Displays page content with empty states

### 2. Routing
- `/home` - Home dashboard
- `/courses` - Courses management
- `/groups` - Groups management
- `/users` - Users management (Admin only)

### 3. Components

#### Header Component
- Logo and branding
- Create button (for creating new content)
- Notifications icon
- User profile dropdown with logout option

#### Sidebar Component
- Collapsible navigation
- Active state highlighting
- Role-based menu items (Users tab for admin only)
- Icon-based collapsed view

#### EmptyState Component
- Reusable empty state with illustration
- Customizable title and message
- Matches the design from the provided image

### 4. Theme Configuration
- Material UI theme with custom colors
- Consistent typography
- Custom component styling

### 5. Context Providers
- **AuthContext**: Ready for authentication implementation
- User role management
- Login/logout functions

## Next Steps for Development

1. **Authentication Pages**
   - Login page (F-1.2)
   - Registration via invitation (F-1.1)
   - Reset password (F-1.3)

2. **Course Management**
   - Course list with sidebar (F-3.1)
   - Course creation form (F-3.2)
   - Course editing (F-3.3)
   - Course view/details (F-3.4)
   - Course deletion (F-3.5)

3. **Group Management**
   - Group creation (F-3.10)
   - Group view (F-3.11)
   - Group editing (F-3.12)
   - Group statistics (F-3.13)

4. **API Integration**
   - Connect to backend API
   - Implement data fetching
   - Error handling

5. **Intern Dashboard** (F-4.0)
   - Assigned courses view
   - Course content viewer
   - Tests/Practical tasks
   - Ratings and feedback

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **React 18** - UI library
- **Material UI 5** - Component library
- **React Router 6** - Routing
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

