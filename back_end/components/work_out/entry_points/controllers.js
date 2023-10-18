const workoutService = require('../domain/services');

// exports.getAllWorkouts = async (req, res) => {
//     try {
//         const workouts = await workoutService.getAll();
//         res.json(workouts);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

const createWorkout = async (req, res) => {
    try {
        // Validate input (optional, but recommended)
        if (!req.body.bodyPart || !req.body.workoutType) {
            return res.status(400).send("Required fields: bodyPart, workoutType");
        }else{
            console.log(req.body.bodyPart);
        }

        const newWorkout = {
            userID : req.body.userID,
            bodyPart: req.body.bodyPart,
            workoutType: req.body.workoutType,
            reps: req.body.reps,
            sets: req.body.sets,
            date: req.body.date
        };

        const result = await workoutService.create(newWorkout);
        res.status(201).json('work_out_controller_good');
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getWorkout = async (req, res) => {
    try {
        const data = await workoutService.get();
        const dataReturn = {
            userID: data.user_id,
            bodyPart: data.body_part,
            workoutType: data.exercise,
            reps: data.repetition,
            sets: data.set,
            date: data.date
        }
        res.status(201).send(dataReturn);
    } catch (error) {
        res.status(500).send("controller_layer_error");
    }
};

module.exports = {
    createWorkout, 
    getWorkout,
};
