import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import SongCard from "./SongCard";

const NewEntries = () => {
  const [fetchResults, setFetchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=linkinpark";
  const getSongs = function () {
    fetch(endpoint)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Errore nella response " + r.status);
        }
      })
      .then((fetchData) => {
        console.log(fetchData.data);
        setFetchResults(fetchData.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Errore", err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <Container fluid>
      <h4 className="mt-3 fw-bold text-white">Nuove uscite &gt;</h4>
      <Row>
        {/* qui devo fare map */}
        {loading && (
          <div className="text-center text-danger">
            <Spinner animation="border" variant="danger"></Spinner>
            <p>Loading</p>
          </div>
        )}
        {error && (
          <Container fluid>
            <p className="text-white text-center">
              Errore nel caricamento delle canzoni!
            </p>
          </Container>
        )}
        {fetchResults.map((song) => {
          return (
            <Col xs={4} md={2} className="min-h-100">
              <SongCard
                img={song.album.cover}
                title={song.title}
                artist={song.artist.name}
                key={song.id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default NewEntries;
