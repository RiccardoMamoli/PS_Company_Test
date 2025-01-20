import { Col, Container, Row } from "react-bootstrap";
import imgSpotify from "../assets/spotify.png"
import imgNetflix from "../assets/netflixHd.png"
import imgLinkedin from "../assets/linkedin.webp";

const LavoriPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgSpotify} alt="imgSpotify" />
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgNetflix} alt="imgNetflix" />
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgLinkedin} alt="imgLinkedin" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgSpotify} alt="imgSpotify" />
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgNetflix} alt="imgNetflix" />
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="p-1">
                        <div className="img-work">
                            <img src={imgLinkedin} alt="imgLinkedin" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LavoriPage;