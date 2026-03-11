import {useState} from "react";
import localStorageService from "../services/localStorageService.js";
import "../App.css"

function ButtonAdd() {
    const storage = localStorageService()
    const [titre, setTitre] = useState("");
    const [position, setPosition] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {titre, position}
        //console.log(formData)
        storage.save("coordonnees", formData);
        setMarkers(storage.get("coordonnees"))
        //console.log(storage.get("coordonnees"))

    }
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 p-3">
            <label className="form-label fw-bold">Nom du marqueur</label>
            <input
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Titre"
                className="form-control"
            />
            <label className="form-label fw-bold">Coordonnées GPS </label>
            <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="latitude, longitude"
                className="form-control"
            />
            <button type="submit" className="btn btn-green"> Ajouter Marqueur </button>
        </form>
    );
}
export default ButtonAdd
