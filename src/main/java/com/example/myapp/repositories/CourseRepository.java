package com.example.myapp.repositories;

import com.example.myapp.models.Course;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CourseRepository extends CrudRepository<Course, Integer > {


    @Query("SELECT c FROM Course c WHERE c.id=:id")
    Course findCourseById(@Param("id") int id);
}
