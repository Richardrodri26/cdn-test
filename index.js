import * as yup from ' yup'
const sum = (a, b) => a + b;

const schema = yup.object({
    docType: yup.string().required("El tipo de documento es requerido"),
    // docNumber: controller.validateDocNumber("docType")
})

const object = { 
    "a": "hola"
}

export default {
    sum,
    schema,
    object
}