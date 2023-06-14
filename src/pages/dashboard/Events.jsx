import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventTable from '../events/EventList';
// import { AiOutlinePlusCircle} from ''

const Events = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button
        className='w-36 my-4 ml-5'
        variant="gradient"
        fullWidth
        onClick={() => navigate("/dashboard/create-event")}
      >
        Create Event 
      </Button>
      <EventTable/>
    </div>
  );
}

export default Events