import axios from 'axios';
import type {AxiosResponse} from "axios"

interface Todo {
    UserId: number;
    id: number;
    title: string;
    completed: boolean;
}

// axios.get('https://example.com/data')
// .then(response  => {
//     console.log(response.data);
// })

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios
        .get(
            "https://jsonplaceholder.typicode.com/todos/1"
        )
        console.log("Todo", response.data);
        
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
                
            }
        }
        
    }
}
