
export function About() {
    return <section className="about main-layout flex column justify-center align-center">
        <h2>About Us</h2>
        <p>Our company aims to give you a good and enjoyable user experience while paying attention to the small details.</p>
        <p>Our app includes everything you need: communicate with friends, write reminders and notes and buy books.</p>
        <p>
            Our developers:
        </p>
        <div className="team-members flex justify-center">
            <div className="team-member flex column justify-center align-center">
                <h3>Tal Elmaliach Hemo</h3>
                <p>App Developer</p>
                <img src='../assets/img/tal.jpg' />
            </div>
            <div className="team-member flex column justify-center align-center">
                <h3>Efrat Schwarz Kahana</h3>
                <p>App Developer</p>
                <img src='../assets/img/efrat.jpg' />
            </div>
        </div>
    </section>
}
