import {useState} from "react";
import localStorageService from "../services/localStorageService.js";
import ButtonDelete from "./buttonDelete.jsx";

function ButtonShow(){
    const [data, setData] = useState([]);
    const storage = localStorageService();

    const handleShow = () => {
        const result = storage.get("coordonnees");
        setData(result);

    };

    return (
        <div>
            <button onClick={handleShow}>Show</button>

            {data.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Lat, Long</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.titre}</td>
                            <td>{item.position}</td>
                            <td>
                                <ButtonDelete
                                index={index}
                                data={data}
                                setData={setData}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ButtonShow