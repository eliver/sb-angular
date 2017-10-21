package cn.natic.sbangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class SbAngularApplication {

	@RequestMapping("/")
	public String hello() {
		return "Hello Spring Boot!";
	}

	public static void main(String[] args) {
		SpringApplication.run(SbAngularApplication.class, args);
	}
}
