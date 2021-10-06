import { useState } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CatalogCard from '../components/catalogCard'
import BaseLayout from '../components/base'
import catalogStyles from '../css/catalog.module.css'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'




// getStaticProps will never send data on the client.
// Must be called from under pages/
export async function getStaticProps() {
  const url = "https://api.weatherapi.com/v1/current.json?q=Seattle&key=2d796238cb9b4f0f93700711213009"
  const response = await fetch(url)
  const xxx = await response.json()

  return {
    props: {
      xxx
    }
  }
}

const menuItems = [
  {
    "_id": 1,
    "name": "Car",
    "selected": true
  },
  {
    "_id": 2,
    "name": "Clothes",
    "selected": true
  },
  {
    "_id": 3,
    "name": "Computers",
    "selected": true
  },
  {
    "_id": 4,
    "name": "Food",
    "selected": true
  },
  {
    "_id": 5,
    "name": "Ammunition",
    "selected": true
  },
  {
    "_id": 6,
    "name": "Empty",
    "selected": true
  }
]

const products = [
  {
    "_id": 1,
    "name": "Toyota",
    "catagory": "Car",
    "price": 15.99
  },
  {
    "_id": 2,
    "name": "BMW",
    "catagory": "Car",
    "price": 250000
  },
  {
    "_id": 3,
    "name": "Jacket",
    "catagory": "Clothes",
    "price": 50.00
  },
  {
    "_id": 4,
    "name": "RTX 3080",
    "catagory": "Computers",
    "price": 1000
  },
  {
    "_id": 5,
    "name": "AMD Ryzen",
    "catagory": "Computers",
    "price": 300
  },
  {
    "_id": 6,
    "name": "Intel",
    "catagory": "Computers",
    "price": 325
  },
  {
    "_id": 7,
    "name": "Keyboard",
    "catagory": "Computers",
    "price": 300
  },
  {
    "_id": 8,
    "name": "Logitech webcam",
    "catagory": "Computers",
    "price": 300
  }
]







export default function Catalog( props ) {
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
                          label={value.name} />
      )
    )
  }

  function buildCatalogGrid() {
    // let resultRow = []
    // for (let row = 0 row <= 100 row++) {
    //   resultRow.push(
        // <Grid item xs={12} sm={6} md={4}>
        //   <CatalogCard title={cardContent.location.name}
        //                action="See more">
        //   </CatalogCard>
        // </Grid>
    //   )
    // }

    let listItemsSelected = []
    selectedCatagories.map(obj => {
      if (obj.selected) {
        listItemsSelected.push(obj.["name"])
      }
    })

    let productsToRender = products.filter(
      product => listItemsSelected.includes(product.catagory)
    )
    console.log("products to render")
    console.log(productsToRender)
    return (
      productsToRender.map(value =>
                  <Grid item xs={12} sm={6} md={4}>
                    <CatalogCard title={value.name}  // From Products
                                 body={value.price}  // From Products
                                 action="See more">
                    </CatalogCard>
                  </Grid>
                )
    )
  }

  return (
    <BaseLayout catalog>
      <Box sx={{ mt: '3em', width: '100%' }}>
        <Grid container justifyContent="space-evenly">

          {/* Menu selector */}
          <Grid item xs={12} md={3}>
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
