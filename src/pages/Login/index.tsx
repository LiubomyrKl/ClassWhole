import React from 'react';
import Card from "@/components/common/Card";
import LoginForm from "@/modules/LoginForm";
import PublicLayout from "@/layouts/PublicLayout";

import classes from './Login.module.scss';
import cx from 'classnames';
const LoginPage = () => {

    return (
        <PublicLayout>
            <div className={classes.loginFormWrapper}>
                <h1 className={cx('title', 'mb-20')}>Welcome Back 👋</h1>
                <p className={cx('description', 'mb-50')}>
                    Today is a new day. It's your dat. You shape it.<br/>
                    Sign in to start a new study day.
                </p>
                <LoginForm/>
            </div>
        </PublicLayout>
    )
};

export default LoginPage;