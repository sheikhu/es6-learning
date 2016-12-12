
export class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    prepare() {
        this.tasks.forEach( (task) => {
            console.log('Describe task ...');
        });
    }
}
