import BaseLayout from '../../../components/base'
import Typography from '@mui/material/Typography'


export default function Restricted() {
  return (
    <BaseLayout>
      <Typography variant="h2">This is a restricted page.</Typography>
      <div>Icons made by {' '}
           <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">
           www.flaticon.com</a>
      </div>
    </BaseLayout>
  )
}
