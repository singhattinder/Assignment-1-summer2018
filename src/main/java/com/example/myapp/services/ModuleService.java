package com.example.myapp.services;


import com.example.myapp.models.Course;
import com.example.myapp.models.Module;
import com.example.myapp.repositories.CourseRepository;
import com.example.myapp.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ModuleService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    ModuleRepository moduleRepository;
    @PostMapping("/api/course/{courseId}/module")
    public Module createModule(
            @PathVariable("courseId") int courseId,
            @RequestBody Module newModule) {
        Optional<Course> data = courseRepository.findById(courseId);
        if(data.isPresent()) {
            Course course = data.get();
            newModule.setCourse(course);
            return moduleRepository.save(newModule);
        }
        return null;
    }

}


