import React from 'react'
import { Grid, Typography } from '@mui/material'

const Disbursements = () => {
  return (
    <>
    <div>
      <p style={{fontSize: '15px'}
    }>
      Conveniently disburse funds from your Built Wallet !        
      </p> 
    </div>
    <Grid container spacing={2}>
    <Grid item xs={2} sm={2} lg={2} md={2} marginTop={3}>
          <Typography variant='h5' textAlign={'center'} color="gray">
            Payment To
          </Typography>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '32px'}}>
          <Typography variant='h4' color=''><p>Vendors & Withdrawals</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
          <Typography variant='h4' color=''><p>Vendors & Withdrawals</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
          <Typography variant='h4' color=''><p>Payroll(bulk payment)</p></Typography>
          </div>
      </Grid>
      <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
          <Typography variant='h5' textAlign={'center'} color="gray">
            Pay Via
          </Typography>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
              <img src='/assets/images/momo.png' style={{width: '50px', height: '50px'}}/>
          <Typography variant='h5'><p>Mobile Money</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '15px', marginRight: '10px'}}>
              <img src='/assets/images/balance.png' style={{width: '40px', height: '35px'}}/>
          <Typography variant='h5'><p>Bank Account</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '15px', marginRight: '10px'}}>
              <img src='/assets/images/payments.png' style={{width: '40px', height: '35px'}}/>
          <Typography variant='h5'><p>Bank Account</p></Typography>
          </div>
      </Grid>
      <Grid item xs={2} sm={2} lg={2} md={2} marginTop={3}>
          <Typography variant='h5' textAlign={'center'} color="gray">
            Rate
          </Typography>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '25px'}}>
          <Typography variant='h3' color=''><p>1%</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
          <Typography variant='h3' color=''><p>1%</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
          <Typography variant='h3' color=''><p>1%</p></Typography>
          </div>
      </Grid>
      <Grid item xs={2} sm={2} lg={2} md={2} marginTop={3}>
          <Typography variant='h5' textAlign={'center'} color="gray">
            Cap
          </Typography>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '28px'}}>
          <Typography variant='h4' color=''><p>GHC10</p></Typography>
          </div>
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
          <Typography variant='h4' color=''><p>GHC10</p></Typography>
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
          <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
          <Typography variant='h4' color=''><p>Business</p></Typography>
          </div>
      </Grid>
  </Grid> 
    </>
  )
}

export default Disbursements