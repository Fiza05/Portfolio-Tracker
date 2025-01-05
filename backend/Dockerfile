FROM eclipse-temurin:21

# Set the working directory in the container
WORKDIR /app

# Copy the executable JAR file to the working directory
COPY target/simple-portfolio-tracker-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]