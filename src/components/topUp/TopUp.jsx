import React from 'react'
import { Grid, Typography } from '@mui/material'

const TopUp = () => {
  return (
    <>
    <div>
      <p style={{fontSize: '15px'}}>
      Its easier than ever to top up your Built Wallet !
      </p> 
    </div>
     <Grid container spacing={2}>
      
     <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
         <Typography variant='h5' textAlign={'center'} color="gray">
           Pay Via
         </Typography>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
             <img src='/assets/images/momo.png' style={{width: '50px', height: '50px'}}/>
         <Typography variant='h5'><p>Mobile Money</p></Typography>
         </div>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '15px', marginRight: '10px'}}>
             <img src='/assets/images/credit_card.png' style={{width: '40px', height: '35px'}}/>
         <Typography variant='h5'><p>By Card</p></Typography>
         </div>
     </Grid>
     <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
         <Typography variant='h5' textAlign={'center'} color="gray">
           Rate
         </Typography>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '25px'}}>
         <Typography variant='h3' color=''><p>Free</p></Typography>
         </div>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
         <Typography variant='h3' color=''><p>2.3%</p></Typography>
         </div>
     </Grid>
     <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
         <Typography variant='h5' textAlign={'center'} color="gray">
           Cap
         </Typography>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '28px'}}>
         <Typography variant='h4' color=''><p>Free</p></Typography>
         </div>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
         <Typography variant='h4' color=''><p>No Cap</p></Typography>
         </div>
     </Grid>
     <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
         <Typography variant='h5' textAlign={'center'} color="gray">
           Paid By
         </Typography>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
         <Typography variant='h4' color=''><p>Business</p></Typography>
         </div>
         <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
         <Typography variant='h4' color=''><p>Business</p></Typography>
         </div>
     </Grid>
 </Grid>
 </>
  )
}

export default TopUp