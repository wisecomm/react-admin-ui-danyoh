import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid2, Link, Paper, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link as RouterLink } from 'react-router-dom'


function LoginPage() {
    return (
        <Container maxWidth='xs' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}  >
            <Paper elevation={10} sx={{ padding: 2 }}>
                <Avatar
                    sx={{
                        mx: 'auto',
                        bgcolor: 'secondary.main',
                        mb: 1
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant={'h5'} sx={{ textAlign: 'center' }}>
                    Sign In
                </Typography>
                <Box
                    component='form'
                    //  onSubmit={handleSubmit}
                    noValidate sx={{ mt: 1 }}>
                    <TextField
                        placeholder='Enter username'
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        placeholder='Enter password'
                        fullWidth
                        required
                        type='password'
                    />
                    <FormControlLabel control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{ mt: 2 }}>
                        Sign In
                    </Button>
                </Box>
                <Grid2 container justifyContent={'space-between'} sx={{ mt: 1 }}>
                    <Grid2>
                        <Link component={RouterLink} to='/forget'>
                            Forgot password?
                        </Link>
                    </Grid2>
                    <Grid2>
                        <Link component={RouterLink} to='/register'>
                            Sign Up
                        </Link>
                    </Grid2>
                </Grid2>
            </Paper>
        </Container>
    )
}

export default LoginPage