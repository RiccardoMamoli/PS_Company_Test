import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
    return (
        <>
            <Container className="w-100">
                <Row>
                    <Col sm={12} className="p-0">
                        <div className="about-me-desc">
                            <p>
                                Sono un creativo con la testa tra le nuvole e i piedi ben saldi sulle idee geniali. Amo progettare soluzioni che lasciano il segno (e qualche sorriso). Curioso di saperne di più? Scopri il mio mondo!

                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMe;