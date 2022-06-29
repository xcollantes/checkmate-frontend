import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Showcase from '../components/showcase'
import CatalogCard from '../components/catalogCard'

import menuItems from '../testdata/menuItems.json'
import products from '../testdata/products.json'

export default function Catalog(props) {
  const [productsShow, setProductsShow] = useState(products)
  const [selectedCatagories, setSelectedCatagories] = useState(menuItems)  // Default all items selected

  function handleChangeMenu(event) {
    let { name, checked } = event.target
    // https://stackoverflow.com/a/69446324/8278075
    const newSelectedCatagories = selectedCatagories.map(item => item.name == name ? {
      ...item,
      menuSelect: checked
    } : item
    )

    // If catagory is selected, then push onto an array
    // https://stackoverflow.com/a/69553466/8278075
    let flatSelected = []
    const flatNewSelectedCatagories = newSelectedCatagories.map(selected => {
      if (selected.menuSelect) {
        flatSelected.push(selected.name)
      }
    })

    // Render products which are marked as TRUE in array of menu items "flatSelected[]"
    const newProductsShow = products.filter(product =>
      flatSelected.includes(product.catagory))

    setSelectedCatagories(newSelectedCatagories)

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
