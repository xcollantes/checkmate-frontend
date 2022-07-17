import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

/** Layout template for a main righthand section for content. 

  The lefthand side should contain some object which is
  like a menu selector or information on the content on the
  righthand side.

  Props:
    lefthand: Smaller side to support main section.
    righthand: Main section.
*/
export default function Showcase(props) {
  return (
    <Box sx={{ mt: '1em', width: '100%' }}>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} md={3} sx={{ pb: "2.5rem" }}>
          {props.lefthand}
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {props.righthand}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
