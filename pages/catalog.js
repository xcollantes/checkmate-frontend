import { useState, useEffect } from 'react'
import {
  Box,
  FormGroup,
  Grid,
  FormControlLabel,
  Checkbox,
  TextField,
  Autocomplete
} from '@mui/material'
import Showcase from '../components/showcase'
import CatalogCard from '../components/catalogCard'

import { getAllProducts, toProperCase } from '../firebase_utils/product_utils'

import menuItems from '../catalog_data/categories.json'

export default function Catalog() {
  const [productsShow, setProductsShow] = useState()
  const [allProducts, setAllProducts] = useState()
  const [selectedCatagories, setSelectedCatagories] = useState(menuItems)  // Default all items selected  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllProducts().then(p => {
      setProductsShow(p)
      // Retain all products to avoid API call when 
      // all products are de-selected 
      setAllProducts(p)
    })
  }, [])

  /**
   * Re-render the catalog depending on category selection. 
   * 
   * Selected categories are iterated then the products are iterated if 
   * included in the selection. 
   * @param {*} event Click on the selection of catagories. 
   */
  function handleChangeMenu(event) {
    const { name, checked } = event.target
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
    const flatSelected = []
    const flatNewSelectedCatagories = newSelectedCatagories.map(selected => {
      if (selected.menuSelect) {
        flatSelected.push(selected.name.toLowerCase())
      }
    })

    // Products which are marked as TRUE in array of menu items "flatSelected[]"
    const newProductsShow = allProducts.filter(product =>
      flatSelected.includes(product.category.toLowerCase()))

    // Update the state of selected 
    setSelectedCatagories(newSelectedCatagories)

    // Render product tiles; render all products if no filters selected 
    if (flatSelected.length == 0) {
      setProductsShow(allProducts)
    } else {
      setProductsShow(newProductsShow)
    }
  }

  /**
   * Filter the products rendered.  
   * @param {*} event Click or text in search bar. 
   */
  function handleSearchChange(event) {
    let { textContent } = event.target
    setProductsShow(allProducts.filter(product =>
      product.product_name.toLowerCase() == textContent.toLowerCase()))
  }

  /**
   * Render the search bar. 
   * @returns JSX of the search bar. 
   */
  function catalogSearchBar() {
    return (
      <Autocomplete
        options={allProducts}
        autoComplete
        getOptionLabel={option => option.product_name}
        onChange={event => handleSearchChange(event)}
        groupBy={option => toProperCase(option.category)}

        noOptionsText="No products found"
        renderInput={params => (
          <TextField {...params} label="Search products" variant="outlined" />
        )}
      />
    )
  }

  /**
   * Render the selectable categories.
   * @param {*} categories Product classification. 
   * @returns JSX for categories. 
   */
  function buildMenuItems() {
    return (
      <FormGroup>
        {menuItems.map(category =>
          <FormControlLabel control={<Checkbox />}
            name={category.name}
            onChange={event => handleChangeMenu(event)}
            label={toProperCase(category.name)}
            key={category.name} />)}
      </FormGroup>
    )
  }

  /**
   * Renders product tiles in catalog. 
   * @returns JSX of products with image and other data. 
   */
  function buildCatalogGrid() {
    const i = 0
    console.debug("RENDER: ", productsShow)
    return (
      productsShow?.map(value =>
        <Grid item xs={12} sm={6} md={4} key={value.product_name}>
          <CatalogCard title={value.product_name}  // From Products
            body={value.product_name}
            image={"/../public/images/products/bmw.png"}
            productId={i++}>
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
        <Showcase lefthand={buildMenuItems()}
          righthand={buildCatalogGrid()}>
        </Showcase>
      </Box>
    </>
  )
}
