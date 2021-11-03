package quiz.desktop;

import quiz.model.Quiz;

import java.util.Scanner;

public class TestRunner {
    public static void main(String[] args){
        try {
            Quiz quiz = new Quiz();

            Scanner sc = new Scanner(System.in);

            while (quiz.hasNextQuestion()) { // They have to keep trying until get the right number.
                /* print out the current score and the question */
                System.out.println();
                System.out.println("Your score is:  " + quiz.getScore() + "/" + quiz.totalQuestion());
                System.out.println("Enter the next number for the given sequence.");
                System.out.println("Next sequence is:  " + quiz.getNextQuestion());

                System.out.println("Your answer is: ");
                String answer = sc.nextLine();

                boolean error = true;
                /* i.e., if answer is correct then increment the question index and score */
                quiz.checkAnswer(answer);
                if ((answer != null) && quiz.isCorrect(answer)) {
                    error = false;
                }

                /* give error message if wrong */
                if (error == true) {
                    System.out.println();
                    System.out.println("Wrong answer, please try again.");
                    System.out.println();
                }

            }
			//fixbug 
            System.out.println("Your score is " + quiz.getScore());
            System.out.println("Congratulations, you have completed the Number Quiz, with a score of " + quiz.getScore() + " out of " + quiz.totalQuestion());

        }///aaa
		//bbbb
        catch (Exception ex)
        {
            System.out.format("%s: %s", ex.getClass().getName(), ex.getMessage());
        }
    }
}
