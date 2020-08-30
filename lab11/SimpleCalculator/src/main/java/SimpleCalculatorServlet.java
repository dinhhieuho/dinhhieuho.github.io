import com.google.gson.Gson;

import javax.servlet.RequestDispatcher;
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
        Double div = 0.0;
        String divStr = "";
        if (h != 0) {
            div = g/h;
            divStr = g + " / " + h + " = " + div;
        }

        request.setAttribute("sum", a + " + " + b + " = " + (a+b));
        request.setAttribute("minus", c + " - " + d + " = " + (c-d));
        request.setAttribute("mul", e + " * " + f + " = " + (c*f));
        request.setAttribute("div", divStr);
        request.getRequestDispatcher("output.jsp").forward(request, response);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
