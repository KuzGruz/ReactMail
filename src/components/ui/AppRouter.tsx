import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {appRoutes} from '@routes'

const AppRouter = () => {
    return (
        <Routes>
            {appRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={<route.component/>}
                />)}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRouter
