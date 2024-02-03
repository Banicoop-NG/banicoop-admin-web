//@ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import AuthLayout from "../../layout/authLayout";
import InputArea from "../../components/essentials/textInput";
import ButtonInterface from "../../components/essentials/button";
import { useFormik } from "formik";
import * as Yup from "yup";   
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios";
import { AxiosError } from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  pwd: Yup.string().required("pwd is required"),
});

const initialValues = {
  email: "",
  pwd: "",
};



const SignIn = () => {
  
  const loginMutation = useMutation<{email: string , pwd: string} , AxiosError , {email: string, pwd: string}>({
    mutationFn: (values) => {
      return axiosInstance.post('/auth/login' , values)
    }, 
    onSuccess: (response) => {
        console.log(response)
    },
    onError: (err: AxiosError) => {
      const errMsg = err?.response?.data?.message; 
      if ( Array.isArray(errMsg)) {
        errMsg.map ( item =>  {
          return toast.error(item);
        })
      } else {
        return toast.error(errMsg);
      }
    }
  
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      loginMutation.mutate(values)
    },
  });

  return (
    <AuthLayout title={""}>
      <Box my={"5em"}>
        <Text fontWeight={"bold"} fontSize={["18px", "20px"]}>
          Welcome Back 👋🏾
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <InputArea
            type="email"
            placeholder="example@gmail.com"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
            isError={formik.touched.email && formik.errors.email}
          />

          <InputArea
            type="password"
            placeholder="******"
            label="Password"
            name="pwd"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.pwd && formik.errors.pwd}
            isError={formik.touched.pwd && formik.errors.pwd}
          />

          <ButtonInterface width="100%" type="submit" loading={loginMutation.isPending}>
            Sign In
          </ButtonInterface>
        </form>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
