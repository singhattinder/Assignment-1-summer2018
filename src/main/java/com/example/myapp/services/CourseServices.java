package com.example.myapp.services;


import com.example.myapp.models.Course;
import com.example.myapp.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CourseServices {

    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/api/course")
    public Iterable<Course> findAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("/api/course/{courseId}")
    public Course findCourseById(@PathVariable("courseId") int id) {
        return courseRepository.findCourseById(id);
    }

    @PostMapping("/api/course")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @DeleteMapping("/api/course/{courseId}")
    public void deleteCourse(@PathVariable("courseId") int id) {
        courseRepository.deleteById(id);
    }
}
