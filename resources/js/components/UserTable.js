import React, {Component} from 'react';
import {Button, Form, Jumbotron, Modal, Table} from "react-bootstrap";
import axios from "axios";

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            visible: false,
            currentId: ""
        }
    }

    componentDidMount() {
        return axios.get(`http://localhost:8000/api/users`)
            .then(response => {
                this.setState({
                    users: response.data,
                    user: {
                        username: "",
                        email: ""
                    }
                })
            });
    }

    render() {
        const {users} = this.state;
        const handleClose = () => {
            this.setState({visible: false})
        };

        const handleShow = () => {
            this.setState({visible: true});
        };

        const deleteUser = (id) => {
            return axios.delete(`http://localhost:8000/api/users/${id}`)
        };

        const onSubmit = (e) => {
            e.preventDefault();
            console.log(e.target.value);
            this.setState({
                username: e.target.value
            })
        };

        const myChangeHandler = (event) => {
            console.log(event.target.value);
        };
        return (
            <>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                <Button onClick={handleShow}>Create</Button>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Emails</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(item => (
                        <tr key={item.id}>
                            <td>1</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button className="btn btn-primary btn-sm mr-1"
                                        onClick={handleShow}>Edit</Button>
                                <Button className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

                <Modal show={this.state.visible} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={onSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" onChange={myChangeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" onChange={myChangeHandler}/>
                            </Form.Group>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default UserTable;
