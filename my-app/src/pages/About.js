import { Header } from "../componentes/Header";

function About() {
    return (
        <>
            <Header title='About' />
            <div className="p-10 text-white">
               <div className='flex flex-col gap-4 m-16'>
                    <h1 className="text-4xl font-semibold">About Me</h1>
                    <p>
                        Hello! I'm a student currently starting my career in web development. I have a passion for creating 
                        interactive and powerful websites. I'm always eager to learn more and improve my skills.
                    </p>
                    <p>
                        I believe in the power of the web to provide amazing user experiences and strive to build applications 
                        that are enjoyable and intuitive for users to interact with.
                    </p>
                    <p>
                        If you have any questions or would like to discuss a project, please feel free to contact me.
                    </p>
                </div>
            </div>
        </>
    );
}

export { About };