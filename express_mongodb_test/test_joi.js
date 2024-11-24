import Joi from "joi";


const schema = Joi.object({
    email: Joi.string().email().required()
})


const user = { name: "foo@example.com"}

const validation = schema.validate(user)


if (validation.error){
    console.log(validation.error.message)
}
else{
    console.log('Valid Email User')
}