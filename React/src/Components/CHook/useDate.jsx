import React from 'react'
import { useEffect } from 'react';

const useDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const mmddyy  = `${month} : ${day} : ${year}`

  return mmddyy;
}

export default useDate