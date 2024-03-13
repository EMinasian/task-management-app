import { FIRST_STAGE, LAST_STAGE } from "../utils/constants"

export default function Card({ task }) {
    const { name, description, stage } = task
    return (
        <div>
            <h3>{name}</h3>
            <span>{description}</span>
            <div>
                {stage !== LAST_STAGE && <button>Upgrade</button>}
                {stage !== FIRST_STAGE && <button>Downgrade</button>}
            </div>
        </div>
    )
}