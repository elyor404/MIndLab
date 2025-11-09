// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  INTERN: 'intern',
}

// Course Status
export const COURSE_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
}

// Course Complexity
export const COURSE_COMPLEXITY = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
}

// Core Technologies (can be expanded)
export const CORE_TECHNOLOGIES = [
  { id: 'dotnet', name: '.NET', icon: '💻' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'qa', name: 'QA', icon: '🧪' },
  { id: 'javascript', name: 'JavaScript', icon: '📜' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'react', name: 'React', icon: '⚛️' },
]

// API Endpoints (placeholder)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  COURSES: {
    LIST: '/api/courses',
    CREATE: '/api/courses',
    UPDATE: '/api/courses/:id',
    DELETE: '/api/courses/:id',
    GENERATE_AI: '/api/courses/generate-ai',
  },
  GROUPS: {
    LIST: '/api/groups',
    CREATE: '/api/groups',
    UPDATE: '/api/groups/:id',
    DELETE: '/api/groups/:id',
  },
  USERS: {
    LIST: '/api/users',
    INVITE: '/api/users/invite',
  },
}

