package src.com.example.model;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class BeerExpertTest {

    @Test
    public void getBrands() {

        BeerExpert be = new BeerExpert();
        List<String> res = be.getBrands("red");
        List<String> expected = new ArrayList<String>();
        expected.add("Red Beer 1");
        expected.add("Red beeR 2");
        for(int i=0;i<res.size();++i){
            assertEquals(res.get(i),expected.get(i));
        }

        List<String> res2 = be.getBrands("light");
        List<String> expected2 = new ArrayList<String>();
        expected2.add("HaErBin Beer");
        expected2.add("YanJin Beer");
        for(int i=0;i<res2.size();++i){
            assertEquals(res2.get(i),expected2.get(i));
        }
    }
}