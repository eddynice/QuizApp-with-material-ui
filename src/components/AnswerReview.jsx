import { Paper, Typography, Button,  } from '@material-ui/core';
import { Check, Close,} from '@material-ui/icons';
import React from 'react'
import  { createMarkup} from  "../helpers";


function AnswerReview({processAnswers, classes, resetQuiz}) {
    const renderAnswers = (answer)=>{
        return answer.map((
            {question, isCorrect, correctAnswer, wrongAnswer}
        )=>(
            <Paper key={question} className={classes.paper}>
                <Typography variant="h2" className={classes.question}>
                <span dangerouslySetInnerHTML={ createMarkup(question)}/>

                </Typography>

                {isCorrect? (
                    <Typography variant="h2" className={`${classes.answer}
                    ${classes.isCorrect}`}>
                        <Check/>
                        <span className={classes.answer} dangerouslySetInnerHTML={ createMarkup(correctAnswer)}/>

                    </Typography>
                ):(
                    <>
                    <Typography variant="h3" color="secondary" className={classes.answer}>
                        <Close/>
                        <span className={classes.answer} dangerouslySetInnerHTML={ createMarkup(wrongAnswer)}/>


                    </Typography>
                    </>

                )}
                
            </Paper>
        ))
    }
    return (
        <>
        <Typography variant="h1" className={classes.mainTitle}>
            Answers Review
        </Typography>
        {renderAnswers(processAnswers)}
        <Button className={classes.submitButton} onClick={resetQuiz} variant="contained" color="primary">
            Reset
        </Button>
        </>
    )
}

export default AnswerReview


