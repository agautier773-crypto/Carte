
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import AddForm from "./modals/AddForm.jsx";
import ListForm from "./modals/ListForm.jsx";
import {useEffect, useState} from "react";
import localStorageService from "./services/localStorageService.js";

function MapUpdater({markers}){
    const map = useMap()

    useEffect(() => {
        if(markers.length > 0){
            const last = markers[markers.length -1]
            const [lat, lng] = last.position.split(",").map(Number);
            map.setView([lat, lng], 13)
        }
    }, [markers]);
    return null;
}
function App() {
    const storage = localStorageService()
    const [markers, setMarkers] = useState(storage.get("coordonnees"))

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button data-bs-toggle="modal" data-bs-target="#addForm" className="btn btn-green">
                    Ajouter Marqueur</button>
                <AddForm setMarkers={setMarkers} />
                <button data-bs-toggle="modal" data-bs-target="#listForm" className="btn btn-yellow">
                    Show</button>
                <ListForm markers={markers} setMarkers={setMarkers} />
            </div>
            <MapContainer center={[43.8927, -0.5016]} zoom={13} scrollWheelZoom={true}
                          style={{height: "100vh", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapUpdater markers={markers} />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position.split(",").map(Number)}>
                        <Popup>{marker.titre}</Popup>
                    </Marker>
                    ))}
            </MapContainer>
        </>
    )
}

export default App
