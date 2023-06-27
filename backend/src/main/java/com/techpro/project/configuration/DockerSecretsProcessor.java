package com.techpro.project.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.env.ConfigurableEnvironment;


/**
 * The DockerSecretsProcessor class is an implementation of the EnvironmentPostProcessor interface.
 * It reads properties from a Docker secret file and sets them as system properties.
 */
public class DockerSecretsProcessor implements EnvironmentPostProcessor {

    /**
     * Post-processes the environment by setting system properties for MySQL host, username, and password.
     *
     * @param environment The ConfigurableEnvironment instance representing the application environment.
     * @param application The SpringApplication instance.
     */
    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        // Set system properties for MySQL host, username, and password
        System.setProperty("MYSQL_HOST", "db");
        System.setProperty("MYSQL_USERNAME",environment.getProperty("MYSQL_USERNAME"));
        System.setProperty("MYSQL_PASSWORD", environment.getProperty("MYSQL_PASSWORD"));
    }
}
