package com.milk.config;  
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
@Configuration 
@ComponentScan("com.milk.RestController") 
@EnableWebMvc   
public class AppConfig {  
} 

