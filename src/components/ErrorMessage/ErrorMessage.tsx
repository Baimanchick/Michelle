import "../../styles/main.scss"

function ErrorMessage() {
    return (
        <div className="title-container ">
            <h1 className="error-title">
                Данный сайт не потдерживает экраны больше 900 px,
                пожалуйста уменьшите ваш экран, либо зайдите через мобильное устройство
            </h1>
        </div>
    )
}

export default ErrorMessage