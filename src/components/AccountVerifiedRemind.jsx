import React, { useState } from 'react';
import {
    Button,
    TextField,
    Container,
    Typography,
    Box,
    Grid,
    Link,
    Snackbar,
} from '@mui/material';

function AccountVerifiedRemind({ text }) {

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                {text}
            </Typography>
        </Box>
    );

}

export default AccountVerifiedRemind;