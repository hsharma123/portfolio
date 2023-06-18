import React from 'react'
import { Card,Button } from 'react-bootstrap'

const projectcard = (props) => {
  return (
    <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }} className='about-me-detail'>
                {props.description}
                </Card.Text>
                <Button className="view-btn" variant="primary" href={props.ghLink} target="_blank">
                View
                </Button>
                {"\n"}
                {"\n"}


                {!props.isBlog && props.demoLink && (
                <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                >

                    {"Demo"}
                </Button>
                )}
            </Card.Body>
        </Card>
  )
}

export default projectcard