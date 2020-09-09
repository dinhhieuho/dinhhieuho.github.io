package quiz.servlet;

import quiz.model.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class QuizServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        if (request.getParameter("reset") != null && !request.getParameter("reset").isEmpty()) {
            session.removeAttribute("quiz");
        }


        Object sessionAttribute = session.getAttribute("quiz");

        response.setContentType("text/html");
        Quiz quiz = null;
        String answer = null;
        boolean result = false;
        if (sessionAttribute == null) {
            quiz = new Quiz();
        } else {
            answer = request.getParameter("answer");
            quiz = (Quiz) sessionAttribute;
            quiz.checkAnswer(answer);
            result = quiz.isCorrect(answer);
        }
        session.setAttribute("quiz", quiz);
        PrintWriter out = response.getWriter();
        if (quiz.hasNextQuestion()) {
            out.print(getNextQuestion(quiz, answer, result));

        } else {
            out.print(getResult(quiz));
            quiz.preventResubmit();
        }

    }

    private String getNextQuestion(Quiz quiz, String preAnswer, boolean result) {
        StringBuilder sb = new StringBuilder();
        sb.append("<html>");
        sb.append("<head>");
        sb.append("	<title>NumberQuiz</title>");
        sb.append("</head>");
        sb.append("<body>");
        sb.append("<form method='POST'><h1>The Number Quiz</h1>");
        sb.append("<p> Your score is " + quiz.getScore() + "/" + quiz.totalQuestion() + ".</p>");
        sb.append("<p> Guess the next number in the sequence.</p>");
        sb.append(quiz.getNextQuestion());
        sb.append("<p> Your answer: <input type='text' name='answer' /></p>");
        if(preAnswer!=null){
            if(result==true){
                sb.append("<p style='color:green'>Your last answer("+preAnswer+") was correct!");
            }
            else{
                sb.append("<p style='color:red'>Your last answer("+preAnswer+") was not correct! Please try again</p>");
            }
        }
        sb.append("<p><input type='submit' value='Submit' /></form>");
        sb.append("</body></html>");
        return sb.toString();
    }

    private String getResult(Quiz quiz) {
        StringBuilder sb = new StringBuilder();
        sb.append("<html>");
        sb.append("<head>");
        sb.append("	<title>NumberQuiz</title>");
        sb.append("</head>");
        sb.append("<body>");
        sb.append("<h1>The Number Quiz</h1>");
        sb.append("<p>Your score is " + quiz.getScore() + "</p>");
        sb.append("<p>You have completed the Number Quiz, with a score of " + quiz.getScore() + " out of " + quiz.totalQuestion() + ".</p>");
        sb.append("<form method='POST'><input type='submit' name='reset' value='Do Quiz Again' /></form>");
        sb.append("</body></html>");
        return sb.toString();
    }

}
