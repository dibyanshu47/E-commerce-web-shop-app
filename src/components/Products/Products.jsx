import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://cdn.shopify.com/s/files/1/0258/2485/4100/products/flatheads-aurea-slate-grey-bamboo-mens-shoes-pair_b5e37200-0290-4736-8e46-49c93ffea8ea_1800x1800.jpg?v=1611820949' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png?downsize=*:180' }
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
