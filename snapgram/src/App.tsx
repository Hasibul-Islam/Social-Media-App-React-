import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Signinform from './_auth/forms/SigninForm';
import Signupform from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
// import { Home } from './_root/pages';
import Home from './_root/pages/Home';
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path='/sing-in' element={<Signinform/>}/>
                <Route path='/sing-in' element={<Signupform/>}/>
            </Route>
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
            
        </Routes>
    </main>
  )
}

export default App