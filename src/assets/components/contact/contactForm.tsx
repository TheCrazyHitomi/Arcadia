import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContactForm: React.FC = () => {
    const [nom, setNom] = useState<string>('');
    const [prenom, setPrenom] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [objet, setObjet] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(nom, prenom, email, objet, message);
    };

    return (
        <div className='contactForm'>
            <div className='contactText'>
                <h2>Contactez-nous <br />pour plus d'informations</h2>
            </div>

            <Form className='form' onSubmit={handleSubmit}>
                <Col className='formContent'>
                    <Row>
                        <Col>
                            <Form.Label className='formLabel' htmlFor="nom">Nom</Form.Label>
                            <Form.Control
                                type="text"
                                id="nom"
                                name="nom"
                                value={nom}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Label className='formLabel' htmlFor="prenom">Prénom</Form.Label>
                            <Form.Control
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={prenom}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPrenom(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label className='formLabel' htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Label className='formLabel' htmlFor="objet">Objet</Form.Label>
                            <Form.Control
                                type="text"
                                id="objet"
                                name="objet"
                                value={objet}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setObjet(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Col>
                        <Form.Label className='formLabel' htmlFor="message">Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        />
                    </Col>
                </Col>
                <Button className='submitButton' variant="primary2" type="submit">Envoyer</Button>
            </Form>
        </div>
    );
}

export default ContactForm;
