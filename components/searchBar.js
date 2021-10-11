import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import products from '../testdata/products.json'


export default function SearchBar(props) {
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
