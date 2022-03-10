import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'



const UpdateProduct = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/products/${id}`)
    };


    useEffect(() => {
        const updateProduct = () => {
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "PUT",
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
        }
        const getProduct = () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(json => setProduct(json))
        }

        updateProduct()
        getProduct()

    }, [])

    return (
        <>
            <Container sx={{ pt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item md={3} >
                        <Box sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                            noValidate>
                            <TextField
                                id="outlined-error"
                                label="Product Title"
                                defaultValue={product?.title}
                            />
                            <TextField
                                id="outlined-error"
                                label="Product Category"
                            />
                            <TextField
                                id="outlined-error"
                                label="Product Price"
                            />
                            <TextField
                                id="outlined-error"
                                label="Product Description"
                            />

                            <Button sx={{ mx: 1, color: "black", display: "block", border: "2px black solid" }}
                                variant="outlined"
                                component="label"
                            >
                                Upload Image
                                <input
                                    type="file"

                                />
                            </Button>
                            <Button variant="contained" sx={{ m: 1, }} onClick={handleClick}>
                                Update Product
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>

        </>


    )
}

export default UpdateProduct