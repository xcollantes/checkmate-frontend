import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CatalogCard from '../components/catalogCard'
import BaseLayout from '../components/base'
import SearchBar from '../components/searchBar'
import catalogStyles from '../css/catalog.module.css'

import menuItems from '../testdata/menuItems.json'
import products from '../testdata/products.json'


export default function Catalog(props) {
  const [selectedCatagories, setSelectedCatagories] = useState(menuItems)  // Default all items selected

  function handleChangeMenu(event) {
    let { name, checked } = event.target
    // https://stackoverflow.com/a/69446324/8278075
    setSelectedCatagories(filters => (
      filters.map(filter => filter.name == name ? {
        ...filter,
        selected: checked
      } : filter)
    ))
  }

  function buildMenuItems(items) {
    return (
      items.map(value =>
        <FormControlLabel control={<Checkbox defaultChecked />}
                          name={value.name}
                          onChange={event => handleChangeMenu(event)}
                          label={value.name}
                          key={value.name}/>
      )
    )
  }

  function buildCatalogGrid() {
    let listItemsSelected = []
    selectedCatagories.map(obj => {
      if (obj.selected) {
        listItemsSelected.push(obj.["name"])
      }
    })

    let productsToRender = products.filter(
      product => listItemsSelected.includes(product.catagory)
    )

    return (
      productsToRender.map(value =>
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
        <SearchBar default="thsi is default"></SearchBar>
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
