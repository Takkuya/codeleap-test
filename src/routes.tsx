import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Main } from "./pages/Main"
import { SignUp } from "./pages/SignUp"

import GlobalStyle from "./styles/Global"
import theme from "./styles/Theme"

export const MainRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
