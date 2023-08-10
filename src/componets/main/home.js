import React from'react'
import { Button, Form } from 'react-bootstrap'

export const Home = () => {
    const handleChange=(e)=>{
        console.log("Handle Change");
    }
  return (
    <div className='container'>
        <h3>TimeSheet!</h3>
        <Form>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' name='date' onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Select Module</Form.Label>
                <Form.Select >
                        <option value="">Select An Option!</option>
                        <option value="option1">option1</option>
                        <option value="option1">option1</option>
                        <option value="option1">option1</option>
                        <option value="option1">option1</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Type Of Work</Form.Label>
                    <Form.Select >
                            <option value="">Select An Option!</option>
                            <option value="option1">option1</option>
                            <option value="option1">option1</option>
                            <option value="option1">option1</option>
                            <option value="option1">option1</option>
                    </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Number of Hours</Form.Label>
                <Form.Control type='number' name='hour' />
            </Form.Group>
            <Button type='submit' variant='primary'>Submit</Button>
        </Form>
    </div>
    
  )
}
