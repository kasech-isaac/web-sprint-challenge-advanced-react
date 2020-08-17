// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";
import {useState} from "react";

const useForm =(initialValues)=>{
    const[shopping, setShopping] = useLocalStorage("signupData", initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const handleChanges = (e) => {
        console.log(e.target.name, e.target.value);
        setShopping({
          ...shopping,
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
       
      };
      return [shopping, handleSubmit, handleChanges,showSuccessMessage]
}
export default useForm;

