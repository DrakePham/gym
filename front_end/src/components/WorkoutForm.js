import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkoutForm() {
    const [formData, setFormData] = useState({
        userID: '21',
        bodyPart: '',
        workoutType: '',
        reps: '',
        sets: '',
        date: ''
    });

    useEffect(() => {
        // Fetch data from the backend using Axios
        axios.get('http://localhost:3003/workout/workoutGet')
            .then(response => {
                console.log(response.data);
                setFormData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data:", error);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <div>
                    <label>Body Part:</label>
                    <input 
                        type="text" 
                        name="bodyPart" 
                        value={formData.bodyPart} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Workout Type:</label>
                    <input 
                        type="text" 
                        name="workoutType" 
                        value={formData.workoutType} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Reps:</label>
                    <input 
                        type="text" 
                        name="reps" 
                        value={formData.reps} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Sets:</label>
                    <input 
                        type="text" 
                        name="sets" 
                        value={formData.sets} 
                        onChange={handleChange} 
                    />
                </div>
                {/* Add any additional fields or a submit button if needed */}
            </form>
        </div>
    );
}

export default WorkoutForm;
