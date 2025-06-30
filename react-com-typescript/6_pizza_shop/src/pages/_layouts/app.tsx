import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./styles/app_styles";
import { Header } from "@/components/header";
import { useEffect } from "react";
import { api } from "@/lib/axios";
import { error } from "console";
import { isAxiosError } from "axios";


export function AppLayout() {

  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
        response => response,
        error => {
          if (isAxiosError(error)){
              /*Abaixo, depende do retorno do back-end */
              const status = error.response?.status
              const code = error.response?.data.code

              if (status === 401 && code === 'UNAUTHORIZED'){
                navigate('/sign-in', { replace: true })
              }
          }
        },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <Container>
      <Header />

      <div>
        <Outlet />
      </div>
    </Container>
  );
}
