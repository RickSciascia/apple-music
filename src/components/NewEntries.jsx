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
        setFetchResults(fetchData.data.slice(0, 10));
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
      <Row xs={3} md={5} lg={5}>
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
        {fetchResults.map((song, i) => {
          let classToInv = "min-h-100";
          if (i >= 6) {
            classToInv = "min-h-100 d-none d-md-block";
          }
          return (
            <Col xs={12 / 3} md={12 / 5} lg={12 / 5} className={classToInv}>
              <SongCard
                img={song.album.cover_big}
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
