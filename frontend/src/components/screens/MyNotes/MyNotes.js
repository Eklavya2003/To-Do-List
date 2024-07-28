import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Button, Card } from "react-bootstrap"; // Import Button
import MainScreen from "../../MainScreen";
import notes from "../../../data/notes"; // Import notes

const MyNotes = () => {
  return (
    <MainScreen title="Welcome back, Eklavya Gupta...">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

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
              {note.title}
            </span>
            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
