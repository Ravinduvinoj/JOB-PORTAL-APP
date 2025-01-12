import { Router } from 'express';
import { registerUser, loginUser} from '../controller/userController.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/user', companyuserController.user); // Authentication needed
// router.get('/user-accounts', companyuserController.getAllUserAccounts);
// router.get('/delete-useracc/:email', companyuserController.delete_useracc);
// router.put('/update-user/:email', companyuserController.update_user);
// router.get('/getalltempuser', companyuserController.getTempUser);
// router.post('/logout', companyuserController.logout);
// router.get('/companycount', companyuserController.companyCount);

export default router;