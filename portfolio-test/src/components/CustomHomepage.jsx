import { Col, Container, Row } from "react-bootstrap";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const CustomHomepage = () => {
    return (
        <>
            <Container fluid className="m-0 p-0">
                <Row className="vh-100">
                    <Col sm={4} className="p-0 left-section">
                        <LeftSection />
                    </Col>
                    <Col sm={8} className="p-2 right-section">
                        <RightSection />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomHomepage;