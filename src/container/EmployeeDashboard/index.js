import React from "react";
import {Row, Col} from "reactstrap";
import { data } from "../../data";

const EmployeeDashboard = () => {
    return(
        <Row className="m-0 my-4">
            <Col sm="12 my-2">
                <h1>Dashboard</h1>
                <table class="table table-striped mt-4">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.user.map((item, index) => {
                            return (
                                <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Col>
        </Row>
    )
}

export default EmployeeDashboard;