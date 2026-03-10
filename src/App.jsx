import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'leaflet/dist/leaflet.css'
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet'


import { useMap } from 'react-leaflet/hooks'

function Modal() {
    return null;
}

function App() {


    return (
    <>
        <MapContainer center={[43.8927, -0.5016]} zoom={13} scrollWheelZoom={true} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.89716917959462, -0.4921755893548321]}>
                <Popup>
                    AFPA Bosquet <br />
                </Popup>
            </Marker>
            <Marker position={[43.89140149634099, -0.5049794385887146]}>
                <Popup>
                    AFPA Candau
                </Popup>
            </Marker>
        </MapContainer>
    </>
  )
}

export default App
