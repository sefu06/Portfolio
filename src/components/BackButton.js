import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/", { state: { scrollTo: "projects" } });
    };

    return (
        <button
            onClick={goToProjects}
            style={{
                margin: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#354F52",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            ← Back to Projects
        </button>
    );
}
