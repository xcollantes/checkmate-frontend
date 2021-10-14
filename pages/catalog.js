import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CatalogCard from '../components/catalogCard'
import BaseLayout from '../components/base'
import SearchBar from '../components/searchBar'
import catalogStyles from '../css/catalog.module.css'

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
    let { value } = event.target
    // setSelectedCatagories(catagory => (
    //   catagory.map(item => item.name.toLowerCase().includes(value.toLowerCase()))
    // ))
    selectedCatagories.map(catagory => console.log(catagory))

  }

  function catalogSearchBar() {
    const productOptions = products.map(product => product.name).sort()

    return (
      <Autocomplete
          options={productOptions}
          autoComplete
          noOptionsText="No products found"
          renderInput={params => (
            <TextField {...params}
                       defaultValue=""
                       label=""
                       InputProps={{
                         startAdornment: (
                           <InputAdornment position="start">
                             <SearchIcon />
                           </InputAdornment>
                         )
                       }}
                       onChange={event => handleSearchChange(event)}
                       variant="outlined" />
          )}
        />
    )
  }

  function buildMenuItems(items) {
    return (
      items.map(value =>
        <FormControlLabel control={<Checkbox />}
                          name={value.name}
                          onChange={event => handleChangeMenu(event)}
                          label={value.name}
                          key={value.name} />
      )
    )
  }

  function buildCatalogGrid() {
    return (
      productsShow.map(value =>
                  <Grid item xs={12} sm={6} md={4} key={value.name}>
                    <CatalogCard title={value.name}  // From Products
                                 body={value.price}
                                 image={"/../public/images/products/"
                                   + value.image}>
                    </CatalogCard>
                  </Grid>
                )
    )
  }

  return (
    <BaseLayout catalog>
      <Box sx={{ mt: "1rem" }}>
        {catalogSearchBar()}
      </Box>
      <Box sx={{ mt: '1em', width: '100%' }}>
        <Grid container justifyContent="space-evenly">

          {/* Menu selector */}
          <Grid item xs={12} md={3} sx={{ pb: "2.5rem" }}>
            <FormGroup>
              {buildMenuItems(menuItems)}
            </FormGroup>
          </Grid>

          <Grid item xs={12} md={9}>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {buildCatalogGrid()}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  )
}
