import {
    Typography,
    Box,
} from '@mui/material';
import PropTypes from 'prop-types';

function AccountVerifiedRemind(props) {

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
                {props.text}
            </Typography>
        </Box>
    );

}

AccountVerifiedRemind.propTypes = {
    text: PropTypes.string.isRequired
}

export default AccountVerifiedRemind;