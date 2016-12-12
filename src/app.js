import { TaskCollection } from './TaskCollection';
import { Task } from './Task';
import { Person } from './Person';


console.log(new Person('Sheikhu').greet());

new TaskCollection([
    new Task, new Task 
]).prepare();
