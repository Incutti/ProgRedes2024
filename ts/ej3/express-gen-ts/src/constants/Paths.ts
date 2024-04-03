/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Users: {
    Base: '/users',
    Get: '/',
    Add: '/',
    Update: '/users',
    Delete: '/users/:id',
  },
} as const;
