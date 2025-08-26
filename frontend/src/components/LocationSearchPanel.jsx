import React from 'react'

function LocationSearchPanel(props) {

  // console.log(props)

// sample location array

const locations = [
  {
    id: 1,
    value: "A70, Abul fazal enclave part 1, new delhi, 110025, india"
  },
  {
    id: 2,
    value: "b45, batla house, new delhi, 110025, india"
  },
  {
    id: 3,
    value: "g5, shaheen bagh, new delhi, 110025, india"
  },
  {
    id: 4,
    value: "A50, okhla, new delhi, 110025, india"
  }
]




  return (
    <div className='w-full px-6 space-y-4'>


      {
        locations.map(({id, value}) => {
          return <div key={id} onClick={()=> {
            props.setvehiclePanel(true)
            props.setisPanelOpen(false)
            }} className='flex items-center  w-full gap-6 bg-gray-100 border-gray-200 border-2 rounded-xl p-3 active:border-black '>
                    <p>
                      <i className="ri-map-pin-2-fill"></i>
                    </p>
                    <p className='font-medium'>
                      {value}
                    </p>
                  </div>
        })
      }

      

      


    </div>
  )
}

export default LocationSearchPanel