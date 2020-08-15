// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

const useForm =(initialValues)=>{
    const[shopping, setShopping] = useLocalStorage("signupData", initialValues);

    const handleChanges = (e) => {
        console.log(e.target.name, e.target.value);
        setShopping({
          ...shopping,
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
       
      };
      return [shopping, handleSubmit, handleChanges]
}
export default useForm;

// const useForm = (initialValues, cb) => {
//     const [values, setValues] = useLocalStorage("signupData", initialValues);
  
//     const handleChanges = (e) => {
//       console.log(e.target.name, e.target.value);
//       setValues({
//         ...values,
//         [e.target.name]: e.target.value
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       alert(values);
//       cb();
//     };
  
//     const clearForm = (e) => {
//       e.preventDefault();
//       setValues(initialValues);
//     };
  
//     return [values, handleSubmit, handleChanges, clearForm];
//   };
  
//   export default useForm;