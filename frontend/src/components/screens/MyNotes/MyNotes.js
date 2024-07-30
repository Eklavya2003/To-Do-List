import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import notes from "../../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      console.log(`Deleting note with id: ${id}`);
    }
  };

  return (
    <MainScreen title="Welcome back, Eklavya Gupta...">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      <Accordion>
        {notes.map((note) => (
          <Card key={note.id} style={{ margin: 10 }}>
            <Card.Header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header eventKey="0">{note.title}</Accordion.Header>
              </span>
              <div>
                <Link to={`/note/${note.id}`}>
                  <Button>Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On: {note.createdDate || "N/A"}
                    <cite title="Source Title">
                      {" "}
                      {note.source || "Unknown"}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
