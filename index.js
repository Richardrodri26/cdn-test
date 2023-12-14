import * as yup from 'https://cdn.jsdelivr.net/npm/yup@1.3.2/index.min.js'
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