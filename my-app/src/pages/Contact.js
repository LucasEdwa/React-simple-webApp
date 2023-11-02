import { Header } from "../componentes/Header";

function Contact() {
    return (
        <>
            <Header title='Contact' />
            <div className="flex flex-col gap-8 text-white p-10 m-16">
                <h1 className="text-4xl font-semibold">Contact Me</h1>
                <p>
                    I'm always open to discuss your projects, ideas, or proposals. Feel free to get in touch with me.
                </p>
                <p>
                    <strong>Email:</strong> your-email@example.com
                </p>
                <p>
                    <strong>Phone:</strong> 123-456-7890
                </p>
                <p>
                    <strong>Address:</strong> 1234 Gatan, Sweden, Stockholm 12345
                </p>
                
            </div>
            
        </>
    );
}

export { Contact };