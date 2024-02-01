
import { Box, Text } from "@chakra-ui/react";
import AuthLayout from "../../layout/authLayout";
import InputArea from "../../components/essentials/textInput";
import ButtonInterface from "../../components/essentials/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axios";
import { AxiosError } from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};



const SignIn = () => {
  
  const [loading, setLoading] = useState(false);

  const loginMutation = useMutation<{email: string , password: string} , AxiosError , {email: string, password: string}>({
    mutationFn: (values) => {
      return axiosInstance.post('/login' , values)
    },
    onSuccess: () => {
      
    },
    onError: (err: AxiosError) => {

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
            placeholder="Password"
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password && formik.errors.password}
            isError={formik.touched.password && formik.errors.password}
          />

          <ButtonInterface width="100%" type="submit" loading={loading}>
            Sign In
          </ButtonInterface>
        </form>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
