import {API_KEY, API_URL} from "./constants";

export const getTasks = async (successCallback) => {

    try {

        const response = await fetch(`${API_URL}/tasks`, {

            headers: {

                Authorization: API_KEY,
            },

        });


        const data = await response.json();



        if (data.error || typeof successCallback !== 'function') {

            throw new Error('Błąd!');

        }


        successCallback(data.data);


    } catch (err) {

        console.log(err);

    }

};

export const addTask= async (task, successCallback) =>{
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
        if (data.error || typeof successCallback !== 'function') {

            throw new Error('Błąd!');

        }

        successCallback(data)







    } catch (err) {

        console.log(err);

    }

}
export const deleteTask= async (id, successCallback) => {
    try {

        console.log(id)
        const request = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
            }


        });


        const data = await request.json();

        if (data.error || typeof successCallback !== 'function') {

            throw new Error('Błąd!');

        }


        successCallback(id);




    } catch (err) {

        console.log(err);

    }
}

export const finishTask= async (task, successCallback) => {
console.log(task)
    task.status = "closed"
    try {


        const request = await fetch(`${API_URL}/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
            body : JSON.stringify(task)

        });


        const data = await request.json();

        if (data.error || typeof successCallback !== 'function') {

            throw new Error('Błąd!');

        }


        successCallback(task.id);





    } catch (err) {

        console.log(err);

    }
}