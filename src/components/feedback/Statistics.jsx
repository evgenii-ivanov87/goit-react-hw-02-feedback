const Statistics = ({good,neutral,bad,total,percentage}) => {
    <ul className="">
                <li className="">Good:{good}</li>
                <li className="">Neutral:{neutral}</li>
                <li className="">Bad:{bad}</li>
                <li className="">Total:{total}</li>
                <li className="">Positive feedback: {percentage}%</li>
            </ul>

}

export default Statistics