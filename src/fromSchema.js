import * as yup from 'yup';

export default yup.object.shape({
    item_name: yup
        .string()
        .required('Item name is required')
        .min(3, 'Item name must be 3 characters min'),
    item_description: yup
        .string()
        .required('Item description is required'),
    item_price: yup
        .number()
        .required('Item price must be a number'),
    item_location: yup
        .string()
        .required('Item location must be listed')
})