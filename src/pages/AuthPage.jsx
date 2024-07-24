import { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import UserLoginForm from '../components/UserLoginForm';
import UserRegisetrForm from '../components/UserRegisterForm';
import AccountVerifiedRemind from '../components/AccountVerifiedRemind';
import { useAuth } from '../hooks/useAuth';

function AuthPage() {

    const [isLoginOn, setIsLoginOn] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false);
    const navigator = useNavigate();

    const { isLogin } = useAuth();

    useEffect(() => {
        if (isLogin) {
            navigator("/")
        }
    }, [isLogin, navigator])



    return (
        <Container component="main" maxWidth="xs">
            {isRegistered ? <AccountVerifiedRemind text="註冊成功，請至您的電子郵件中進行認證，5 秒後自動跳轉..." /> : <>
                {isLoginOn ? <UserLoginForm /> : <UserRegisetrForm setIsRegistered={setIsRegistered} setIsLoginOn={setIsLoginOn} />}
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2" onClick={() => setIsLoginOn(!isLoginOn)}>
                            {isLoginOn ? '還沒有帳號？註冊' : '已有帳號？登入'}
                        </Link>
                    </Grid>
                </Grid>
            </>
            }
        </Container>
    )

}

export default AuthPage;