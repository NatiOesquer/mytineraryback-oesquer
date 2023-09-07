import { Router } from "express"
import register from "../controllers/auth/register.js"
import isValidPass from "../middlewares/isValidPass.js"
import existsUser from "../middlewares/existsUser.js"
import validator from "../middlewares/validator.js"
import registerSchema from "../schemas/register.js"
import signin from "../controllers/auth/signin.js"
import signinSchema from "../schemas/signin.js"
import notExistsUser from "../middlewares/notExistsUser.js"
import isPassOk from "../middlewares/isPassOk.js"
import isValidToken from "../middlewares/isValidToken.js"


let authRouter = Router()

authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register)
authRouter.post('/signin',validator(signinSchema),notExistsUser,isPassOk,isValidToken,signin)


export default authRouter