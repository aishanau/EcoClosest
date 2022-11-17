import { SelectList } from 'react-native-dropdown-select-list'
import React, { useEffect, useState } from "react";

export default function Dropdown() {
  const [selected, setSelected] = useState("");
  const data = [
      {key:'1', value:'Standard Shipping $7.00'},
      {key:'2', value:'Express Shipping $15.00'},
  ]
  return(
    <SelectList 
        placeholder="Select Shipping Method"
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        search={false}
        searchPlaceholder="Select Shipping Method"
    />
  )
};