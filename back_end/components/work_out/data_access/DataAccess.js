const pool = require("./DataBaseConnection");

const createWorkout = async ({bodyPart, date, reps, sets, userID, workoutType}) => {
  const workoutData = [userID, bodyPart, workoutType, sets, reps, date];
  console.log(workoutData);
  console.log("data_access");

  await pool.query('INSERT INTO "gym" ("user_id", "body_part", "exercise", "set", "repetition", "date" ) VALUES ($1, $2, $3, $4, $5, $6)', workoutData);
  // return {
  //     id: result.insertId,
  //     ...workoutData
  // };
};

const getWorkout = async () => {
  // const dataWorkout = {
  //     "bodyPart": "hieu+long",
  //     "workoutType": "babe",
  //     "reps": "2",
  //     "sets": "5"
  // }

  const data = await pool.query("select * from gym");
  const dataWorkout = data.rows[0];
  return dataWorkout;
};

module.exports = {
  createWorkout,
  getWorkout,
};
