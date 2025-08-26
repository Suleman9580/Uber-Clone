import React from 'react'

function VehicleOptionsPanel(props) {
    return (
        <div className='space-y-2'>
            <i onClick={() => { props.setvehiclePanel(false) }} class="bg-zinc-300 rounded-full p-2 ri-arrow-down-wide-fill"></i>
            <p className='font-medium text-xl'>Choose a vehicle</p>


            <div 
            onClick={()=>{ props.setconfirmRidePanel(true)}}
            className='flex w-full items-center justify-between p-3 active:border-black active:border-2  bg-gray-100 rounded-xl'>
                <img className='h-12 ' src="https://imgs.search.brave.com/pIXF96-Qpi6MPNYP2t0QzOl1LJXeAg2h727GvfpjOf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTQ2LzE1MS9zbWFs/bC93aGl0ZS1tb2Rl/cm4tY2FyLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtM2QtcmVu/ZGVyaW5nLWlsbHVz/dHJhdGlvbi1mcmVl/LXBuZy5wbmc" alt="" />

                <div 
                
                    onClick={()=>{ props.setconfirmRidePanel(true)}}className='ml-6'>
                    <p className='text-md font-medium'>UberGo <span><i className="ri-user-3-fill"></i>4</span></p>
                    <p className='text-md font-medium'>2 mins away</p>
                    <p className='text-sm text-black/[54%]'>Affordable, compact rides</p>
                </div>
                <p className='text-md font-medium' >₹190</p>
            </div>

            <div 
                
                onClick={()=>{ props.setconfirmRidePanel(true)}}
                className='flex w-full items-center justify-between p-3 active:border-black active:border-2  bg-gray-100 rounded-xl'>
                    <img className=' h-10' src="https://imgs.search.brave.com/NPnjha4FsZZJeVCH6RoCCnI1wZvuo0TXrKkAjP-nASo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDky/MzEwOTEvYXNzZXRz/LzJjLzdmYTE5NC1j/OTU0LTQ5YjItOWM2/ZC1hM2I4NjAxMzcw/ZjUvb3JpZ2luYWwv/VWJlcl9Nb3RvX09y/YW5nZV8zMTJ4MjA4/X3BpeGVsc19Nb2Jp/bGUucG5n" alt="" />

                    <div className=''>
                    <p className='text-md font-medium'>Moto <span><i className="ri-user-3-fill"></i>1</span></p>
                    <p className='text-md font-medium'>2 mins away</p>
                    <p className='text-sm text-black/[54%]'>Affordable, bike rides</p>
                </div>
                <p className='text-md font-medium' >₹80</p>
            </div>

            <div 
                
                onClick={()=>{ props.setconfirmRidePanel(true)}}
                className='flex w-full items-center justify-between p-3 active:border-black active:border-2  bg-gray-100 rounded-xl'>
                    <img className='h-12 ' src="https://imgs.search.brave.com/jcjGTE3ubTenAAJW98X63v2QVccBbMreXM80GkONzGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/MTc1LzMxMy9zbWFs/bC90aGFpbGFuZC1j/YXItaXNvbGF0ZWQt/b24tYmFja2dyb3Vu/ZC0zZC1yZW5kZXJp/bmctaWxsdXN0cmF0/aW9uLWZyZWUtcG5n/LnBuZw" alt="" />

                <div className=''>
                    <p className='text-md font-medium'>UberGo <span><i className="ri-user-3-fill"></i>4</span></p>
                    <p className='text-md font-medium'>2 mins away</p>
                    <p className='text-sm text-black/[54%]'>Affordable, auto rides</p>
                </div>
                <p className='text-md font-medium' >₹119</p>
            </div>

        </div>
    )
}

export default VehicleOptionsPanel