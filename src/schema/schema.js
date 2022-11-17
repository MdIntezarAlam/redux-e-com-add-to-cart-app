import * as Yup from 'yup'
import { allRegex, error_message } from '../utils/constants'

export const loginSchema = Yup.object({
    name: Yup.string().trim().min(3).max(14).required("Name should be greater than 3 character!"),
    email: Yup.string().trim().min(3).matches(allRegex.email_regex, error_message.email_msg).required("Email Should not be empty!"),
    password: Yup.string().trim().max(8).matches(allRegex.pass_regex, error_message.pass_msg).required("Password Field Should not be empty"),
    phone: Yup.string().max(10).matches(allRegex.phone_regex, error_message.phone_msg).required("Phone field should not be empty!")
})
