import * as yup from 'yup';

const personSchema = yup.object({
    email: yup.string().nullable().email('Geçerli bir email adresi giriniz.').required('zorunlu alan'),
    password: yup.string().min(5,'parolanız en az 5 karakter olmalı').required('zorunlu alan'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],'parololar uyuşmuyor').required('zorunlu alan')

   
  });

  export default personSchema;