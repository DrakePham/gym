const dataAccess = require('../data_access/DataAccess')


const create = async (workoutData) => {
    // return dataAccess.createWorkout(workoutData);
    dataAccess.createWorkout(workoutData);
    // console.log(workoutData);
    console.log("workout_service_data");

};

const get = async () => {
    const data = dataAccess.getWorkout();
    return data;
}

module.exports = {
    create, 
    get
};