import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import "../../styles/main.scss"

function ArrowLeft() {
    const navigate = useNavigate()
    return (
        <div className="back-main" onClick={() => navigate("/categories")}>
            <div className="back-container">
                <div className="back">
                    <ArrowLeftOutlined className='icon-back' />
                </div>
            </div>
        </div>
    )
}

export default ArrowLeft