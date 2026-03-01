/**
 * Node modules
 */
import {
  createBrowserRouter,
  UNSAFE_getTurboStreamSingleFetchDataStrategy,
} from 'react-router';

/**
 * Loaders
 */

/**
 * Pages
 */
import { Login } from '@/pages/auth/Login';
import { signupBanner } from '@/assets';
import { Signup } from '@/pages/auth/Signup';

/**
 * Actions
 */
import signupAction from '@/routes/action/auth/signup';
import loginAction from '@/routes/action/auth/login';

/**
 * Error boundaries
 */

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
    action: loginAction
  },
  {
    path: '/signup',
    Component: Signup,
    action: signupAction,
  },
  {
    path: '/refresh-token',
  },
  {
    path: '/',
    children: [
      {
        index: true,
      },
      {
        path: 'blogs',
      },
      {
        path: 'blogs/:slug',
      },
    ],
  },
  {
    path: '/admin',
    children: [
      {
        path: 'dashboard',
      },
      {
        path: 'blogs',
      },
      {
        path: 'blogs/create',
      },
      {
        path: 'blogs/:slug/edit',
      },
      {
        path: 'comments',
      },
      {
        path: 'users',
      },
    ],
  },
  {
    path: '/setting',
  },
]);

export default router;
