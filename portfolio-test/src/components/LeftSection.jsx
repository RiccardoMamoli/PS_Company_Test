import { Col, Container, Row } from "react-bootstrap";

const LeftSection = () => {
    return (
        <>
            <Container className="h-100 background-black" style={{ position: "relative" }}>
                <Row className="d-flex align-items-center justify-content-center h-100" style={{background: "black"}}>
                    <Col className="d-flex align-items-center" style={{background: "white", height: "100%", borderTopRightRadius: "100%", borderBottomRightRadius: "100%"}}>
                        <div className="intro-section d-flex align-items-center justify-content-center">
                            <p className="p-0 m-0" style={{ fontWeight: "300" }}>
                                <span style={{ fontWeight: "600" }}> Ciao! </span> Sono <span className="name-intro"> Riccardo Mamoli</span>, Web Developer Junior di Reggio Emilia.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LeftSection;