import App from "../App.jsx";
import {useState} from "react";
import localStorageService from "../services/localStorageService.js";
import buttonAdd from "../compenent/buttonAdd.jsx";
import ButtonAdd from "../compenent/buttonAdd.jsx";

function AddForm({setMarkers}){

    return (
        <>
            <div className="modal" tabIndex="-1" id="addForm">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold text-uppercase">Ajouter un marqueur</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ButtonAdd setMarkers = {setMarkers}/>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn"
                                data-bs-dismiss="modal"
                                style={{ backgroundColor: "#6c757d", color: "white", borderRadius: "6px", fontWeight: "500" }}>
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddForm
