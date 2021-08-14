import self from '../../assets/images/self.jpg';
import Image from 'react-bootstrap/Image'
import MediaQuery from 'react-responsive'
import '../../style.css';

const styles = {
    self: {
        height: "600px",
        width: "450px"
    },
};

function Home() {
    return (
            <container className='wrap'>
                <picture>
                    <div>
                        <img src={self} alt="Joel Cunningham" style={styles.self} />
                        <h2>Joel Cunningham</h2>
                    </div>
                </picture>
                <div >
                    <h2>About Me</h2>
                    <p>Full-stack Web Developer with a desire for working with React. Recently acquired Full Stack Web Development Certificate from SMU. Skills in HTML, JavaScript, Node and React, strengths in maintaining open communication with team members, creating functional applications, and meeting deadlines. With each project, I strive to create the best experience for users demanding of myself to always put forth the best possible product I can. Worked in a group to create a MERN app that allows users to create meal plans and create a list of needed ingredients.</p>
                </div>
            </container>
    )
}

export default Home