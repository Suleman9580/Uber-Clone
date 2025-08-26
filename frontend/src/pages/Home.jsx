import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehicleOptionsPanel from '../components/VehicleOptionsPanel'
import ConfirmRide from '../components/ConfirmRide'





function Home() {

  const [pickup, setpickup] = useState("")
  const [destination, setdestination] = useState("")
  const [isPanelOpen, setisPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const [vehiclePanel, setvehiclePanel] = useState(false)
  const [confirmRidePanel, setconfirmRidePanel] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }


  useGSAP(()=>{
    if(isPanelOpen){
      gsap.to(panelRef.current, {
        height: '70%'
      })
    }else{
      gsap.to(panelRef.current, {
        height: "0%"
      })
    }
  }, [isPanelOpen])


  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])


  return (
    <div className='relative h-screen overflow-hidden'>
      <h1 className='absolute font-semibold text-3xl text-black top-4 left-4'> Uber</h1>
      
      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/t6hu7P1krh_masy6uz5V5XFHcazKNx-qp6kfVJj5LOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLXN1Ym9wdGlt/YWwuanBn" alt="map.jpeg" />
      </div>

      <div className='absolute top-0 w-full h-screen flex flex-col justify-end'>
        <div className='h-[30%] bg-white p-5'>

          
          <i onClick={()=>{setisPanelOpen(false)}} class="bg-zinc-300  rounded-full p-2 ri-arrow-down-wide-fill"></i>

          <h4 className='text-2xl font-semibold mb-2'>Find Trip</h4>

        <form onSubmit={(e) => {submitHandler(e)}}>
          <input 
            onClick={()=>{setisPanelOpen(true)}}
            value={pickup}
            onChange={(e)=>{
              setpickup(e.target.value)
            }}
            className='rounded-lg bg-[#eee] px-6 py-2 text-base w-full mb-2' 
            type="text"
            placeholder='Add a pickup location' />

          <input 
            onClick={()=>{setisPanelOpen(true)}}
            value={destination}
              onChange={(e)=>{
                setdestination(e.target.value)
              }}
            className='rounded-lg bg-[#eee] px-6 py-2 text-base w-full' 
            type="text" 
            placeholder='Enter your destination' />
          
        </form>
        </div>
        <div ref={panelRef} className='h-[70%] w-full bg-white'>
              <LocationSearchPanel setvehiclePanel={setvehiclePanel} setisPanelOpen={setisPanelOpen} />
        </div>
      </div>


      <div ref={vehiclePanelRef} className=' fixed z-10 bottom-0 p-3 bg-white w-full space-y-2 translate-y-full'>
        <VehicleOptionsPanel setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel}/>


      </div>


      <div ref={confirmRidePanelRef} className=' fixed z-10 bottom-0 p-3 bg-white w-full space-y-2 translate-y-full'>
         
        <ConfirmRide />

      </div>


    </div>
  )
}

export default Home