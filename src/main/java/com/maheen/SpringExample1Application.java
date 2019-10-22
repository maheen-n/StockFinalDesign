package com.maheen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@Controller
public class SpringExample1Application {
	
	
	@GetMapping("/")
	public String Home() {
		System.out.println("hustle");
		return "Index";
	
	}
	@GetMapping("/product")
	public String product() {
		return "product";
	
	}
	@GetMapping("/checkout")
	public String checkout() {
		return "checkout";
	
	}

	@GetMapping("/transaction")
	public String transaction() {
		return "transaction";
	
	}



    @GetMapping("/login")
    public String homea(){
        return "login";
    }

    @GetMapping("/logout-success")
    public String homeass(){
        return "logoutsuccesfull";
    }
    

	public static void main(String[] args) {
		SpringApplication.run(SpringExample1Application.class, args);
		
	}

}
