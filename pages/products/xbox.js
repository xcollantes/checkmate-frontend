import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import BaseLayout from '../../components/base'
import catalogStyles from '../../css/catalog.module.css'

import menuItems from '../../testdata/menuItems.json'
import products from '../../testdata/products.json'


function Catalog(props) {
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
        <FormControlLabel control={<Checkbox />}
                          name={value.name}
                          onChange={event => handleChangeMenu(event)}
                          label={value.name}
                          key={value.name} />
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
        <SearchBar default=""></SearchBar>
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

function SearchBar(props) {
  const productOptions = products.map(product => product.name)

  return (
    <Autocomplete
        value={props.default}
        options={productOptions}
        autoSelect
        autoComplete
        renderInput={params => (
          <TextField {...params} defaultValue={props.default} label="Search" variant="outlined" />
        )}
      />
  )
}

function CatalogCard(product) {
  let formattedPrice = "$" + product.body.toLocaleString(
    "en-US", {minimumFractionDigits: 2})  // TODO: Localize

    return (
      <Card raised>

        <CardContent>
          <div style={{ height: "15rem", position: "relative" }}>
            <Image src={product.image} layout="fill" objectFit="contain" />
          </div>
          <Typography>{product.title}</Typography>
          <Typography varient="subheader1">{formattedPrice}</Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined" size="small">
            <AddShoppingCartIcon fontSize="small" />Add
          </Button>

          <Button variant="text" size="small">Details</Button>
        </CardActions>

      </Card>
    )
}


export default function TestPage() {
  return (
    <>
    <h1>Test new React stuff page</h1>
    <Catalog></Catalog>
    </>
  )
}
