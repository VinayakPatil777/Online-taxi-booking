import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/Link'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [ PickupCoordinates, setPickupCoordinates ] = useState([0, 0])
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidmluYXlhay03NzciLCJhIjoiY2t3dnV5bGFnMW14MzJwbHNjNmFueGdxdyJ9.3YOl05EDm6KI0jCjqebpPQ",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
        
        setPickupCoordinates(data.features[0].center);
            
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoidmluYXlhay03NzciLCJhIjoiY2t3dnV5bGFnMW14MzJwbHNjNmFueGdxdyJ9.3YOl05EDm6KI0jCjqebpPQ",
                limit: 1
            })
        )   
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(()=> {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/search">
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </Link>
        </ButtonContainer>
       <Map 
       pickupCoordinates={PickupCoordinates}
       dropoffCoordinates={dropoffCoordinates}
       />
       <RideContainer>
         <RideSelector  pickupCoordinates={PickupCoordinates}
       dropoffCoordinates={dropoffCoordinates}/>
         
         <ConfirmButtonContainer>
             <ConfirmButton>
             Confirm DragonX
             </ConfirmButton>
         </ConfirmButtonContainer>
       </RideContainer>
    </Wrapper>
  )
}



export default Confirm

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl hover:scale-95 rounded-full
`
const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
flex h-screen flex-col
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shodow-md cursor-pointer hover:scale-95
`
const BackButton = tw.img`
h-[2.5rem] object-contain 
`