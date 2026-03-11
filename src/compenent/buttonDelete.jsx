import localStorageService from "../services/localStorageService.js";

function ButtonDelete({index, setData}){
    const storage = localStorageService()

    const handleDelete = () => {
        const newTable = storage.removeOne("coordonnees", index)
        setData(newTable)
    };
    return (
        <button onClick={handleDelete}>
            Supprimer
        </button>
    );
}
export default ButtonDelete