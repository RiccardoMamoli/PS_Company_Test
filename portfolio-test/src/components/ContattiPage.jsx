import { Col, Container, Row } from "react-bootstrap";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContattiPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="contatti-section">
                            <p> Vuoi lavorare con me? <span style={{ fontWeight: "500" }}> Contattami!</span></p>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col sm={12} className="d-flex align-items-center">
                        <div className="email-icon">
                            <CiMail />
                        </div>
                        <div className="ps-3">
                            <p> riccardomamoli2@gmail.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col sm={12} className="d-flex align-items-center">
                        <div className="phone-icon">
                            <FaPhone />
                        </div>
                        <div className="ps-3">
                            <p> +39 347056772</p>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3">
                    <Col sm={12} className="d-flex align-items-center">
                        <div className="git-icon">
                            <FaGithub />
                        </div>
                        <div className="ps-3">
                            <p> https://github.com/RiccardoMamoli</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContattiPage;