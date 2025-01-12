import useTheme from '@/app/Context/theme'
import React from 'react'

const Themebtn = () => {
  const {themeMode ,darkTheme ,lightTheme} = useTheme()
    const onchangeBtn =()=>{
      const darkModeStatus = e.currentTarget.checked
        if(themeMode=='dark'){
          lightTheme();
        } else{
          darkTheme();
        }

    }
  return (
    <>
     <div class="form-check form-switch fs-3 py-4" style={{background:"red",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={onchangeBtn}
            checked={themeMode=='dark'}
          />
        </div>
    </>
  )
}

export default Themebtn
