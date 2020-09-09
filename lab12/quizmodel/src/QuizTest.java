import org.junit.*;
import quiz.model.Quiz;

import static org.junit.Assert.*;

public class QuizTest {
    Quiz quiz = null;
    public QuizTest() {
        quiz = new Quiz();
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    @Test
    public void test() throws Exception {
        testGetQuestion1();
        testAnswer1();

        testGetQuestion2();
        testAnswer2();

        testGetQuestion3();
        testAnswer3();

        testGetQuestion4();
        testAnswer4();

        testGetQuestion5();
        testAnswer5();
    }

    public void testGetQuestion1() throws Exception {
        String question = quiz.getNextQuestion();
        assertEquals(question, "3, 1, 4, 1, 5");
    }

    public void testAnswer1() throws Exception {
        String answer = "9";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }

    public void testGetQuestion2() throws Exception {
        String question = quiz.getNextQuestion();
        assertEquals(question, "1, 1, 2, 3, 5");
    }

    public void testAnswer2() throws Exception {
        String answer = "8";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }

    public void testGetQuestion3() throws Exception {
        String question = quiz.getNextQuestion();
        assertEquals(question, "1, 4, 9, 16, 25");
    }

    public void testAnswer3() throws Exception {
        String answer = "36";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }

    public void testGetQuestion4() throws Exception {
        String question = quiz.getNextQuestion();
        assertEquals(question, "2, 3, 5, 7, 11");
    }

    public void testAnswer4() throws Exception {
        String answer = "13";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }

    public void testGetQuestion5() throws Exception {
        String question = quiz.getNextQuestion();
        assertEquals(question, "1, 2, 4, 8, 16");
    }

    public void testAnswer5() throws Exception {
        String answer = "32";
        boolean actualValue = quiz.isCorrect(answer);
        assertEquals(true, actualValue);
    }
}