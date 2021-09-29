import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CatalogGrid from '../components/catalogGrid'
import BaseLayout from '../components/base'


export default function CatalogCard() {
  return (
    <BaseLayout catalog>
      <CatalogGrid>
        <p>THis is the CatalogGrid</p>

      </CatalogGrid>
    </BaseLayout>
  )
}
