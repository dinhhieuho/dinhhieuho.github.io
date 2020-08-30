import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/Calculator")
public class SimpleCalculatorServlet extends HttpServlet {
    private double parseRequest (HttpServletRequest request, String parameter) {
        double res = 0;

        String val = request.getParameter(parameter).toString().trim();
        if (val != "") {
            res = Double.parseDouble(val);
        }
        return res;
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double a = parseRequest(request, "a");
        double b = parseRequest(request, "b");
        double c = parseRequest(request, "c");
        double d = parseRequest(request, "d");
        double e = parseRequest(request, "e");
        double f = parseRequest(request, "f");
        double g = parseRequest(request, "g");
        double h = parseRequest(request, "h");


        Double plus = a+b;
        Double minus = c-d;
        Double mul = e*f;


        Double div = 0.0;
        if (h != 0) {
            div = g/h;
        }

        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write(plus + "|" + minus + "|" + mul + "|" + div);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
