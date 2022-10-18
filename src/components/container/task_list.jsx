import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//importamos la hoja de estilo de task.scss
 import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask= new Task('Example', 'Default description' , false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...')

        };
    }, []);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
