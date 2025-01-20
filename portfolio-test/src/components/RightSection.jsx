import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContattiPage from "./ContattiPage";
import LavoriPage from "./LavoriPage";

const RightSection = () => {
    return (
        <>
            <Container className="h-100">
                <Row className="h-100">
                    <BrowserRouter>
                        <Col sm={12} className="d-flex flex-column">
                            <div>
                                <CustomNavbar />
                            </div>
                            <div className="flex-grow-1 d-flex align-items-center">
                                <Routes>
                                    <Route path="/aboutme" element={<AboutMe />} />
                                    <Route path="/lavori" element={<LavoriPage />} />
                                    <Route path="/contatti" element={<ContattiPage />} />
                                </Routes>
                            </div>
                        </Col>
                    </BrowserRouter>
                </Row>
            </Container>
        </>
    )
}

export default RightSection;