import React from 'react'
import { useSelector } from 'react-redux'
import Box from "@mui/material/Box"
import { CircularProgress } from '@mui/material';
import styles from "../../compenents/progress/loading.module.css"
export default function Loading() {

    const {isLoaded}=useSelector((state)=>state.app);
  return (
    <>
    {isLoaded ? (
      ""
    ) : (
      <Box className={styles.loading}>
        <CircularProgress />
      </Box>
    )}
  </>
   
  )
}
