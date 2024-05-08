import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Top3Edit() {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  async function handleEdit(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/top3/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (response.ok) {
      navigate("/Top3");
    } else {
      console.error("Something went wrong");
    }
  }

  useEffect(() => {
    const fetchTop3 = async () => {
      try {
        const response = await fetch(`http://localhost:3000/top3/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTop3();
  }, []);

  return (
    <div className="container">
      <form className="formedit my-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={isLoading}
          onClick={handleEdit}
        >
          SAVE
        </button>
      </form>
    </div>
  );
}

export default Top3Edit;
