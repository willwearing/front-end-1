import * as yup from 'yup'

const schema = yup.object().shape({
    item_name: yup
        .string()
        .required('Item name is required')
        .min(3, 'Item name must be 3 or more characters'),
    item_price: yup
        .number()
        .positive()
        .required('Item price must listed'),
    item_description: yup
        .string()
        .required('Item description is required'),
    item_location: yup
        .string()
        .required('Item location must be listed'),
  })

  export default schema;