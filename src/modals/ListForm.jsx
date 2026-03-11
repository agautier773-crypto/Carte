
import ButtonShow from "../compenent/buttonShow.jsx";

function ShowForm() {

    return (
        <>
            <div className="modal" tabIndex="-1" id="listForm">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Liste des marqueurs</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div>
                            <ButtonShow/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-close-footer">
                                    Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowForm