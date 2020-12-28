import { Router } from 'express'

import uploadConfig from '@config/upload'
import usersController from '../../controllers/usersController'
const usersRouter = Router();



usersRouter.get('/',uploadConfig.single('file'), usersController.index);


export default usersRouter;