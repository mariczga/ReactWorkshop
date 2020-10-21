import {API_KEY, API_URL} from "./constants";

export const getOperations = async (id, successCallback) => {

    try {

        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {

            headers: {

                Authorization: API_KEY,

            },

        });


        const data = await response.json();


        if (data.error || typeof successCallback === 'function') {

            throw new Error('Błąd!');

        }


        successCallback(data.data);

    } catch (err) {

        console.log(err);

    }

};
export const addOperation= async (operation, onNewOperation) =>{
    try {

        const request = await fetch(`${API_URL}/tasks`, {
            method : 'POST',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
            },
            body : JSON.stringify(task)

        });


        const data = await request.json();
        onNewTask(data)







    } catch (err) {

        console.log(err);

    }

}