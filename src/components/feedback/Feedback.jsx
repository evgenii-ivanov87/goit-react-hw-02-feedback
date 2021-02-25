import { useState } from 'react'

const Feedback = () => {
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
       
    const handleNeutral = () => {setNeutral(neutral + 1) };
    const handleGood = () => {setGood(good + 1)};
    const handleBad = () => {setBad(bad + 1) };
    const countTotalFeedback = () =>  good + neutral + bad;
    const countPositiveFeedbackPercentage = () =>
    Math.round((good+neutral)*100/countTotalFeedback()) ;
        
    return (
        <section className="">
            <h2 className="">Please leave feedback</h2>
            <ul className="">
                <button className="" onClick={handleGood}>Good</button>
                <button  className="" onClick={handleNeutral}>Neutral</button>
                <button  className="" onClick={handleBad}>Bad</button>
            </ul>
            <h2 className="" >No feedback given</h2>
            <h2 className="" >Statistics</h2>
            <ul className="">
                <li className="">Good:{good}</li>
                <li className="">Neutral:{neutral}</li>
                <li className="">Bad:{bad}</li>
                <li className="">Total:{countTotalFeedback()}</li>
                <li className="">Positive feedback: {countPositiveFeedbackPercentage()}%</li>
            </ul>
        </section>)     
}

export default Feedback;