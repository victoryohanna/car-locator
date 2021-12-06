import React from 'react'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  
export default function Search(){
    return(
        <div className="search">
            <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            <ComboboxOption value="29, Asuma Street Maitama Abjua" />
            <ComboboxOption value="34, Tamale Street Wuse Zone 3 , Abuja" />
            <ComboboxOption value="22 Dan Sleiman Sreet Utako, Abuja" />
            <ComboboxOption value="15 Abijan Street Garki Area 11, Abuja" />
            <ComboboxOption value="68 Victor Close, Off Adebayo Road Jabi, Abuja" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
        </div>
    )
}