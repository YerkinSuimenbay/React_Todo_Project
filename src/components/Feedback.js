import React,  { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const Feedback = () => {
    const {showFeedback, setShowFeedback, feedbackText} = useGlobalContext()
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowFeedback(false)
        }, 3000)   // HIDE FEEDBACK AFTER 3 seconds
        return () => {
            clearTimeout(timeout)
        }
    })

    return (
        <div className={showFeedback ? 'feedback show' : 'feedback'}>
            {feedbackText}
        </div>
    )
}

export default Feedback
