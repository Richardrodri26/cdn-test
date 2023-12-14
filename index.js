const sum = (a, b) => a + b;

const schema = yup.object({
    docType: controller.string().required("El tipo de documento es requerido"),
    // docNumber: controller.validateDocNumber("docType")
})

export default {
    sum,
    schema
}