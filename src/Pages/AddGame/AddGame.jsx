import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";

function AddGame() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [input, setInput] = useState({
    picture: "",
    Name: "",
    developers: "",
    year: "",
  });

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:3000/games");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = async () => {
    if (editId === null) {
      const response = await fetch(`http://localhost:3000/games`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      fetchGames();
    } else {
      const response = await fetch(`http://localhost:3000/games/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      setEditId(null);

      if (response.ok) {
        fetchGames();
      } else {
        console.error("Something went wrong");
      }
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setInput(data[index]);
    setEditId(data[index].id);
    handleShow();
  };

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchGames();
    } else {
      console.error("Something went wrong");
    }
  }

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
        }}
      >
        <div>
          <Button
            variant="primary"
            onClick={handleShow}
            className="mx-auto d-block mb-5"
            style={{ fontSize: "20px", padding: "10px 20px" }}
          >
            Add Game
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{editId ? "Save" : "Add game"}</Modal.Title>
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={input.Name}
                  onChange={(e) => setInput({ ...input, Name: e.target.value })}
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
                {editId ? "Save" : "Add game"}
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Picture</th>
                <th>Name</th>
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
                  <td>{item.Name}</td>
                  <td>{item.developers}</td>
                  <td>{item.year}</td>
                  <td>
                    <Button variant="success" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
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
