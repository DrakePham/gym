const dataAccess = require('../data_access/DataAccess')


const create = async (workoutData) => {
    // return dataAccess.createWorkout(workoutData);
    await dataAccess.createWorkout(workoutData);
    // console.log(workoutData);
    console.log("workout_service_data");

};

const get = async () => {
    const data = await dataAccess.getWorkout();
    return data;
}

const deleteWorkout = async (id) => {
    await dataAccess.deleteWorkout(id);
}

module.exports = {
    create, 
    get,
    deleteWorkout
};