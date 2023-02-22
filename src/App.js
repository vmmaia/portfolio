import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ConfigProvider, theme, Layout } from 'antd';

import LandingPage from './pages/landing';

import './app.css';

const App = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <Layout>
                <Layout.Content
                    style={{
                        minHeight: '100vh',
                        padding: '15px',
                    }}
                >
                    <Routes>
                        <Route
                            exact
                            path={'/'}
                            element={<LandingPage />}
                        ></Route>
                        <Route
                            path={'*'}
                            element={<Navigate replace to="/" />}
                        ></Route>
                    </Routes>
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
