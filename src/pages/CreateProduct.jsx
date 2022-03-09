import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const CreateProduct = () => {

    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])
    return (
        <Container>
            <Grid container>
                <Grid item md={12}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-error"
                            defaultValue="Hello World"
                        />

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CreateProduct