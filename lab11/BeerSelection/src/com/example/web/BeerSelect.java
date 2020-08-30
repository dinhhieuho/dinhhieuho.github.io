package src.com.example.web;

import src.com.example.model.BeerExpert;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class BeerSelect extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String c = request.getParameter("color");
		BeerExpert be = new BeerExpert();
		List<String> res = be.getBrands(c);
		request.setAttribute("styles", res);
		String email = getServletContext().getInitParameter("adminEmail");

		if(email==null){
			email = getServletConfig().getInitParameter("adminEmail");
		}
		request.setAttribute("adminEmail", email);
		RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		view.forward(request, response);
	}

}
