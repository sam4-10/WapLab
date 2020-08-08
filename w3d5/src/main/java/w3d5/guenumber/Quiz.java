package w3d5.guenumber;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/clickhere")
public class Quiz extends HttpServlet {
    QuizTest sessQuiz=new QuizTest();
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        //QuizTest sessQuiz=new QuizTest();
        String ans="";
        String restart = "";
        restart =request.getParameter("restart");
        System.out.println("inside get");

        //for(int i=0; i< sessQuiz.getNumQuestions(); i++){
        genQuizOverPage(sessQuiz, out,
                sessQuiz.getQuestions()[sessQuiz.getCurrentQuesitionIndex()], true, ans);
        // }



    }

    private void genQuizOverPage(QuizTest sessQuiz, PrintWriter out,
                                 String currQuest, boolean error, String answer) {
        //}

        //private void genQuizPage(QuizTest sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("	<title>NumberQuiz</title>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /> " +
                "<input type='reset' name='btnStart' value='Restart!' /></p>\n" +
                "\t</form></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p> ");
        out.print("<input type='reset' name='restart' value='start again!' />\n" +
                "</body> ");
        out.print("</html> ");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String ans=request.getParameter("txtAnswer");

        System.out.println(sessQuiz.getQuestions()[sessQuiz.getCurrentQuesitionIndex()]);
        if(sessQuiz.getCurrentQuesitionIndex()>3){
            genQuizOverPage(out);
        }
        boolean check=sessQuiz.isCorrect(ans);
        genQuizOverPage(sessQuiz, out, sessQuiz.getQuestions()[sessQuiz.getCurrentQuesitionIndex()], check, ans);

    }

}
