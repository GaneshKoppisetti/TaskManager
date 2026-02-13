import { useEffect } from 'react';
import api from '../API/api';
import { showLoader,hideLoader } from '../Shared/Loader';
const TodoTasks = () => {

    useEffect(() => {
        showLoader();
        const fetchTasks = async () => {
            try {
                const response = await api.get('/task/getAllTasks');
                console.log(response.data);
                hideLoader();
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }   
        };
        fetchTasks();
    }, []);
    return (
        <div>
            <h1>Todo Tasks</h1>
            </div>
    )
}   
export default TodoTasks;
