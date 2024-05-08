import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";

function AddGame() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [input, setInput] = useState({
    picture: "",
    description: "",
    developers: "",
    year: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (editIndex === null) {
      setData([...data, input]);
    } else {
      const newData = [...data];
      newData[editIndex] = input;
      setData(newData);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setInput(data[index]);
    setEditIndex(index);
    handleShow();
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      <div className="text-center mb-5" style={{ paddingTop: "50px" }}>
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">SHARE YOUR GAME </span>
        </h1>
        <p>Please press the "Add Game" button to share your game with us.</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          //   height: "100vh",
        }}
      >
        <div>
          <Button
            variant="primary"
            onClick={handleShow}
            className="mx-auto d-block mb-5" // centers the button
            style={{ fontSize: "20px", padding: "10px 20px" }} // makes the button bigger
          >
            Add Game
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Picture URL</Form.Label>
                <Form.Control
                  type="text"
                  value={input.picture}
                  onChange={(e) =>
                    setInput({ ...input, picture: e.target.value })
                  }
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={input.description}
                  onChange={(e) =>
                    setInput({ ...input, description: e.target.value })
                  }
                />
                <Form.Label>Developers</Form.Label>
                <Form.Control
                  type="text"
                  value={input.developers}
                  onChange={(e) =>
                    setInput({ ...input, developers: e.target.value })
                  }
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={input.year}
                  onChange={(e) => setInput({ ...input, year: e.target.value })}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Add Game
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Description</th>
                <th>Developers</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.picture}
                      alt="Game"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.description}</td>
                  <td>{item.developers}</td>
                  <td>{item.year}</td>
                  <td>
                    <Button variant="success" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className=" d-inline">Game library</span>
                </h2>
                <p className="lead fw-light mb-4">
                  Share Your Experience With Others..
                </p>
                <p className="text-muted">
                  By sharing your gaming experiences with others, you not only
                  contribute to the gaming community but also enrich your own
                  journey by connecting with fellow gamers and discovering new
                  ways to appreciate the games you love.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-center flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Copyright &copy; LISTME 2024</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AddGame;
