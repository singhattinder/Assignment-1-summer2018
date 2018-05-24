package com.example.myapp.repositories;

import com.example.myapp.models.Lesson;
import org.springframework.data.repository.CrudRepository;

public interface LessonRepository extends CrudRepository<Lesson, Integer> {
}
