import React, { useEffect, useState } from 'react';
import {ActivitiesService} from '../services/activities.service';
import './styles/Activities.css'; 

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<any[]>([]);

  const activitiesService = new ActivitiesService();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await activitiesService.getActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    fetchActivities();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await activitiesService.deleteActivities(id);
      setActivities(activities.filter(activity => activity.id !== id));
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  return (
<div className='container_div' >
      <h2 className='header'>Activities</h2>
      <div className="card-container">
        {activities.map(activity => (
          <div key={activity.id} className="card">
            <h3>{activity.title}</h3>
            <p>Due Date: {new Date(activity.dueDate).toLocaleString()}</p>
            <h4>Status: {activity.completed ? 'Completed' : 'Not Completed'}</h4>
            <button onClick={() => handleDelete(activity.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
