//import classes from '*.module.css'
import { Button, Container, FormControl, 
    Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {styles, difficulties, createMarkup} from "../helpers"
import  {makeStyles} from "@material-ui/core/styles";
import QuizAnswers from "./QuizAnswers"


const useStyles = makeStyles((theme)=>{
    return styles;
})

export default function QuizCat() {
   const [catergories , setCatergories ]=useState([])
   const [catergory, setCatergory] = useState({id:"", name:""})
   const[ quizNumber, setQuiznumber] = useState(null);
   const [difficulty, setDifficulty] = useState({id:"", name:""});
   const [quizData , setQuizData] = useState([])
   const classes = useStyles();
   const [currentQuizStep, setCurrentQuizStep] = useState("start");



const fetchQuizData =async()=>{
    try{
        const url =("http://");

        const  {data} = await axios.get(url)


        const formatDatacat = data.results.map((cat)=>{
            const incorrectAnswerIndexes = cat.incorrect_answers.length;
            const randomIndex = Math.round(
                Math.rondom() * (incorrectAnswerIndexes - 0) + 0
            )
            cat.incorrect_answers.splice(randomIndex, 0, cat.correct_answer);
            return {
                ...cat, 
                answers:cat.incorrect_answers
            }
        });
        setQuizData(formatDatacat);
        setCurrentQuizStep("results");


    }catch (error){
console.log("fetch quiz error" , error);

    }

}


const FetchCategories = async  ()=>{
    const {data} = await axios.get (`http:///`);
    setCatergories(data.trivia_categories)
}








    const fetchQuit = async ()=>{
        const {data} = await axios.get()

        const formatData  = data.results.map((catergory)=>{
            const incorrectAnsIndex = catergory.incorrect_answers.length;
            const randonIndex =Math.random() * (incorrectAnsIndex-0) + 0;
            catergory.incorrect_answers.splice(
                randonIndex,
                0,
                catergory.correct_answers
            );
            return {
                ...catergory,
                answers:catergory.incorrect_answers
            }
        })

       // console.log({responae})
      // setCatergory(data.responae)
       setCatergory(formatData)
    }


    useEffect(() => {
        FetchCategories();
       window.scrollTo(0, "20px");

    }, []);
    console.log({catergories})


const handleSubmit =(e)=>{
    e.preventDefault();
    if(!quizData.length && quizNumber && catergory.id && difficulty){
        fetchQuizData();
    }
}


const handleSelectChange= (e)=>{
    e.preventDefault();
    const selectedDifficulty = difficulties.find(
        (diff) => diff.id === e.target.value
    );
    setDifficulty(selectedDifficulty);
};


const handleDifficultyChange = (e)=>{
    e.preventDefault();
    const selectedDifficulty = difficulties.find(
        (diff)=>diff.id === e.target.value
    )
    setDifficulty(selectedDifficulty)
}


const handleChange =(e)=>{
    e.preventDefault();
    setQuiznumber(e.target.value);
};


const resetQuiz = (e)=>{
    e.preventDefault();
    setQuizData([]);
        setCatergory("");
        setQuiznumber("");
        setDifficulty("");
        setCurrentQuizStep("start");
        window.scrollTo(0, "20px");

};


if (!catergories.length){
    return null;
}


return (
        <Container>
            <Paper className={classes.Paper}>
                {currentQuizStep === "start" ?(
                    <>
                <Typography variant="h1" className={classes.mainTitle}>
                    Get Questions
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="catergory-select-label">
                                    Select Catergory
                                </InputLabel>

                                <Select
                                    required
                                    name="catergory"
                                    labelId="category-select-label"
                                    label="select catergory"
                                    value={catergory.id || ""}
                                    id="catergory select"
                                    onChange={handleSelectChange}
                                    >

                                       {
                                           catergories.map((catergory)=>(
                                               <MenuItem key={catergory.id} value={catergory.id}>
                                                   <span dangerouslySetInnerHTML={createMarkup(
                                                           catergory.name
                                                       )}
                                                       />
                                                       
                                                  
                                               </MenuItem>
                                           ))
                                       }

                                </Select>

                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="underfined" >
                                <InputLabel id="difficulty-select-label">
                                    Select Difficulty
                                </InputLabel>
                                <Select required name="difficult" value={difficulty.id || ""}
                                id="difficulty-select"
                                label="select Difficulty"
                                labelId="difficulty-select-label"
                                onChange={handleDifficultyChange}
                                >
                                     {difficulties.map((difficulty)=>(
                                         <MenuItem key={difficulty.id} value={difficulty.id}>
                                             {difficulty.name}
                                         </MenuItem>
                                     ))}
                                                                 
                                </Select>
                            </FormControl>

                        </Grid>
                              <Grid item xs={12}>
                              <TextField
                              inputProps={{min:1, max:10}} required fullWidth
                              type="number" id="quiz-number" variant="outlined"
                              name="quiz-name"
                              label={ `Add a quiz number from 1 to 10`}
                              value={quizNumber || ""} onChange={handleChange}
                              />

                              </Grid>
                    </Grid>
                    <Button className={classes.submit} type="submit" 
                    
                    variant="contained" color="primary">
                        Submit

                    </Button>
                </form>
                </>
                ):(
                   <QuizAnswers classes={classes}
                         quizData={quizData}
                         resetQuiz={resetQuiz}
                         catergories={catergories}
                         currentQuizStep={currentQuizStep}
                         setCurentQuizStep={setCurrentQuizStep}
                         />

                )}


            </Paper>
        </Container>
        
    )
}
