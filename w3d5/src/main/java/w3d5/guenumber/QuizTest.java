package w3d5.guenumber;

public class QuizTest {
    private String [] answers ={"9","8","36","13","32"};
    private String[] questions={"3,1,4,1,5,","1,1,2,3,5,","1,4,9,16,25,","2,3,5,7,11,","1,2,4,8,16,"};
    //private int correct=0;
    private int index=0;

    public boolean isCorrect(String n) {

        if(n.equals(answers[getCurrentQuesitionIndex()])){
            index++;
            return false;
        }

        return true;

    }
    public int getNumQuestions() {
        return 5;

    }
    public int getNumCorrect() {

        return getCurrentQuesitionIndex();
    }
    public int getCurrentQuesitionIndex(){

        return index;
    }

    public String[]  getQuestions(){

        return questions;
    }

    public String [] getAnswers(){

        return answers;
    }
}
