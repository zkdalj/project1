import React from 'react'
import { generateTestData } from "pagination-react-js"


export default function pagination() {
  const dataList = generateTestData(700, i => ({ id: i, name: `Test ${i}` }))
}
 
