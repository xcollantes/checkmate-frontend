import { useState } from 'react'
import {
  Box, FormGroup, Grid,
  FormControlLabel, Checkbox, TextField, Autocomplete
} from '@mui/material'
import Showcase from '../components/showcase'
import CatalogCard from '../components/catalogCard'

import { getAllProducts } from '../firebase_utils/product_utils'

import menuItems from '../testdata/menuItems.json'
import products from '../testdata/products.json'

export default function Catalog() {
  const [productsShow, setProductsShow] = useState(products)
  const [selectedCatagories, setSelectedCatagories] = useState(menuItems)  // Default all items selected

  function handleChangeMenu(event) {
    let { name, checked } = event.target
    // https://stackoverflow.com/a/69446324
    const newSelectedCatagories = selectedCatagories.map(
      item => item.name == name ? {
        ...item,
        menuSelect: checked
      } : item
    )

    // If catagory is selected, then push onto an array for easy iteration 
    // since I don't currently know how to check for includes in JSON object. 
    // https://stackoverflow.com/a/69553466
    let flatSelected = []
    newSelectedCatagories.map(selected => {
      if (selected.menuSelect) {
        flatSelected.push(selected.name)
      }
    })

    // Products which are marked as TRUE in array of menu items "flatSelected[]"
    const newProductsShow = products.filter(product =>
      flatSelected.includes(product.catagory))

    // Update the state of selected 
    setSelectedCatagories(newSelectedCatagories)

    // Render product tiles; render all products if no filters selected 
    if (flatSelected.length == 0) {
      setProductsShow(products)
    } else {
      setProductsShow(newProductsShow)
    }
  }

  function handleSearchChange(event) {
    let { textContent } = event.target
    setProductsShow(products.filter(product =>
      product.name == textContent))
  }

  function catalogSearchBar() {
    // const productOptions = products.map(product => product.name).sort()

    return (
      <Autocomplete
        options={products}
        autoComplete
        getOptionLabel={option => option.name}
        onChange={event => handleSearchChange(event)}
        groupBy={option => option.catagory}

        noOptionsText="No products found"
        renderInput={params => (
          <TextField {...params} label="" variant="outlined" />
        )}
      />
    )
  }

  function buildMenuItems(items) {
    return (
      <FormGroup>
        {items.map(value =>
          <FormControlLabel control={<Checkbox />}
            name={value.name}
            onChange={event => handleChangeMenu(event)}
            label={value.name}
            key={value.name} />)}
      </FormGroup>
    )
  }

  function buildCatalogGrid() {
    return (
      productsShow.map(value =>
        <Grid item xs={12} sm={6} md={4} key={value.name}>
          <CatalogCard title={value.name}  // From Products
            body={value.price}
            image={"/../public/images/products/"
              + value.image}
            productId={value._id}>
          </CatalogCard>
        </Grid>
      )
    )
  }

  return (
    <>
      <Box sx={{ mt: "1rem" }}>
        {catalogSearchBar()}
      </Box>
      <Box>
        <Showcase lefthand={buildMenuItems(menuItems)}
          righthand={buildCatalogGrid()}>
        </Showcase>
      </Box>
    </>
  )
}
