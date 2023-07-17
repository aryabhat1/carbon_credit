import React from 'react'
import styles from './page.module.css'

const Category = ({params}) => {
    console.log("The parameters are: ", params)

  return (
    <div className={styles.container}>Category</div>
  )
}

export default Category