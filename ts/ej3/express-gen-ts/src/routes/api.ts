import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import User from '@src/models/User';
import UserRoutes from './UserRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  '/',
  UserRoutes.getAll,
);

userRouter.get(
  '/:id',
  UserRoutes.getOne,
);

// Add one user
userRouter.post(
  '/',
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  '/:id',
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  '/:id',
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
