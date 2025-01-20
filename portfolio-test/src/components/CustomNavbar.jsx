import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {

    const [selectedSection, setSelctedSection] = useState(0)
    const navigate = useNavigate();

    const handleClickAbout = () => {
        navigate("/aboutme")
        setSelctedSection(0)
    }

    const handleClickLavori = () => {
        navigate("/lavori")
        setSelctedSection(1)
    }

    const handleClickContatti = () => {
        navigate("/contatti")
        setSelctedSection(2)
    }


    return (
        <>
            <Container fluid>
                <Row className="d-flex align-items-center justify-content-end">
                    <Col sm={3} className="p-0">
                        <div className="d-flex align-items-center justify-content-between p-2">
                            <div>
                                <p className={selectedSection === 0 ? "active-button" : "not-active-button"} onClick={() => handleClickAbout(0)}>
                                    About
                                </p>
                            </div>
                            <div>
                                <p className={selectedSection === 1 ? "active-button" : "not-active-button"} onClick={() => handleClickLavori(1)}>
                                    Lavori
                                </p>
                            </div>
                            <div>
                                <p className={selectedSection === 2 ? "active-button" : "not-active-button"} onClick={() => handleClickContatti(2)}>
                                    Contatti
                                </p>
                            </div>
                        </div >
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomNavbar;