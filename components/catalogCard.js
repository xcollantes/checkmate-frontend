import Link from 'next/link'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CatalogCard(product) {
  // let formattedPrice = "$" + product.body.toLocaleString(
  //   "en-US", { minimumFractionDigits: 2 })  // TODO: Localize

  console.log("CARD: ", product)

  return (
    <Card raised>
      <CardContent>
        <div style={{ height: "15rem", position: "relative" }}>
          <Image src={product.image} layout="fill" objectFit="contain" />
        </div>
        <Typography>{product.title}</Typography>
        {/* <Typography varient="subheader1">{formattedPrice}</Typography> */}
      </CardContent>

      <CardActions>
        <Button variant="outlined" size="small">
          <AddShoppingCartIcon fontSize="small" />Add
        </Button>
        <Link href={"/" + product.productId}>
          <Button variant="text" size="small">Details</Button>
        </Link>
      </CardActions>

    </Card>
  )
}
