import React from 'react'
import { Grid, Typography } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
const Collections = () => {
const [mobileMoney, setMobileMoney ]  = useState('mtn');
const operators = ['mtn', 'vodafone', 'airtel']
console.log(operators[operators.indexOf(mobileMoney) - 1])
const MobileMoneyImgComp = () => {
  if(mobileMoney === 'mtn') return (
    <span style={{fontSize: '12px', margin: '0px 2px'}}><img src='/assets/images/mtn.png' style={{width: '70%'}}/></span>
  )
  else if(mobileMoney === 'vodafone') return(
    <span style={{fontSize: '12px', margin: '0px 2px'}}><img src='/assets/images/VODAFONE.png' style={{width: '70%'}}/></span>
  )
  else{
    return(
    <span style={{fontSize: '12px', margin: '0px 2px'}}><img src='/assets/images/AIRTEL-TIGO.png' style={{width: '70%'}}/></span>
    )
  }
}
const handleLeftClick = () => {
  if(operators.indexOf(mobileMoney) === 0){
    setMobileMoney(operators[operators.length - 1])
  }else{
    setMobileMoney(operators[operators.indexOf(mobileMoney) - 1])
  }
}
const handleRightClick = () => {
  if(operators.indexOf(mobileMoney) === operators.length - 1){
    setMobileMoney(operators[0])
  }else{
    setMobileMoney(operators[operators.indexOf(mobileMoney) + 1])
  }
}
  return (
    <>
    <div>
       <p style={{fontSize: '15px'}}>
          Payment on Invoices, POS & Payment Links
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
        <Typography variant='h3' color=''><p>1.5%</p></Typography>
        </div>
        <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
        <Typography variant='h3' color=''><p>2.3%</p></Typography>
        </div>
    </Grid>
    <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
        <Typography variant='h5' textAlign={'center'} color="gray">
          Cap
        </Typography>
        <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '13px'}}>
        <Typography variant='h5' textAlign={'center'}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div>
        <ArrowLeftIcon sx={{backgroundColor: 'black', color: 'white', borderRadius: '50%'}} onClick={handleLeftClick}/> 
        </div>
        <div>
        <MobileMoneyImgComp/>
        </div>
        <div>
        <ArrowRightIcon sx={{backgroundColor: 'black', color: 'white', borderRadius: '50%', marginRight: '2px'}} onClick={handleRightClick}/>
        </div>
        </div>
        </Typography>
        <Typography variant='h4' color=''><p>{mobileMoney === 'mtn' ? 'GHS15' : 'No Cap'}</p></Typography>
        </div>
        <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
        <Typography variant='h4' color=''><p>No Cap</p></Typography>
        </div>
    </Grid>
    <Grid item xs={3} sm={3} lg={3} md={3} marginTop={3}>
        <Typography variant='h5' textAlign={'center'} color="gray">
          Paid By
        </Typography>
        <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '32px'}}>
        <Typography variant='h4' color=''><p>Customer</p></Typography>
        </div>
        <div style={{textAlign: 'center' ,alignItems: 'center', justifyContent: 'center', marginTop: '55px'}}>
        <Typography variant='h4' color=''><p>Customer</p></Typography>
        </div>
    </Grid>
</Grid>
</>
  )
}

export default Collections