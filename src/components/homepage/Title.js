import './Title.css';

export default function Title() {
    return (
        <main className="Title">
            <div className="title-box">
                <p className="intro">
                    <span className="name">Selina Fu</span> is a{" "}
                    <span className="highlight product">Software Developer</span>{" "}
                    and <span className="highlight curious">curious</span> thinker.
                </p>
            </div>
        </main>
    );
}